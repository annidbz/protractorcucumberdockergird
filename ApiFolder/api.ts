import axios  from "axios";
export class Api {

    async getrequest(getApiUrl){
        try {
            const headers = {
           // 'Accept':'application/json',
            //'Content-Type': 'application/json' 
            };
           // const auth = {
            //    username: "user",
             //   password: "password"
              //};
            
            const response = await axios({
                
                method: 'get',
                url: getApiUrl,
              //  headers: headers,
               
        });

        return await response;

        } catch (error) {
       //   console.log('Failed with url '+ url & ' Found error '+ error);
        }
    }
}
 