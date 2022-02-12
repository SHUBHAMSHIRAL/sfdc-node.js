//class Employee {

    //eid;
    //firstName;
    //salary;

    //getSalary = () => {
        //return this.salary;
    //}

//}

//let obj = new Employee();
//obj.eid = 100;
//obj.firstName = 'shubham';
//obj.salary = 12;
//console.log(obj.getSalary());
//console.log(obj.firstName);


//class Product {
    //pid;
    //productName;
    //price;
    //constructor (pid, productName, price) {
        // assigmnet 
    }
}

//let myProduct = new Product(1001, 'laptop', 12);

//class shubham{

    //age;
    //helght;
    //weight;
    //job;
    //money;

    /moneypay =() =>{
        //return this.money
    //}
//}
//let his=new shubham();
//his.age=24;
//his.height=5.5;
//his.weight=50;
//his.job="capgemini";
//his.money=3;

//console.log("shubham age is" + his.age);
//console.log("shubham height is" + his.height);
//console.log("shubham weight is" + his.weight);
//console.log("shubham job is" + his.job);
//console.log("shubham money is" + his.money)

class Product {
    //pid;
    productName;
    price;

    sellProduct = () => {
        console.log('Sell the product at ' + this.price);
    }

    constructor(pid, productName, price) {
        this.pid = pid;
        this.productName = productName;
        this.price = price;
    }
}

let myProduct = new Product(1001, 'laptop', 10.5);
console.log(myProduct);
myProduct.sellProduct();.