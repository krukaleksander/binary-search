class BinarySearch {
  id: number;
  db: IDb[];
  constructor(id: number, db: IDb[]) {
    (this.id = id), (this.db = db);
  }
  go() {
    let firstElement = 0;
    let lastElement = this.db.length;
    let range = firstElement + lastElement;
    if (Math.floor(range / 2) === this.id) return this.db[this.id - 1];
  }
}
interface IDb {
  id: number;
  name: string;
}

describe("BinarySearch", () => {
  it("returns second object when 4 objects are passed and id 2", () => {
    const search = new BinarySearch(2, [
      { id: 1, name: "Michał" },
      { id: 2, name: "Alex" },
      { id: 3, name: "Monika" },
      { id: 4, name: "Krystian" },
    ]);
    expect(search.go()).toEqual({ id: 2, name: "Alex" });
  });
  it("returns first object when 4 objects are passed and id 1", () => {
    const search = new BinarySearch(4, [
      { id: 1, name: "Michał" },
      { id: 2, name: "Alex" },
      { id: 3, name: "Monika" },
      { id: 4, name: "Krystian" },
    ]);
    expect(search.go()).toEqual({ id: 2, name: "Alex" });
  });
});
