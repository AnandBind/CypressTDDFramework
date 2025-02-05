import LoginPage from "../../../pageobjects/loginPageobjects.js";
import { config } from "../../../property/config.js";

describe("check login functionality", () => {
  const ln = new LoginPage();
  // use this appoach to get the static data from fixture folder (import and need to create cy.fixture()function)
  //  it('verify successfully login with valid credentials',()=>{
  //    //get data from fixture file
  //     cy.fixture('loginCredentials.json').then((data)=>{
  //     ln.enterUserName(data.username );
  //     ln.enterPassword(data.password);
  //     ln.clickOnLoginButton();
  //     ln.sokinlogiIsDispaly();
  //     })

  // })
  //=============================================
  // use config to get the data(Import config and use)

  // it('login successfuly with valid credentials',()=>{
  // ln.enterUserName(config.username);
  // ln.enterPassword(config.password);
  // ln.clickOnLoginButton();
  // ln.isSokinLogDispaly();
  // })

  it("login successfuly with valid credentials", () => {
    cy.loginSokin(config.username, config.password);
    ln.isSokinLogDispaly;
  });

  it("verify unable to login with invalid email and valid passaword", () => {
    cy.loginSokin("anand1232@nuagebiz.tech", config.password);
    ln.verifyInvalidLoginMessage("Invalid username and password.");
  });

  it("verify unable to login with valid email and invalid passaword", () => {
    cy.loginSokin(config.username, "Teueu@123");
    ln.verifyInvalidLoginMessage("Username or password is incorrect.");
  });
});
