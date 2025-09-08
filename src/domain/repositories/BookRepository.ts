import { Book } from "../entities/Book";
import { ISBN } from "../value-objects/ISBN";
export interface BookRepository {
  save(book: Book): Promise<void>;
  findByIsbn(isbn: ISBN): Promise<Book | null>;
  list(): Promise<Book[]>;
}
