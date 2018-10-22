for (let trianglePart = "#"; trianglePart.length < 8; trianglePart += "#")
  console.log(trianglePart);

const triangle = n => {
  if (n === !Number) {
    return "Please enter an Integer";
  }

  if (n <= 0) {
    return null;
  } else if (n == 1) {
    return false;
  } else {
    for (
      let trianglePiece = "#";
      trianglePiece.length < n;
      trianglePiece += "#"
    )
      console.log(trianglePiece);
  }
};

describe("triangle()", () => {
  test("output is what exected", () => {
    //expect(triangle(2)).toMatch(/##/);
    expect(triangle(0)).toBeNull();
    expect(triangle(1)).toBe(false);
    expect(triangle(!Number)).toMatch(/Please enter an Integer/);
  });
});
