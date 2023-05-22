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
exports.groupsPage = void 0;
const groupsPage = (page) => __awaiter(void 0, void 0, void 0, function* () {
    // Selectors
    const shambhalaGroupButton = yield page.waitForSelector("::-p-text(The NEW-ISH Shambhala Ticket Exchange 2.0)");
    // actions
    const clickShambhalaGroupButton = () => __awaiter(void 0, void 0, void 0, function* () { return yield (shambhalaGroupButton === null || shambhalaGroupButton === void 0 ? void 0 : shambhalaGroupButton.click()); });
    return {
        clickShambhalaGroupButton,
    };
});
exports.groupsPage = groupsPage;
