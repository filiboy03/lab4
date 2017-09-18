let bankAccount:{money:number, 
    deposit:(value: number)=>void} = { money: 2000, deposit(value){ 
    
    this.money+=value; } 
}; 


    let myself:{name:string,bankAccount, hobbies:[string]}={ name:"Asaad", bankAccount:bankAccount, hobbies:["violin", "Cooking"] }; 
    myself.bankAccount.deposit(3000); 
    console.log(myself);