import { ISBN } from "../../value-objects/ISBN";
import { Money } from "../../value-objects/Money";
export type OrderLine = { isbn: ISBN; qty: number; unitPrice: Money };
