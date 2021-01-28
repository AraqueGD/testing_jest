import {sum, res, mul, div} from "../maths";

describe("Calculos Matematicos", () => {
    test("Test Suma", () => {
        expect(sum(1,1)).toBe(2);
    });

    test("Test Multiplicaión", () => {
        expect(mul(2,2)).toBe(4);
    })

    test("Test División", () => {
        expect(div(10,2)).toBe(5);
    })

    test("Test Resta", () => {
        expect(res(5,5)).toBe(0);
    })
});
