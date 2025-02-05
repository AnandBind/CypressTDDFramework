import { config } from "../property/config";
class beneficiaryPageObject {
  beneficiriyElement = {
    beneficiriea: "//span[text()='Beneficiaries']",
  };


  isModulesVisiableAndClickable(modulename) {
    cy.contains(modulename)
      .should("be.visible")
      .and("not.be.disabled")
      .should("contain.text", modulename);
  }
  clickOnBeneficiria(){
    cy.xpath(this.beneficiriyElement.beneficiriea).click();
  }

  isBeneficirieyUIElemetsDisplay(elements){
    cy.contains(elements).should("be.visible").and("contain.text",elements);
  }
}
export default beneficiaryPageObject;
