export class Customer { 
    custId: number
    custName: string
    country: string
    city: string
    contactNo: number

    constructor(custId: number,
        custName: string,
        country: string,
        city: string,
        contactNo: number) {
        
        
        this.custId=custId
        this.custName=custName
        this.country=country
        this.city=city
        this.contactNo=contactNo


    }
}