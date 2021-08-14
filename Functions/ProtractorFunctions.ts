import { ElementFinder, By, element, ElementArrayFinder,browser,protractor} from "protractor";
var EC = protractor.ExpectedConditions;
export class ProtractorFunctions{
    
   async implicitwait(time:number){
     await   browser.manage().timeouts().implicitlyWait(time);
    }

    async  threadsleep(time:number){
        await  browser.sleep(time);
    }

    async  geturl(url:string){
        await browser.get(url);
    }

    async  protractorsendKeys(element:(ElementArrayFinder|ElementFinder),text:any){
        await element.sendKeys(text);   
     }

     async protractorclick(element:(ElementArrayFinder|ElementFinder)){
        await element.click();
     }

     async protractorgetText(element:(ElementArrayFinder|ElementFinder)){
         return await element.getText();   
     }

     async protractorKeyEnter(){
        await  browser.actions().sendKeys(protractor.Key.ENTER).perform();
     }

     async  protractorExplicitWait(element:ElementFinder,time:number){
        await  browser.wait(EC.elementToBeClickable(element), 10000);
     }

     async protractorjavaScriptExecuter(action:string,element:(ElementArrayFinder|ElementFinder)){
        await browser.executeScript(action,element);
   }




}