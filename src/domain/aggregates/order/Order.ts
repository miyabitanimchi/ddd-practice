import { OrderLine } from "./OrderLine";
import { OrderPlaced } from "../../events/OrderPlaced";

type OrderStatus = "PENDING" | "CONFIRMED";

export class Order {
  private status: OrderStatus = "PENDING";
  private readonly events: OrderPlaced[] = [];
  constructor(
    public readonly id: string,
    private readonly lines: OrderLine[],
  ) {}
  public total() {
    if (this.lines.length === 0) throw new Error("empty order");
    return this.lines
      .map((line) => line.unitPrice.multiply(line.qty))
      .reduce((accum, cv) => accum.add(cv));
  }
  public confirm() {
    if (this.status !== "PENDING") throw new Error("cannot confirm");
    if (this.lines.length === 0) throw new Error("empty order");
    this.status = "CONFIRMED";
    this.events.push(
      new OrderPlaced(
        this.id,
        this.lines.map((line) => ({ isbn: line.isbn.value, qty: line.qty })),
      ),
    );
  }
  public pullEvents() {
    const events = [...this.events];
    (this as any).events = [];
    return events;
  }
}
