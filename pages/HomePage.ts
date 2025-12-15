import { tr } from "@faker-js/faker";
import { Page,expect, Locator } from "@playwright/test";

export class HomePage{
    private readonly page:Page;
    //locator
    private readonly lnkMyAccount: Locator;
    private readonly lnkRegister: Locator;
    private readonly lnkLogin: Locator;
    private readonly txtSearchBox: Locator;
    private readonly btnSearch: Locator;
    //constructor
    constructor(page:Page){
        this.page=page;
        this.lnkMyAccount=page.locator("span:has-text('My Account')");
        this.lnkRegister=page.locator("a:has-text('Register')");
        this.lnkLogin=page.locator("a:has-text('Login')");
        this.txtSearchBox=page.locator("input[placeholder='Search']");
        this.btnSearch=page.locator("button[class='btn btn-default btn-lg']");
    }
    //Check HomePage Exists
    async isPageExists(){
        let title: string=await this.page.title();
        if(title){
            return true
        }
        return false
    }
    //Click MyAccount
    async clickMyAccount(){
        try{
            this.lnkMyAccount.click();
        }catch(error){
            console.log(`Exception occured while clicking 'MyAccount': ${error}`);
            throw error;
        } 
    }
    //click register
    async clickRegister(){
        try{
            this.lnkRegister.click();
        }catch(error){
            console.log(`Exception occured while clicking: 'Register' ${error}`);
            throw error;
        }
    }
    // Click "Login" link
    async clickLogin(){
        try {
            await this.lnkLogin.click();
        } catch (error) {
            console.log(`Exception occurred while clicking 'Login': ${error}`);
            throw error;
        }
    }
    // Enter product name in the search box
    async enterProductName(productName: string){
        try{
        this.txtSearchBox.fill(productName)
        } catch(error){
            console.log(`Exception occurred while entering product name: ${error}`);
            throw error;
        }
    }
    // Click the search button
    async clickSearch(){
        try {
            await this.btnSearch.click();
        } catch (error) {
            console.log(`Exception occurred while clicking 'Search': ${error}`);
            throw error;
        }
    }

}