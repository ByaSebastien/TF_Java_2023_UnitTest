import { SharedModule } from "../shared/shared.module";
import { Calculator } from "./calculator";

describe('Calculator', () => {

    let calculator = new Calculator();
    beforeAll(() => calculator = new Calculator());


    it('Two plus two should equals four', () => {
        expect(calculator.add(2, 2)).toEqual(4);
    });

    it('Ten plus ten shoul equals twenty', () => {
        expect(calculator.add(10, 10)).toEqual(20);
    });

    it('should not affect arithmetic rules', async () => {
        await new Promise<void>((resolve) => {
            setTimeout(() => {
                expect(1).not.toEqual(2);
                resolve();
            }, 1000);
        });
    });
});