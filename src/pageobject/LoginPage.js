var pageObjects=function (){

    this.inputEmail=element(by.id('inputEmail'));
    this.inputPassword=element(by.id('inputPassword'));
    this.signinBtn= element(by.buttonText('Sign in'));
    this.lists=element.all(by.css('.list-group li'));
    this.button1=element(by.className('btn btn-lg btn-primary'));
    this.button2=element(by.className('btn btn-lg btn-secondary'));
    this.buttonValues=element(by.id('test5-alert'));
}

module.exports= pageObjects;