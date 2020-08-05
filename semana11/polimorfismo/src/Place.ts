export abstract class Place {
    constructor(protected cep: string) {}
  
      public getCep(): string {
          return this.cep;
    }
  }

  // para instanciar é necessario criar uma classe nao abstrata que herde de Place