import puppeteer from "puppeteer";
import { loginPage } from "./pages/loginPage";
import { mainPage } from "./pages/mainPage";

const getQuotes = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });
  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(100000);

  await page.goto("http://facebook.com/", {
    waitUntil: "domcontentloaded",
  });

  const LoginPage = await loginPage(page);

  // Query for an element handle.
  await LoginPage.typeUsername("mphbo");
  await LoginPage.typePassword("Hq75ls32Pk?");
  await LoginPage.clickLoginButton();

  await page.waitForNavigation();

  // Using page function for more modular code
  // const MainPage = await mainPage(page);
  // await MainPage.clickGroupsButton();
  const groupsButton = await page.waitForSelector("::-p-text(Groups)");

  await groupsButton?.click();

  await page.waitForNavigation();
};

getQuotes();
