import { getCharacter } from "../snapshot";
import rick from "../rick.json";

describe('Es hora de las Instantaneas', () => {
    test('Snapshot', () => {
        expect(getCharacter(rick)).toMatchSnapshot();
    })
    
    test('Siempre Fallara', () => {
        const user = {
            createAt: new Date(),
            id: Math.floor(Math.random() * 20)
        }
        expect(user).toMatchSnapshot();
    })

    test('Tenemos una excepción dentro del codigo', () => {
        const user = {
            id: Math.floor(Math.random() * 20),
            name: "Camilo Araque"
        }
        expect(user).toMatchSnapshot({
            id: expect.any(Number)
        })
    })
    

})
