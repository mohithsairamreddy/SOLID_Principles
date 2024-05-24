class Order {
    items : string;
    quantaties : number;
    prices = 400 ; 
    status="open";
    bill_amount:number;

    add_item(items:string,quantaties:number) : void {
        console.log("Item Name : "+items+"Quantity : "+quantaties+" are added to cart ");
    }

    total_price():void{
        this.bill_amount=this.prices*this.quantaties
        console.log("Total Cost is : "+this.bill_amount);
    }


    // Payment Class is no way related to order 
    //If we need to have a apple pay or credit card order we need to change order class
}

class Payment{   
    bill_amount:number; 
    bill_pay_debit_card(paid_amount:number){
    if(paid_amount==this.bill_amount){
        console.log("Thank you visit again");
    }
    else{
        console.log("Please check there are issues with bill amount")
    }
}

bill_pay_credit_card(paid_amount:number){
    if(paid_amount==this.bill_amount){
        console.log("Thank you visit again");
    }
    else{
        console.log("Please check there are issues with bill amount")
    }
}

}

let call = new Order();
call.add_item("toys",4);
call.total_price();


let pay = new Payment();
pay.bill_pay_credit_card(2000);