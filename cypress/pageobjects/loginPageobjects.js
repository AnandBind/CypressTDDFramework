import { config } from "../property/config";
class LoginPage{
    elements={
               username:"#mat-input-0",
               password:"#mat-input-1", 
               loginbutton:"//span[text()=' Login ']",
               sokinLogo:"//img[@id='sokinLogoID']"  
    };
    enterUserName(email){
        cy.get(this.elements.username).type(email);
    }

    enterPassword(pass){
        cy.get(this.elements.password).type(pass);
    }

    clickOnLoginButton(){
        cy.xpath(this.elements.loginbutton).click();
    }

    isSokinLogDispaly(){
        cy.xpath(this.elements.sokinLogo,{timeout:config.requestTimeout}).should('be.visible');
    }

    verifyInvalidLoginMessage(message) {
        cy.verifyDialogMessage(message);
      }

}
export default LoginPage;