import { ISBN } from "../../domain/value-objects/ISBN";
import { Money } from "../../domain/value-objects/Money";
export class Book {
  constructor(
    public readonly isbn: ISBN,
    public title: string,
    public price: Money,
  ) {}
}
