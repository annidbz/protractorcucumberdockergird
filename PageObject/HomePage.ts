import { ElementFinder, By, element, ElementArrayFinder} from "protractor";

export class HomePage{
    txt_todo: ElementFinder;
    lbl_alltasks: ElementArrayFinder;
    btn_taskdelete: ElementFinder;
    btn_TaskCompleted: ElementFinder;
    tab_active: ElementFinder;
    tab_Completed: ElementFinder;

constructor(){
    this.txt_todo=element(By.xpath("//input[@class='new-todo']"));
    this.lbl_alltasks=element.all(By.xpath("//ul[@class='todo-list']//label"));
    this.btn_taskdelete=element(By.xpath("//label[text()='Taskdelete']/../child::*[3]"));
    this.btn_TaskCompleted=element(By.xpath("//label[text()='TaskCompleted']/../child::*[1]"));
    this.tab_active=element(By.xpath("//a[text()='Active']"));
    this.tab_Completed=element(By.xpath("//a[text()='Completed']"));
    }

}