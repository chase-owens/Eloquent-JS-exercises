for (let trianglePart = "#"; trianglePart.length < 8; trianglePart += "#")
  console.log(trianglePart);

function triangle(n) {
  if (typeof n == !Number) {
    throw new Error("Enter an Integer");
  }

  if (n <= 0) {
    return null;
  } else if (n == 1) {
    return undefined;
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
  });

  test("that 0 is null", () => {
    expect(triangle(0)).toBeNull();
  });

  test("if string thows error", () => {
    exptect(triangle(!Number)).toThrow(Error);
  });
});
