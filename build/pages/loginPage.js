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
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginPage = void 0;
const loginPage = (page) => __awaiter(void 0, void 0, void 0, function* () {
    // Selectors
    const loginPageContainer = yield page.waitForSelector('[data-testid="royal_login_form"]');
    const usernameField = yield loginPageContainer.waitForSelector('[data-testid="royal_email"');
    const passwordField = yield loginPageContainer.waitForSelector('[data-testid="royal_pass"');
    const loginButton = yield loginPageContainer.waitForSelector('[data-testid="royal_login_button"');
    // actions
    const typeUsername = (username) => __awaiter(void 0, void 0, void 0, function* () { return yield (usernameField === null || usernameField === void 0 ? void 0 : usernameField.type(username)); });
    const typePassword = (password) => __awaiter(void 0, void 0, void 0, function* () { return yield (passwordField === null || passwordField === void 0 ? void 0 : passwordField.type(password)); });
    const clickLoginButton = () => __awaiter(void 0, void 0, void 0, function* () { return yield loginButton.click(); });
    return {
        typeUsername,
        typePassword,
        clickLoginButton,
    };
});
exports.loginPage = loginPage;
