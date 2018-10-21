for (let trianglePart = "#"; trianglePart.length < 8; trianglePart += "#")
  console.log(trianglePart);

function triangle(n) {
  for (let trianglePiece = "#"; trianglePiece.length < n; trianglePiece += "#")
    console.log(trianglePiece);
}

test("draws a triangle trangle in console, wher base and height equal n", () => {
  expect(trianglePart.length).toEqual(7);
});
