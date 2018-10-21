for (let trianglePart = "#"; trianglePart.length < 8; trianglePart += "#")
  console.log(trianglePart);

function triangle(n) {
  if (typeof n == !Number) {
    throw new Error("Enter an Integer");
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
    return trianglePiece;
  }
}

describe("triangle()", () => {
  test("output is what exected", () => {
    expect(triangle(2)).toMatch(/##/);
    expect(triangle(0)).toBeNull();
    exptect(triangle(!Number)).toThrow(Error);
  });
});
