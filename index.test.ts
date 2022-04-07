class BinarySearch {
  index: number;
  db: IDb[];
  constructor(index: number, db: IDb[]) {
    (this.index = index), (this.db = db);
  }
  go() {
    let left = this.db.slice(0, Math.floor((this.db.length + 1) / 2));
    let right = this.db.slice(Math.floor((this.db.length + 1) / 2));
  }
}

interface IDb {
  id: number;
  name: string;
}

describe("BinarySearch", () => {
  it("returns 1 when 2 and [1,2,3,4] is passed", () => {
    const search = new BinarySearch(2, [
      { id: 1, name: "Michał" },
      { id: 2, name: "Alex" },
      { id: 3, name: "Monika" },
      { id: 4, name: "Krystian" },
    ]);
    expect(search.go()).toBe(1);
  });
});
