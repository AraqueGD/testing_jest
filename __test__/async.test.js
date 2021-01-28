import {getDataFromApi} from "../promise";

describe('Prueba llamada Apí en Async/Await', () => {
    test('Metodo Get', async () => {
        const api = "https://rickandmortyapi.com/api/character";
        const getRick = "https://rickandmortyapi.com/api/character/1";
        await getDataFromApi(api).then(data => {
            expect(data.results.length).toBeGreaterThan(0);
        })
        await getDataFromApi(getRick).then(data => {
            expect(data.name).toEqual("Rick Sanchez");
        })
    })

    test('Recogiendo Error', async () => {
        const apiError = "http://httpstat.us/404";
        const petición = getDataFromApi(apiError);
        await expect(petición).rejects.toEqual(Error("Request failed with status code 404"));
    }, 30000)
})
