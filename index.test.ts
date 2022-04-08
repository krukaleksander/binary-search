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
    let centerOFArray = Math.floor(range / 2);
    if (centerOFArray === this.id) return this.db[this.id - 1];
    if (centerOFArray < this.id) {
      firstElement = this.id;
      range = firstElement + lastElement;
      centerOFArray = Math.floor(range / 2);
      if (centerOFArray === this.id) return this.db[this.id - 1];
    }
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
  it("returns third object when 4 objects are passed and id 3", () => {
    const search = new BinarySearch(3, [
      { id: 1, name: "Michał" },
      { id: 2, name: "Alex" },
      { id: 3, name: "Monika" },
      { id: 4, name: "Krystian" },
    ]);
    expect(search.go()).toEqual({ id: 3, name: "Monika" });
  });
  it("returns last object when 4 objects are passed and id 4", () => {
    const search = new BinarySearch(4, [
      { id: 1, name: "Michał" },
      { id: 2, name: "Alex" },
      { id: 3, name: "Monika" },
      { id: 4, name: "Krystian" },
    ]);
    expect(search.go()).toEqual({ id: 4, name: "Krystian" });
  });
  it("returns first object when 4 objects are passed and id 1", () => {
    const search = new BinarySearch(1, [
      { id: 1, name: "Michał" },
      { id: 2, name: "Alex" },
      { id: 3, name: "Monika" },
      { id: 4, name: "Krystian" },
    ]);
    expect(search.go()).toEqual({ id: 1, name: "Michał" });
  });
});
