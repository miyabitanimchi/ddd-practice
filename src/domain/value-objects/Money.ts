export class Money {
  private constructor(
    private readonly cents: number,
    private readonly currency: string,
  ) {}

  static from(amount: number, currency = "CAD") {
    if (!Number.isFinite(amount) || amount < 0)
      throw new Error("invalid amount");
    return new Money(Math.round(amount * 100), currency);
  }
  public add(other: Money) {
    if (this.currency !== other.currency) throw new Error("currency mismatch");
    return new Money(this.cents + other.cents, this.currency);
  }
  public multiply(qty: number) {
    if (!Number.isInteger(qty) || qty <= 0) throw new Error("invalid qty");
    return new Money(this.cents * qty, this.currency);
  }
  publictoNumber() {
    return this.cents / 100;
  }
  publiccode() {
    return this.currency;
  }
}
