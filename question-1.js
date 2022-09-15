class restaurantmanager {
    constructor() {
        this.restaurantlist = []
    }
    addRestaurant(restaurant) {
        this.restaurantlist.push(restaurant)
    }
    view() {
        console.log(this.restaurantlist)
    }
    printAllRestaurantNames() {
        this.restaurantlist.forEach(ele => console.log(ele.name))
    }
    filterRestaurantByCity(city) {
        let restaurantarray = this.restaurantlist.filter(restaurant => restaurant.city === city)
        console.log("Filtered by ", city, restaurantarray)
    }

}//
//---------------------------





let restaurant1 = {
    name: "abc",
    address: "Qutub enclave",
    city: "Delhi"
}
let restaurant2 = {
    name: "def",
    address: "Haralur",
    city: "Bangalore"
}
let restaurant3 = {
    name: "xyz",
    address: "Hauz Khas",
    city: "Bombay"
}

let n = 100;

let object = new restaurantmanager()
object.addRestaurant(restaurant1);
object.addRestaurant(restaurant2);
object.addRestaurant(restaurant3);

object.view()
object.printAllRestaurantNames()
object.filterRestaurantByCity('Bombay')
