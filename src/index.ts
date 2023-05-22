import puppeteer from "puppeteer";
import { loginPage } from "./pages/loginPage";
import { mainPage } from "./pages/mainPage";
import { groupsPage } from "./pages/groupsPage";
import { shambhalaPage } from "./pages/shambhalaPage";

const comment = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });
  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(100000);
  await page.setDefaultTimeout(100000);

  await page.goto("http://facebook.com/", {
    waitUntil: "domcontentloaded",
  });

  const LoginPage = await loginPage(page);

  // Login
  await LoginPage.typeUsername("mphbo");
  await LoginPage.typePassword("Hq75ls32Pk?");
  await LoginPage.clickLoginButton();
  await page.waitForNavigation();

  // Navigate to Groups page
  const MainPage = await mainPage(page);
  await MainPage.clickGroupsButton();
  await page.waitForNavigation();

  // Navigate to Shambhala ticket exchange group page
  const GroupsPage = await groupsPage(page);
  await GroupsPage.clickShambhalaGroupButton();
  await page.waitForNavigation();

  // Get most recent post
  const ShambhalaPage = await shambhalaPage(page);
  const firstTime = await ShambhalaPage.firstTime;
  const value = await page.evaluate((el) => el.textContent, firstTime);
  console.log(value);
};

comment();
