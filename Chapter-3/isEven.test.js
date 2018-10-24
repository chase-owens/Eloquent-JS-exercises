function isEven(n) {
  if (n === 0) {
    return true;
  }
  if (n == !Number) {
    return "Please enter an Integer";
  }
  return n % 2 === 0 ? true : false;
}

describe("isEven()", () => {
  test("whether a number is even or odd", () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(1)).toBe(false);
    expect(isEven(0)).toBe(true);
    expect(isEven(-1)).toBe(false);
    expect(isEven(-2)).toBe(true);
    expect(isEven(!Number)).toMatch(/Please enter an Integer/);
  });
});
