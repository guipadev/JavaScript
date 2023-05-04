/**
 * Principio DRY
 * Don´t Repeat Yourself
 *
 * Si quieres ser un programador productivo esfuerzate en escibir código legible
 * - Robert C. Martin
 *
 */

type Size = "" | "S" | "M" | "XL";

class Product {
  constructor(
    public name: string,
    public price: number = 0,
    public size: Size = ""
  ) {}

  toString() {
    // No Dry
    if (this.name.length <= 0) throw Error("name is empty");

    if (this.price <= 0) throw Error("price is empty");

    if (this.size.length <= 0) throw Error("size is empty");

    return `${this.name} (${this.price}) (${this.price}), (${this.size})`;
  }
}

(() => {
  const bluePants = new Product("Blue large pants", 10, "M");
  console.log(bluePants.toString());
})();
