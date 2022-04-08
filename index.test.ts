// przepisz to na operacje tylko na indexach - TDD ofc

class BinarySearch {
  id: number;
  db: IDb[];
  constructor(id: number, db: IDb[]) {
    (this.id = id), (this.db = db);
  }
  go() {
    let left = this.db.slice(0, Math.floor((this.db.length + 1) / 2));
    let right = this.db.slice(Math.floor((this.db.length + 1) / 2));

    let lastLeftId = left[left.length - 1].id;
    if (lastLeftId === this.id) {
      return left[left.length - 1];
    } else if (lastLeftId > this.id) {
      left = left.slice(0, Math.floor((left.length + 1) / 2));
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
