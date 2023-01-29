class Phone{
    constructor(){
        this.obsevers = []
    }

    addPhoneNumber(numba){
        this.obsevers.push(numba)
    }
    // When we run this function , we notify the observer that a perticular number was deleted from the obsevers list 
    removeNumber(numba){
        this.obsevers = this.obsevers.filter(function(curr){
            if(curr != numba){
                return curr
            }
        })
        console.log(`You have removed ${numba}`)
    }
    // Here we check if we have the number we want to dail in our obsever list, if its found we can now dail the number and if its not we notify the observers that the number is not found
    dailNumber(numba){
       let isNumber =  this.obsevers.find(function(curr){
        return curr === numba
       })
        if(isNumber){
            console.log(`Dailing ${numba}.....`)
        }else{
            console.log(`${numba} not found and cant be dailed`)
        }
       
    }

    // We notify the observers when we have any changes that has occurs within the obsevers list.
    notify(){
        this.obsevers.forEach(function(curr){
            console.log(`${curr} has been notified`)
        })
    }
}

const phone = new Phone()


phone.addPhoneNumber(09030596970)
phone.addPhoneNumber(09030596470)
phone.addPhoneNumber(09030596920)
phone.removeNumber(09030596920)
phone.dailNumber(09030596920)




phone.notify()
