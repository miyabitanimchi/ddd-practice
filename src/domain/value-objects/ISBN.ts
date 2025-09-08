export class ISBN {
  private constructor(public readonly value: string) {}

  static create(value: string): ISBN {
    if (!this.isValid(value)) throw new Error("Invalid ISBN");

    return new ISBN(value);
  }

  private static isValid(value: string): boolean {
    return /^\d{10}(\d{3})?$/.test(value);
  }
}
