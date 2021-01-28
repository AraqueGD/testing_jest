import {getDataFromApi} from "../promise";

describe('Recuperando data del Api Rick and Morty', () => {
    test('Probando Metedo Get', (done) => {
        const api = "https://rickandmortyapi.com/api/character"
        getDataFromApi(api).then(data => {
            expect(data).toBe(data);
            done();
        })
    })
    
    test("Resuelve un Hola", () => {
        return expect(Promise.resolve("Hola!")).resolves.toBe("Hola!");
    })

    test('Rechaza Error', () => {
        return expect(Promise.reject("Error")).rejects.toBe("Error");
    })
    

})
