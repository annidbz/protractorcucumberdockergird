import {Given,  When, Then, And} from "cucumber";
import { browser, element,By,protractor } from "protractor";
import { HomePage } from "../../PageObject/HomePage";
import { Api } from "../../ApiFolder/Api";
const { expect } = require("chai");


browser.ignoreSynchronisation = true; 
let hp = new HomePage();
let api = new Api();
var EC = protractor.ExpectedConditions;



Given('I launch the {string}',{ timeout: 60 * 1000 }, async function(url){
    await browser.sleep(4000);
    await browser.get(url);
     
})
 


When('enter {string} under todo',{ timeout: 60 * 1000 }, async function(text){
    await browser.wait(EC.elementToBeClickable(hp.txt_todo), 10000);
    await hp.txt_todo.sendKeys(text);
     await browser.sleep(4000);
})

When('perform submit',{ timeout: 60 * 1000 }, async function(){ 
    await browser.actions().sendKeys(protractor.Key.ENTER).perform();
    
  
})

When('todo task with {string} should  be added successfully',{ timeout: 60 * 1000 }, async function(text1){

   console.log(hp.lbl_alltasks.getText());
   hp.lbl_alltasks.then(() => {
    hp.lbl_alltasks.getText().then((text) => {
        console.log(text);
    })
  
})    
 
})

When('user delete {string} it should be deleted',{ timeout: 60 * 1000 }, async function(text){
    await browser.sleep(4000);
    await browser.executeScript("arguments[0].click();", hp.btn_taskdelete);
   
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
    await hp.btn_TaskCompleted.click();
    
 })




 When('verify {string} call to {string} posts',{ timeout: 60 * 1000 }, async function(call,type){
    
    if(call=="GET"){
         
        if(type=="Allpost"){
            const resp =api.getrequest('https://jsonplaceholder.typicode.com/posts');
            console.log((await resp).status);
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
         
            expect((await resp).status).to.equal(200)
            expect((await resp).data[0].postId).to.equal(1)
     
        }

    }
    
 })