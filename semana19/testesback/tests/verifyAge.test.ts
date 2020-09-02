import { verifyAge } from "../src/verifyAge";

enum LOCATION {
    EUA = "EUA",
    BRAZIL = "BRAZIL",
  }
  
  enum NACIONALITY {
    BRAZILIAN = "BRAZILIAN",
    AMERICAN = "AMERICAN",
  }
  
  interface User {
    name: string;
    age: number;
    nacionality: NACIONALITY;
  }
  
  interface Casino {
    name: string;
    location: LOCATION;
  }

interface Result {
    brazilians: ResultItem;
    americans: ResultItem;
  }
  
  interface ResultItem {
    allowed: string[];
    unallowed: string[];
  }

describe("Testing Perform Purchase", () => {
    test("American 21 EUA", () => {
		const user: User = {
            name: 'Astrodev',
            age: 21,
            nacionality: NACIONALITY.AMERICAN
        };

        const casino: Casino = {
            name: 'las vegas, Osasco - SP',
            location: LOCATION.EUA
        };
	
		const result = verifyAge(casino, [user]);		
		expect(result.americans.allowed).toEqual(['Astrodev']);
    });

	test("Brazilian 21 EUA", () => {
		const user: User = {
            name: 'Astrodev',
            age: 21,
            nacionality: NACIONALITY.BRAZILIAN
        };

        const casino: Casino = {
            name: 'las vegas, Osasco - SP',
            location: LOCATION.EUA
        };
	
		const result = verifyAge(casino, [user]);		
		expect(result.brazilians.allowed).toEqual(['Astrodev']);
    });
    
    test("Brazilian 18 Brazil", () => {
		const user: User = {
            name: 'Astrodev',
            age: 18,
            nacionality: NACIONALITY.BRAZILIAN
        };

        const casino: Casino = {
            name: 'las vegas, Osasco - SP',
            location: LOCATION.BRAZIL
        };
	
		const result = verifyAge(casino, [user]);		
		expect(result.brazilians.allowed).toEqual(['Astrodev']);
    });

    test("Brazilian 6 Brazil", () => {
		const user: User = {
            name: 'Astrodev',
            age: 6,
            nacionality: NACIONALITY.BRAZILIAN
        };

        const casino: Casino = {
            name: 'las vegas, Osasco - SP',
            location: LOCATION.BRAZIL
        };
	
		const result = verifyAge(casino, [user]);		
		expect(result.brazilians.allowed).toEqual([]);
    });

    test("Array Length > 0 && < 2", () => {
		const user: User = {
            name: 'Astrodev',
            age: 22,
            nacionality: NACIONALITY.BRAZILIAN
        };

        const casino: Casino = {
            name: 'las vegas, Osasco - SP',
            location: LOCATION.BRAZIL
        };
	
		const result = verifyAge(casino, [user]);		
		expect(result.brazilians.allowed.length).toBeGreaterThan(0);
        expect(result.brazilians.allowed.length).toBeLessThan(2);
    });

    test("unalowed length === 0", () => {
        const brazilian: User = {
          name: "Astrodev",
          age: 19,
          nacionality: NACIONALITY.AMERICAN,
        };
    
        const casino: Casino = {
          name: 'las vegas, Osasco - SP',
          location: LOCATION.BRAZIL,
        };
    
        const result = verifyAge(casino, [brazilian]);
        expect(result.americans.unallowed.length).toBe(0);
    });

    test("No one allowed", () => {
        const brazilian: User = {
          name: "Astrodev BR",
          age: 19,
          nacionality: NACIONALITY.BRAZILIAN,
        };
    
        const american: User = {
          name: "Astrodev EUA",
          age: 19,
          nacionality: NACIONALITY.AMERICAN,
        };
    
        const casino: Casino = {
          name: 'las vegas, Osasco - SP',
          location: LOCATION.EUA,
        };
    
        const result = verifyAge(casino, [
          brazilian,
          brazilian,
          american,
          american,
        ]);
    
        expect(result.brazilians.unallowed).toContain("Astrodev BR");
        expect(result.americans.unallowed).toContain("Astrodev EUA");
      });

    test("2 american allowed and 2 brazilians unallowed", () => {
        const brazilian: User = {
          name: "Astrodev BR",
          age: 19,
          nacionality: NACIONALITY.BRAZILIAN,
        };
    
        const american: User = {
          name: "Astrodev EUA",
          age: 21,
          nacionality: NACIONALITY.AMERICAN,
        };
    
        const casino: Casino = {
          name: "Balada Estelar",
          location: LOCATION.EUA,
        };
    
        const result = verifyAge(casino, [
          brazilian,
          brazilian,
          american,
          american,
        ]);
        expect(result.brazilians.unallowed.length).toBeGreaterThan(1);
        expect(result.americans.unallowed.length).toBeLessThan(1);
        expect(result.americans.allowed.length).toBe(2);
    });

    test("Brazilian 6 EUA", () => {
		const user: User = {
            name: 'Astrodev',
            age: 6,
            nacionality: NACIONALITY.BRAZILIAN
        };

        const casino: Casino = {
            name: 'las vegas, Osasco - SP',
            location: LOCATION.EUA
        };
	
		const result = verifyAge(casino, [user]);		
		expect(result.brazilians.allowed).toEqual([]);
    });

    test("American 21 Brazil", () => {
		const user: User = {
            name: 'Astrodev',
            age: 21,
            nacionality: NACIONALITY.AMERICAN
        };

        const casino: Casino = {
            name: 'las vegas, Osasco - SP',
            location: LOCATION.BRAZIL
        };
	
		const result = verifyAge(casino, [user]);		
		expect(result.americans.allowed).toEqual(['Astrodev']);
    });

    test("American 18 Brazil", () => {
		const user: User = {
            name: 'Astrodev',
            age: 18,
            nacionality: NACIONALITY.AMERICAN
        };

        const casino: Casino = {
            name: 'las vegas, Osasco - SP',
            location: LOCATION.BRAZIL
        };
	
		const result = verifyAge(casino, [user]);		
		expect(result.americans.allowed).toEqual(['Astrodev']);
    });

    test("2 american allowed and 2 brazilians unallowed", () => {
        const brazilian: User = {
          name: "Astrodev BR",
          age: 19,
          nacionality: NACIONALITY.BRAZILIAN,
        };
    
        const american: User = {
          name: "Astrodev EUA",
          age: 21,
          nacionality: NACIONALITY.AMERICAN,
        };
    
        const casino: Casino = {
          name: "Balada Estelar",
          location: LOCATION.EUA,
        };
    
        const result = verifyAge(casino, [
          brazilian,
          brazilian,
          american,
          american,
        ]);
        expect(result.brazilians.unallowed).toEqual(["Astrodev BR", "Astrodev BR"]);
        expect(result.americans.allowed).toEqual(["Astrodev EUA", "Astrodev EUA"]);
      });
});