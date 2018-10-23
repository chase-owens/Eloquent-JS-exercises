function countBs(word) {
  if (word == !String) {
    return "Enter a word";
  }
  let bCount = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === "B") {
      bCount += 1;
    }
  }
  return bCount;
}

describe("countBs", () => {
  test("counts uppercase Bs", () => {
    expect(countBs("BoB")).toBe(2);
    expect(countBs("babel")).toBe(0);
    expect(countBs(!String)).toMatch(/Enter a word/);
  });
});
