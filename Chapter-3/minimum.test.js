const minimum = (a, b) => {
  if (a === b) {
    return undefined;
  }
  if (a == String && b == String && a != b) {
    return "Please enter an Integer";
  }
  return a < b ? a : b;
};

describe("minimum()", () => {
  test("returns minimum value", () => {
    expect(minimum(0, 1)).toBe(0);
    expect(minimum(1, 1)).toBeUndefined();
    expect(minimum(!Number, Number)).toBe(Number);
    expect(minimum(!Number, !Number)).toMatch(/Please enter an Integer/);
  });
});
