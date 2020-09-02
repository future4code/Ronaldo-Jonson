import { performPurchase } from "../src/performPurchase";

describe("Testing Perform Purchase", () => {

	test("Testing balance greater than value", () => {
		const user = {
			name: "Astrodev",
			balance: 100
		}
	
		const result = performPurchase(user, 50);
		
		expect(result).toEqual({
			name: "Astrodev",
			balance: 50
		});
	});

	test("Testing balance equal to value", () => {
		const user = {
			name: "Astrodev",
			balance: 100
		}
	
		const result = performPurchase(user, 100);
		
		expect(result).toEqual({
			name: "Astrodev",
			balance: 0
		});
	});

	test("Testing balance lowen than to value", () => {
		const user = {
			name: "Astrodev",
			balance: 95
		}
	
		const result = performPurchase(user, 100);
		
		expect(result).toEqual(undefined);
	});
});
