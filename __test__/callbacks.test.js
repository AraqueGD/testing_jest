import {callbackHell} from "../callbacks";

describe('Prueba de Callback', () => {
    test("Callback 1", (done) => {
        const otherCall = (data) => {
            expect(data).toBe("Hola Javascript");
            done();
        }
        callbackHell(otherCall);
    });
})
