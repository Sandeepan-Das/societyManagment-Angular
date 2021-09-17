import { WorkerService } from './../../shared/services/worker/worker.service';
import { form } from './format';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-insert-worker',
  templateUrl: './insert-worker.component.html',
  styleUrls: ['./insert-worker.component.css']
})
export class InsertWorkerComponent implements OnInit, AfterViewInit {
  public workerForm!: FormGroup
  private width = 320; // We will scale the photo width to this
  private height = 0; // This will be computed based on the input stream
  form = new form(this.fb)
  private streaming = false;

  @ViewChild("video") video!: ElementRef
  @ViewChild("canvas") canvas!: ElementRef
  @ViewChild("photo1") photo1!: ElementRef
  @ViewChild("photo2") photo2!: ElementRef


  constructor(private fb: FormBuilder, private service: WorkerService) { }

  ngOnInit(): void {
    this.workerForm = this.form.formStructure()
  }
  ngAfterViewInit(): void {
    this.startup()

  }

  startup() {

    navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false
    })
      .then((stream) => {
        console.log(stream)
        this.video.nativeElement.srcObject = stream;
        this.video.nativeElement.addEventListener('loadedmetadata', () => {

          this.video.nativeElement.play();
        });
      })
      .catch(function (err) {
        console.log("An error occurred: " + err);
      });

    this.video.nativeElement.addEventListener('play', (ev: any) => {
      if (!this.streaming) {
        this.height = this.video.nativeElement.videoHeight / (this.video.nativeElement.videoWidth / this.width);

        if (isNaN(this.height)) {
          this.height = this.width / (4 / 3);
        }

        this.video.nativeElement.setAttribute('width', this.width);
        this.video.nativeElement.setAttribute('height', this.height);
        this.canvas.nativeElement.setAttribute('width', this.width);
        this.canvas.nativeElement.setAttribute('height', this.height);
        this.streaming = true;
      }
    }, false);



    this.clearphoto();
  }


  clearphoto() {
    const context = this.canvas.nativeElement.getContext('2d');
    context.fillStyle = "#AAA";
    context.fillRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);

    const data = this.canvas.nativeElement.toDataURL('image/png');
    this.photo1.nativeElement.setAttribute('src', data);
    this.photo2.nativeElement.setAttribute('src', data);
  }

  takepicture() {
    const context = this.canvas.nativeElement.getContext('2d');
    if (this.width && this.height) {
      this.canvas.nativeElement.width = this.width;
      this.canvas.nativeElement.height = this.height;
      context.drawImage(this.video.nativeElement, 0, 0, this.width, this.height);

      var data = this.canvas.nativeElement.toDataURL('image/png');


      
      return data
    } else {
      this.clearphoto();
    }
  }
  capture1() {
    const data=this.takepicture();
    this.photo1.nativeElement.setAttribute('src', data);
    this.workerForm.patchValue({
      file1: data
    });
  }
  capture2() {
  const data = this.takepicture();
  this.photo2.nativeElement.setAttribute('src', data);
  this.workerForm.patchValue({
    file2: data
  });

  }
  saveData() {
    this.service.saveProfile(this.workerForm.value).subscribe(() => {

    })
    console.log(this.workerForm)
  }

}
