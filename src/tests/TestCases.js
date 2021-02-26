const { element, browser } = require("protractor");
const { verify } = require("crypto");
const { clear } = require("console");
const pageObjects = require("../pageobject/LoginPage.js");

describe('Assignments ', function()  {
    var baseUrl='file:///C:/Users/Tangirala/Documents/ProtractorAssignment-main/index.html';
    var pageObj= new pageObjects();

    //TestCase 1 
    it('Test Case 1',function() {

    //Navigating to the baseUrl to HomePage    
    browser.get(baseUrl);
    expect(pageObj.inputEmail.isDisplayed).toBeTruthy();
   
    //Verifying Password Box
    expect(pageObj.inputPassword.isDisplayed).toBeTruthy();
    var signinBtn= element(by.buttonText('Sign in'));
    //Verifying Signin Button which should be enabled
    expect(pageObj.signinBtn.isDisplayed).toBeTruthy();
   
    //Passing Email and Password
    pageObj.inputEmail.sendKeys('abc@gmail.com');
    pageObj.inputPassword.sendKeys('123456');
    });


    //Test Case 2
    it('Test Case 2',function(){
    //Navigating to the baseUrl to HomePage      
    browser.get(baseUrl);
    //Getting List of Dropdown Options
    var lists=element.all(by.css('.list-group li'));
    
    element.all(by.css('.list-group li')).then(function(items) {
        //Verifying Length to 3 items
        expect(items.length).toBe(3);
        //Verifying 2nd element Texts
        expect(items[1].getText()).toContain('List Item 2');
        expect(items[1].getText()).toContain('6');
      });

    });

    it('Test Case 3',function(){
        //Navigating to the baseUrl to HomePage  
        browser.get(baseUrl);
        //Fetching Default Items
        var ioptions=element(by.id('dropdownMenuButton'));
        expect(ioptions.isDisplayed).toBeTruthy();
        expect(ioptions.getText()).toContain('Option 1');
        ioptions.click();
        browser.sleep(1000);
        //clicking Option3 for elements
        element(by.linkText('Option 3')).click();
        var ioptions=element(by.id('dropdownMenuButton'));
        expect(ioptions.getText()).toContain('Option 3');
    });

    it('Test Case 4',function(){
        //Navigating to the baseUrl to HomePage  
        browser.get(baseUrl);
             
        //Verifying enabled and disabled buttons
        expect(pageObj.button1.isEnabled).toBeTruthy();
        expect(pageObj.button2.getAttribute('disabled')).toBeTruthy();

    });

    it('Test Case 5',function(){
        //Navigating to the baseUrl to HomePage  
        browser.get(baseUrl);
        //Dynamically Waiting for button to get enabled
        var expectedCond=protractor.ExpectedConditions;
        browser.wait(expectedCond.visibilityOf(element(by.id('test5-button')),8000));
       
        //Verifying Text Message After clicking the button
        var button=element(by.id('test5-button'));
        expect(button.isEnabled).toBeTruthy();
        button.click();
        var buttonValues=element(by.id('test5-alert'));
        expect(pageObj.buttonValues.getText()).toContain('You clicked a button!');
        expect(button.getAttribute('disabled')).toBeTruthy();
    });

    it('Test Case 6',function(){
        //Navigating to the baseUrl to HomePage  
        browser.get(baseUrl);

        let table=$("table.table.table-bordered.table-dark tbody");
        let rows=table.$$("tr");
        let rowCount=rows.count();
        console.log(rowCount);
        expect(rowCount).toBe(3);
       
      console.log(getValue(rowCount,2,rows,2,table));
      //Verifying value present in 2,2
      expect(getValue(rowCount,2,rows,2,table));

    });

    //Function to get Value from any grid table cell
    function getValue(rowCount,rowNum,rows,columnNum,table){
        
        let  DataV;
        for(let i=0;i<rowCount;i++){
            if(i==rowNum){
                let dataNeeded=rows.get(i).$$("td");
                let datasent=firstTD.get(columnNum);
                DataV =firstData.getText();

            }
            return DataV;
            
        }
    }
   });
