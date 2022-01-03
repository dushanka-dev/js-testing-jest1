const { TestWatcher } = require("jest");
const addition = require("../calc");

describe("Calculator", () => {
    describe("Addition Function", () => {
        Test("Should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        })
    });
    describe("Subtraction Function", () => {

    });
    describe("Division Function", () => {

    });
    describe("Multiply Function", () => {

    });
});