describe("Comprobar cadenas de Texto", () => {
    
    const text = "Un bonito Texto"
    
    test("Debe Contener el siguiente texto", () => {
        expect(text).toMatch(/bonito/);
    });

    test("No contiene el siguente texto", () => {
        expect(text).not.toMatch(/claro/);
    });

    test("longitud del texto", () => {
        expect(text).toHaveLength(15);
    })

})