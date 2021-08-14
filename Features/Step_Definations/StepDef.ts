import {Given,  When, Then, And,Before,After,Scenario,scenario,Status} from "cucumber";
import { browser, element,By,protractor } from "protractor";
import { HomePage } from "../../PageObject/HomePage";
import { ProtractorFunctions } from "../../Functions/ProtractorFunctions";
import { test } from "../../PageObject/test";
//import { data } from '../../JSONData/testjson';
//const fs = require('fs');
//const data = require("../../JSONData/testjson");
import * as data from "../../JSONData/testdata.json";
const fs = require('fs');
import axios  from "axios";
import { Api } from "../../ApiFolder/Api";
import { ExcelReader } from "../../XLSX/ExcelReader";
import { TestObject } from "protractor/built/driverProviders";
const { expect } = require("chai");


browser.ignoreSynchronisation = true; 
let hp = new HomePage();
let api = new Api();
let t = new test();
let protractorfunctions = new ProtractorFunctions();
var EC = protractor.ExpectedConditions;
//let readjson = new testjson();
//let rawdata = await fs.readFileSync('../../JSONData/testjson.json');
//let rawdata = fs.readFileSync(__dirname+'../../JSONData/testdata.json', 'utf8');
//let data = JSON.parse(rawdata);



 
Given('I launch the {string}',{ timeout: 60 * 1000 }, async function(url1){
 // await test.testfibonacci();
 // await test.secondlargestnumber();
 // await test.armstrongnumber(153);
 // await test.armstrongnumber(143);
 // await test.reverseString();
 //   t.namecall();
   await ExcelReader.readExcelFile();
   var condata = await ExcelReader.ExcelToJson();
   console.log(condata);
   await protractorfunctions.implicitwait(3000);
    await  protractorfunctions.threadsleep(3000);
   await  protractorfunctions.geturl(data.url);
   // let mySet = new Set();  
  //  let arr: String[];
  //  arr = await browser.getAllWindowHandles();
   // console.log("sdsdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss")
    //browser.switchTo().alert().accept;
     //console.log(arr)

     console.log(data.tasks.task1);
     console.log(data.tasks.task2);
     console.log(data.tasks.task3);
     
     
     
})


 


When('enter {string} under todo',{ timeout: 60 * 1000 }, async function(text){
   
    await protractorfunctions.protractorExplicitWait(hp.txt_todo,1000);
    await protractorfunctions.protractorsendKeys(hp.txt_todo,text);
    await  protractorfunctions.threadsleep(3000);
})

When('perform submit',{ timeout: 60 * 1000 }, async function(){ 
    await protractorfunctions.protractorKeyEnter();
})

When('todo task with {string} should  be added successfully',{ timeout: 60 * 1000 }, async function(text1){

   console.log(hp.lbl_alltasks.getText());
   hp.lbl_alltasks.then(() => {
    protractorfunctions.protractorgetText(hp.lbl_alltasks).then((text) => {
       console.log(text);
    })

   
  
})    
 
})

When('user delete {string} it should be deleted',{ timeout: 60 * 1000 }, async function(text){
    await  protractorfunctions.threadsleep(3000);
    await protractorfunctions.protractorjavaScriptExecuter("arguments[0].click();", hp.btn_taskdelete);
   
})

When('click on active tab {string} should be displayed',{ timeout: 60 * 1000 }, async function(text){
    var falg=false;
    await browser.sleep(4000);
    await hp.tab_active.click();
    for (var i = 0; i < hp.lbl_alltasks.length; i++) {
        if(hp.lbl_alltasks[i].getText()){
            falg=true
        }
        await   expect(falg).to.be.true;
    }
   
})


When('click on completed tab {string} should be displayed',{ timeout: 60 * 1000 }, async function(text){
    var falg=false;
     await browser.sleep(4000);
     await hp.tab_Completed.click();
     for (var i = 0; i < hp.lbl_alltasks.length; i++) {
         if(hp.lbl_alltasks[i].getText()){
             falg=true
         }
         await  expect(falg).to.be.true;
     }
    
 })


 When('mark {string} as complete',{ timeout: 60 * 1000 }, async function(text){
    var falg=false;
    await browser.sleep(4000);
    await browser.switchTo().alert().accept();
    await protractorfunctions.protractorclick(hp.btn_TaskCompleted);
    
 })




 When('verify {string} call to {string} posts',{ timeout: 60 * 1000 }, async function(call,type){
    
    if(call=="GET"){
         
        if(type=="Allpost"){
            const resp =api.getrequest('https://jsonplaceholder.typicode.com/posts');
           // console.log((await resp).status);
            expect((await resp).status).to.equal(200)
            
        }
        else if(type=="Firstpost"){
            const resp =api.getrequest('https://jsonplaceholder.typicode.com/posts/1');
           
            expect((await resp).status).to.equal(200)
            expect((await resp).data.userId).to.equal(1)
            expect((await resp).data.title).to.equal('sunt aut facere repellat provident occaecati excepturi optio reprehenderit')  
        }
        else if(type=="withid1"){
            const resp =api.getrequest('https://jsonplaceholder.typicode.com/comments?postId=1');
         
            expect((await resp).status).to.equal(201)
            expect((await resp).data[0].postId).to.equal(1)
     
        }

    }
    
    
 });


  
 Before(async function() {
    browser.manage().deleteAllCookies(); 
  
  })
  
  After(async function(scenario) {
      if(scenario.result.status === Status.FAILED){
          const screenshot = await browser.takeScreenshot();
          this.attach(screenshot,"image/png")
        }
    })
 