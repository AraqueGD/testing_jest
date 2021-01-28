describe("Comparadores Comunes", () => {
    const user = {
        name: "Camilo",
        lastname: "Araque"
    }
    const user2 = {
        name: "Camilo",
        lastname: "Araque"
    }

    test("Igualdad de elementos", () => {
        expect(user).toEqual(user2);
    })
})