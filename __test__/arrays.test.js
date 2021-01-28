import {fruits, colors} from "../arrays";

describe("Comprobamos que Existe Un Elemento", () => {
    test("Contiene banana?", () => {
        expect(fruits).toContain("banana");
    });

    test("No Contiene un Platano", () => {
        expect(fruits).not.toContain("platano");
    })

    test("Tamaño de Arreglo", () => {
        expect(fruits).toHaveLength(5);
    })

    test("Existe el Color Rojo?", () => {
        expect(colors).toContain("rojo");
    })
})
