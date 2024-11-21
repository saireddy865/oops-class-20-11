//question-1

class Book{
    title;
    author;
    isbn;
    constructor(title,author,isbn){
        this.title=title;
        this.author=author;
        this.isbn=isbn;
    }
    checkOut(){
        console.log(this.title,"Book has taken");
    }
    returnbook(){
        console.log(this.title,"book has returned");
    }
    updateTitle(newTitle){
        this.title=newTitle;
    }
}
var b1=new Book("Harry","Jk Robin",100);
console.log(b1);
b1.checkOut();
b1.returnbook();
b1.updateTitle("Harry Potter");
console.log(b1);

console.log("--------------------------");

//question-2

class Product{
    name;
    price;
    category;
    constructor(name,price,category){
        this.name=name;
        this.price=price;
        this.category=category;
    }
    applyDiscount(amount){
        console.log(this.price,100,"Discountapplied");

    }
    GetPriceAfterDiscount(){
        console.log(this.price,1900,"DiscountedPrice");
    }
}
var Shoes=new Product("woodland",2000,"leather");
Shoes.applyDiscount();
Shoes.GetPriceAfterDiscount();
console.log(Shoes);

console.log("--------------");

//question-3

class BankAccount{
    accountHolderName;
    accountNumber;
    balance;
    constructor(accountHolderName,accountNumber,balance){
        this.accountHolderName=accountHolderName;
        this.accountNumber=accountNumber;
        this.balance=balance;
    }
    deposit(amount){
        this.balance=this.balance+amount;
        console.log(amount,"is deposited into the account of", this.accountNumber);
        console.log("total balance is",this.balance+amount);
    }
    withdraw(amount){
        this.balance=this.balance-amount;
        console.log(amount,"is withdrawn from the account of",this.accountNumber);
        console.log("total balance is",this.balance-amount);
    }
    getBalance(){
        console.log(this.accountNumber,"of",this.accountHolderName,"has available balance",this.balance);
    }
}
var account1=new BankAccount("sai",345676,16000);
account1.deposit(2500);
account1.withdraw(1500);
account1.getBalance();
console.log(account1);

console.log("----------------")

//question-4

class vehicle{
    model;
    LicensePlate;
    mileage;
    constructor(model,LicensePlate,mileage){
        this.model=model;
        this.LicensePlate=LicensePlate;
        this.mileage=mileage;
    }
    drive(miles){
        this.mileage=this.mileage+miles;
        console.log(this.mileage,"is increased");
    }
    getMileage(){
        console.log("now the current mileage is",this.mileage);
    }
}
var vehicle1=new vehicle("harrier","AP39AD9999",18);
vehicle1.drive(80);
vehicle1.getMileage();
console.log(vehicle1);


console.log("--------------")

//question-5

class Student{
    name;
    grade;
    constructor(name,grade){
        this.name=name;
        this.grade=grade;
    }
    setGrade(newGrade){
        this.grade=newGrade;
        console.log(this.name," grade",this.grade);
    }
    getGrade(){
        console.log(this.name,"present grade is ",this.grade);
    }
}
var sandy=new Student("sandy","A+");
console.log(sandy.name,"having grade",sandy.grade);
sandy.setGrade("s");
sandy.getGrade();
console.log(sandy);

console.log("---------end---------")



