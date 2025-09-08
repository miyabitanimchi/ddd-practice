export interface DomainEvent {
  readonly type: string;
  readonly occurredAt: Date;
}
export class OrderPlaced implements DomainEvent {
  readonly type = "OrderPlaced";
  readonly occurredAt = new Date();
  constructor(
    public readonly orderId: string,
    public readonly lines: { isbn: string; qty: number }[],
  ) {}
}
