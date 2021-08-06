import { FormBuilder, FormGroup } from '@angular/forms';
export class format {

    houseInfo = {
        block: "",
        roomNo: "",
        uuid: "",
        houseType: {
            balcony: "",
            bathrooms: "",
            floors: "",
            rooms: "",
            type: ""

        }
    }

    owner = {
        name: "",
        parking: "",
        uuid: "",
        residents: [{
            memberName: "",
            phoneNumber: ""
        }],
        vehicleList: [{
            vehicleType: "",
            vehicleNumber: ""
        }],
        registeredNumber: "",
        roomNo: "",
    }
    tenant = {
        name: "",
        parking: "",
        uuid: "",
        residents: [{
            memberName: "",
            phoneNumber: ""
        }],
        vehicleList: [{
            vehicleType: "",
            vehicleNumber: ""
        }],
        registeredNumber: "",
        roomNo: "",

    }


    constructor(private fb: FormBuilder) {


    }
    setData(houseInfoData: any) {
        this.houseInfo = houseInfoData.houseInfo
        if (houseInfoData.owner != undefined)
            this.owner = houseInfoData.owner
        if (houseInfoData.tenant != undefined)
            this.tenant = houseInfoData.tenant


    }
    formStructure(): FormGroup {

        return this.fb.group({
            houseDetails: this.fb.group({

                block: this.houseInfo.block,
                roomNo: this.houseInfo.roomNo,
                uuid: this.houseInfo.uuid,
                houseType: this.fb.group({
                    balcony: this.houseInfo.houseType.balcony,
                    bathrooms: this.houseInfo.houseType.bathrooms,
                    floors: this.houseInfo.houseType.floors,
                    rooms: this.houseInfo.houseType.rooms,
                    type: this.houseInfo.houseType.type
                })
            }),
            owner: this.fb.group({
                name: this.owner.name,
                parking: this.owner.parking,
                uuid:this.owner.uuid,
                residents: this.fb.array(this.ownerResidentsForm()),
                vehicleList: this.fb.array(this.ownerVehicleForm()),
                registeredNumber: this.owner.registeredNumber,
                roomNo: this.owner.roomNo
            }),
            tenant: this.fb.group({
                name: this.tenant.name,
                parking: this.tenant.parking,
                uuid:this.tenant.uuid,
                residents: this.fb.array(this.tenantResidentsForm()),
                vehicleList: this.fb.array(this.tenantVehicleForm()),
                registeredNumber: this.tenant.registeredNumber,
                roomNo: this.tenant.roomNo
            })
        }

        )

    }

    ownerResidentsForm(): any {
        const arr = []
        for (let index = 0; index < this.owner.residents.length; index++) {
            arr.push(this.fb.group(this.owner.residents[index]));
        }

        return arr
    }
    tenantResidentsForm(): any {
        const arr = []
        for (let index = 0; index < this.tenant.residents.length; index++) {
            arr.push(this.fb.group(this.tenant.residents[index]));
        }

        return arr
    }
    ownerVehicleForm(): any {
        const arr2 = [];
        for (let index = 0; index < this.owner.vehicleList.length; index++) {
            arr2.push(this.fb.group(this.owner.vehicleList[index]));
        }
        return arr2
    }
    tenantVehicleForm(): any {
        const arr2 = [];
        for (let index = 0; index < this.tenant.vehicleList.length; index++) {
            arr2.push(this.fb.group(this.tenant.vehicleList[index]))
        }
        return arr2
    }
}