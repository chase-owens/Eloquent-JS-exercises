function chessBoard(n) {
  if (n == 0) {
    return null;
  }

  let board = "";
  let newRow = "\n";
  for (let i = 0; i < n; i++) {
    for (let k = 0; k < n; k++) {
      if ((i + k) % 2 == 0) {
        board += " ";
      } else {
        board += "#";
      }
    }
    board += newRow;
  }
  console.log(board);
  return board;
}

//First solution
/*
function chessBoard(n) {
  let board = "";
  for (let i = 0; i < n; i++) {
    if (i > 0) {
      board += "\n";
    }
    for (let k = 0; k < n; k++) {
      if (k % 2 == 0 && i % 2 == 0) {
        board += " ";
      } else if (k % 2 == 1 && i % 2 == 1) {
        board += " ";
      } else {
        board += "#";
      }
    }
  }
  console.log(board);
}
*/

describe("chessboard()", () => {
  test("builds a chess board with the height and width specified", () => {
    expect(chessBoard(2)).toMatch(/#/);
    expect(chessBoard(0)).toBeNull();
  });
});
