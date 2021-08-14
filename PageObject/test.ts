//import { ElementFinder, By, element, ElementArrayFinder} from "protractor";

export class test{
  
constructor(){
  
    }
      
    
     

    async namecall() {
        let list = ['first','second','third','forth'];
       await  list.push('fifth');
        //list print
        await list.forEach(list=>{
             console.log(list);
        });
        if(true){
            var a ='hi';
            let b ='hello';
            var a = 'hi1';
            //let b ='hello1';
            b ='hello1';
        //    var
        }
        
        await console.log(a);
        //console.log(b);
        await  list.forEach(function (value) {
              console.log(value);
        });
        //function call
        
        let person1 = {
            name: "anirudha",
            age: 31,
            place:'gwalior'
        }
        let person2 = {
            name: "andy",
            age: 32,
            place:'jakarta'
        }
    
        await  console.log(person1);
        let stringarray: String[]=["1","2"];
        let stringnumarray: (String|Number)[]=["3",4];
        let anyarray: any[]=["5"];
        let objarray: Object[]=[person1,person2];
        let abc = [1,"2"];
        await console.log(stringarray);
        await console.log(stringnumarray);
        await console.log(anyarray);
        await console.log(objarray);
        await console.log(abc);
        let sum: (a:number,b:number)=> void;
        let sumopetional: Function;
        this.sum(5,10);
        this.sumopetional(6,17);
        this.sumdefault(8,20);
        await  console.log(this.testFunction());

        interface IsPerson{
            name:String,
            age: Number,
        }

        const me: IsPerson ={
            name: "hello",
            age: 12,
        }

        const greetPerson = (Person:IsPerson)=>{
             console.log(Person.name);
             console.log(Person.age);
        }
    }

    public  sum = (first,second)=>{ console.log(first+second)};
    public  sumopetional = (first:number,second:number,third?:number)=>{ console.log(first+second)};
    public sumdefault = (first:number,second:number,third:number=8)=>{  console.log(first+second+third)};

  async testFunction(){
   await console.log("Hello");
     return 3;
}

  static testfibonacci(){
      let n3,n2,n1: number;
      n1=0;
      n2=1;
      for (let index = 0; index < 100; index++) {
          
          n3 = n1+n2;
          console.log(n3);
          n1=n2;   
          n2=n3;
          
      }
  }

  static secondlargestnumber(){
    let arr: number[];
    let temp: number;
    arr =[45,7,43,78,98,54,47];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if(arr[j]<arr[i]){
                temp=arr[i];
                arr[i] =arr[j];
                arr[j] = temp;
            }
             
        }
       
        
    }
    console.log(arr);
}

static armstrongnumber(num: number): void{
    var num = 153;
    var remainder;
    var result=0;
    const othernumber  = num;
    while(num!=0){
        remainder = othernumber %10;
        result = result + Math.pow(remainder,3);
        num = (num/3);
    }
    console.log(result);
    console.log(othernumber);
    console.log(num);
    if(othernumber===result){
            console.log(result+"Armstrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrong");
    }
    else{
        console.log(result+ "NOTTTTTTTTTTTTTTTTTT  Armstrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrong");
    }
}


static reverseString(){

    let str: String = "Helloworld";
    let strarr: String[] = str.split('');
    console.log(strarr)
    let revstr: String[]=[];
    let i : number = 0
    for (let index =  strarr.length-1; index >=0; index--) {
        console.log(strarr[index]);
            revstr[i] = strarr[index];
            i++;
        
    }
    console.log(revstr.toString());
}

static repetable(){
     let arr: number[] = [1,2,3,3,4,5,6];
     let statement : boolean = false;
    const set = new Set();
    for (let index = 0; index < arr.length; index++) {
         if (set.has(arr[index])) 
         {
            statement = true;
         }
         set.add(arr[index]);
    }
    
}


}