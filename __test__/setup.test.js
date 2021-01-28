// Después de cada Prueba

afterEach(() => console.log("Después de Cada Prueba"));
afterAll(() => console.log("Después de Todas las pruebas"));

// antes de cada prueba
beforeAll(() => console.log("Antes de todas la pruebas"));
beforeEach(() => console.log("Antes de cada prueba"));

describe('preparar antes de Ejecutar', () => {
    test("Es verdadero", () => {
        expect(true).toBeTruthy();
    })
})
