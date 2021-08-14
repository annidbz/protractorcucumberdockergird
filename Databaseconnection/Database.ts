import { createpool }  from "mysql";
export class Database {
constructor(){
    var pool = createpool({
        host:"",
        user: "",
        password: "",
        database: "",
        connectionlimit: ""
    })
 }

}
  
 