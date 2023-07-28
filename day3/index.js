//constructor function
/* function Phone(brand,camera){
    this.brand = brand
    this.camera= camera

}
Phone.prototype.call = function (){//method call
    return `I am calling from`+ this.brand
}

const phone1= new Phone('iphone','30mp')
console.log(phone1)
console.log(phone1.call())
const phone2= new Phone ('realme','30mp')
console.log(phone2)
console.log(phone2.call()) */

/* // class
class Phone{
    constructor(brand,camera){
    this.brand = brand
    this.camera= camera
    }
    call (){//method call
        return `I am calling from `+ this.brand
    }
}
const phone1= new Phone('iphone','30mp')
console.log(phone1)
console.log(phone1.call())
const phone2= new Phone ('realme','30mp')
console.log(phone2)
console.log(phone2.call()) */



class Device{
    constructor(brand,camera){
    this.brand = brand
    this.camera= camera
    }
    onn (){//method call
        return `I am onn `+ this.brand
    }

}

class Phone extends Device{
    constructor(brand,camera,battery){
        super(brand,camera)
        this.battery=battery
    }

    call(){
        return  `I am calling from ` + this.brand
    }

}
const phone1= new Phone('iphone','30mp','3000mah')
console.log(phone1)
console.log(phone1.call())
const phone2= new Phone ('realme','30mp','2400mah')
console.log(phone2)
console.log(phone2.call())
