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
exports.mainPage = void 0;
const mainPage = (page) => __awaiter(void 0, void 0, void 0, function* () {
    // Selectors
    const groupsButton = yield page.waitForSelector("::-p-text(Groups)");
    // actions
    const clickGroupsButton = () => __awaiter(void 0, void 0, void 0, function* () { return yield (groupsButton === null || groupsButton === void 0 ? void 0 : groupsButton.click()); });
    return {
        clickGroupsButton,
    };
});
exports.mainPage = mainPage;
