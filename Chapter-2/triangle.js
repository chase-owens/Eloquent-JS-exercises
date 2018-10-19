for (let trianglePart = "#"; trianglePart.length < 8; trianglePart += "#")
  console.log(trianglePart);

function triangle(n) {
  for (let trianglePiece = "#"; trianglePiece.length < n; trianglePiece += "#")
    console.log(trianglePiece);
}

module.exports = triangle;
