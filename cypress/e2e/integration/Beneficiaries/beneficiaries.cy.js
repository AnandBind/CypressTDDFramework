import { config } from "../../../property/config.js";
import beneficiaryPageObject from "../../../pageobjects/beneficiarypageobjects.js";

describe("verify beneficiries functionality", () => {
  const bn = new beneficiaryPageObject();

  
//   it("verify left pannel modules is display and clickable", () => {
//     cy.loginSokin(config.username, config.password);
//     cy.fixture("beneficiaries.json").then((data) => {
//       data.Modules.forEach((element) => {
//         bn.isModulesVisiableAndClickable(element);
//       });
//     });
//   });

  it("verify ui elements of beneficiries page", () => {
     cy.loginSokin(config.username,config.password);
     bn.clickOnBeneficiria();
     cy.fixture("beneficiaries.json").then((data)=>{
        data.BeneficirieaPageElements.forEach((element)=>{
            bn.isBeneficirieyUIElemetsDisplay(element);
        });
     });

  });
  // it('verify add beneficiries button is clickable',()=>{

  // })
  // it('verify different type of beneficiries',()=>{

  // })
});
