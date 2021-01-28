import {isFalse, isNull, isTrue, isUndefined} from "../true";

describe("Comprobamos Resultados", () => {
    test("Esto es Nulo", () => {
        expect(isNull()).toBeNull();
    })

    test("Esto es Verdadero", () => {
        expect(isTrue()).toBeTruthy();
    })

    test("Esto es Falso", () => {
        expect(isFalse()).toBeFalsy();
    })

    test("Esto es Undefined", () => {
        expect(isUndefined()).toBeUndefined();
    })
})

describe("Comprabamos Resultados no llegados", () => {
    test("Esto no es Nulo", () => {
        expect(isNull()).not.toBeUndefined();
    })

    test("Esto no es Verdadero", () => {
        expect(isTrue()).not.toBeFalsy();
    })

    test("Esto no es Falso", () => {
        expect(isFalse()).not.toBeTruthy();
    })

    test("Esto no es Undifined", () => {
        expect(isUndefined()).not.toBeNull();
    })
})
