//Objects

let obj ={name:"chandru", id:10}
console.log(obj);

obj.id=20 // ---  Modifying the value of a property
console.log(obj);

obj.name="Learning"
obj.id=30
console.log(obj);  //Modifying the multiple property

//Addding new Property
obj.location="Pollachi"
console.log(obj);

//Deleting the Property from the Object
delete obj.id
console.log(obj);

//Object with Nested Object
let obj1={name:"DEMO",
            id:1,
            address:{city:"CBE",
                state:"TN",
                pin:666666
            }
}
console.log(obj1);


//Object with Array
let obj2={name:"demo2",
            id:1,
            skills:["JAVA","JAVASCRIPT","Python"]
}
console.log(obj2);

//Object with For in LOOP
let book={name:"chandru",id:1}
for (const bag1 in book) {
    console.log(bag1+":"+book[bag1]);
}
