import { ISBN } from "../../domain/value-objects/ISBN";
export class Stock {
  constructor(
    public readonly isbn: ISBN,
    private quantity: number,
  ) {}
  public has(qty: number) {
    return this.quantity >= qty;
  }
  public allocate(qty: number) {
    if (!this.has(qty)) throw new Error("insufficient stock");
    this.quantity -= qty;
  }
  publicgetQuantity() {
    return this.quantity;
  }
}
