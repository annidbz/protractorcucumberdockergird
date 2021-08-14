import * as XLSX from 'xlsx';
let workbook;
let worksheet;
export class ExcelReader {
    
  constructor(){
   
    
  }

 static readExcelFile(){
    workbook  = XLSX.readFile("../Excelfile/test.xlsx");
    worksheet  = workbook.Sheets['Sheet1'];
    var cell = 'A2';
    console.log('value'+worksheet[cell].v);
 }

    static ExcelToJson(){
        workbook  = XLSX.readFile("../Excelfile/test.xlsx");
        worksheet  = workbook.Sheets['Sheet1'];
        return XLSX.utils.sheet_to_json(worksheet);
    }

}
 