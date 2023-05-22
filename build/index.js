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
const mainPage_1 = require("./pages/mainPage");
const groupsPage_1 = require("./pages/groupsPage");
const shambhalaPage_1 = require("./pages/shambhalaPage");
const comment = () => __awaiter(void 0, void 0, void 0, function* () {
    const browser = yield puppeteer_1.default.launch({
        headless: false,
        defaultViewport: null,
    });
    const page = yield browser.newPage();
    yield page.setDefaultNavigationTimeout(100000);
    yield page.setDefaultTimeout(100000);
    yield page.goto("http://facebook.com/", {
        waitUntil: "domcontentloaded",
    });
    const LoginPage = yield (0, loginPage_1.loginPage)(page);
    // Login
    yield LoginPage.typeUsername("mphbo");
    yield LoginPage.typePassword("Hq75ls32Pk?");
    yield LoginPage.clickLoginButton();
    yield page.waitForNavigation();
    // Navigate to Groups page
    const MainPage = yield (0, mainPage_1.mainPage)(page);
    yield MainPage.clickGroupsButton();
    yield page.waitForNavigation();
    // Navigate to Shambhala ticket exchange group page
    const GroupsPage = yield (0, groupsPage_1.groupsPage)(page);
    yield GroupsPage.clickShambhalaGroupButton();
    yield page.waitForNavigation();
    // Get most recent post
    const ShambhalaPage = yield (0, shambhalaPage_1.shambhalaPage)(page);
    const firstTime = yield ShambhalaPage.firstTime;
    const value = yield page.evaluate((el) => el.textContent, firstTime);
    console.log(value);
});
comment();
