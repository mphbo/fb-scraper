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
exports.shambhalaPage = void 0;
const shambhalaPage = (page) => __awaiter(void 0, void 0, void 0, function* () {
    // Selectors
    const feed = yield page.waitForSelector('[role="feed"]');
    const firstTime = yield feed.waitForSelector(".x4k7w5x");
    // actions
    //   const clickShambhalaGroupButton = async () =>
    //     await shambhalaGroupButton?.click();
    return {
        firstTime,
    };
});
exports.shambhalaPage = shambhalaPage;
