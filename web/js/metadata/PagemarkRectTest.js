"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const PagemarkRect_1 = require("./PagemarkRect");
const Assertions_1 = require("../test/Assertions");
describe('PagemarkRect', function () {
    describe('interval', function () {
        it("proper interval", function () {
            let pagemarkRect = new PagemarkRect_1.PagemarkRect({
                left: 0,
                top: 0,
                width: 100,
                height: 100
            });
            let expected = {
                "left": 0,
                "top": 0,
                "width": 100,
                "height": 100
            };
            Assertions_1.assertJSON(pagemarkRect, expected);
        });
        it("wrong interval", function () {
            chai_1.assert.throws(() => {
                new PagemarkRect_1.PagemarkRect({
                    top: 0,
                    left: 0,
                    width: -100,
                    height: -100
                });
            });
        });
    });
    describe('toPercentage  + toFractionalRect', function () {
        it("100%", function () {
            let pagemarkRect = new PagemarkRect_1.PagemarkRect({
                top: 0,
                left: 0,
                width: 100,
                height: 100
            });
            Assertions_1.assertJSON(pagemarkRect.toPercentage(), 100);
            let expected = {
                "left": 0,
                "top": 0,
                "right": 1,
                "bottom": 1,
                "width": 1,
                "height": 1
            };
            Assertions_1.assertJSON(pagemarkRect.toFractionalRect(), expected);
        });
        it("50% top", function () {
            let pagemarkRect = new PagemarkRect_1.PagemarkRect({
                top: 0,
                left: 0,
                width: 100,
                height: 50
            });
            Assertions_1.assertJSON(pagemarkRect.toPercentage(), 50);
            let expected = {
                "left": 0,
                "top": 0,
                "right": 1,
                "bottom": 0.5,
                "width": 1,
                "height": 0.5
            };
            Assertions_1.assertJSON(pagemarkRect.toFractionalRect(), expected);
        });
        it("50% left", function () {
            let pagemarkRect = new PagemarkRect_1.PagemarkRect({
                top: 0,
                left: 0,
                width: 50,
                height: 100
            });
            Assertions_1.assertJSON(pagemarkRect.toPercentage(), 50);
            let expected = {
                "left": 0,
                "top": 0,
                "right": 0.5,
                "bottom": 1.0,
                "width": 0.5,
                "height": 1.0
            };
            Assertions_1.assertJSON(pagemarkRect.toFractionalRect(), expected);
        });
        it("50% right", function () {
            let pagemarkRect = new PagemarkRect_1.PagemarkRect({
                top: 0,
                left: 50,
                width: 50,
                height: 100
            });
            Assertions_1.assertJSON(pagemarkRect.toPercentage(), 50);
            let expected = {
                "left": 0.5,
                "top": 0,
                "right": 1.0,
                "bottom": 1.0,
                "width": 0.5,
                "height": 1.0
            };
            Assertions_1.assertJSON(pagemarkRect.toFractionalRect(), expected);
        });
        it("25%", function () {
            let pagemarkRect = new PagemarkRect_1.PagemarkRect({
                top: 0,
                left: 0,
                width: 50,
                height: 50
            });
            Assertions_1.assertJSON(pagemarkRect.toPercentage(), 25);
            let expected = {
                "left": 0,
                "top": 0,
                "right": 0.50,
                "bottom": 0.50,
                "width": 0.50,
                "height": 0.50
            };
            Assertions_1.assertJSON(pagemarkRect.toFractionalRect(), expected);
        });
    });
});
//# sourceMappingURL=PagemarkRectTest.js.map