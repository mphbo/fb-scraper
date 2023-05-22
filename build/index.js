"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer_1 = __importDefault(require("puppeteer"));
const loginPage_1 = require("./pages/loginPage");
const getQuotes = () => __awaiter(void 0, void 0, void 0, function* () {
    const browser = yield puppeteer_1.default.launch({
        headless: false,
        defaultViewport: null,
    });
    const page = yield browser.newPage();
    yield page.setDefaultNavigationTimeout(10000000);
    yield page.goto("http://facebook.com/", {
        waitUntil: "domcontentloaded",
    });
    const LoginPage = yield (0, loginPage_1.loginPage)(page);
    // Query for an element handle.
    yield LoginPage.typeUsername("mphbo");
    yield LoginPage.typePassword("Hq75ls32Pk?");
    yield LoginPage.clickLoginButton();
    yield page.waitForNavigation();
    // const MainPage = await mainPage(page);
    const groupsButton = yield page.waitForSelector("::-p-text(Groups)");
    // actions
    yield (groupsButton === null || groupsButton === void 0 ? void 0 : groupsButton.click());
    // await MainPage.clickGroupsButton();
});
getQuotes();
