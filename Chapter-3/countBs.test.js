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

function countChar(char) {
  return word => {
    if (word == !String) {
      return "Enter a word";
    }
    let charCount = 0;
    for (let i = 0; i < word.length; i++) {
      if (word[i] === char) {
        charCount += 1;
      }
    }
    return charCount;
  };
}

let countPs = countChar("P");

describe("countBs", () => {
  test("counts uppercase Bs", () => {
    expect(countBs("BoB")).toBe(2);
    expect(countBs("babel")).toBe(0);
    expect(countBs(!String)).toMatch(/Enter a word/);
  });
});

describe("countPs", () => {
  test("counts uppercase Ps", () => {
    expect(countPs("PoP")).toBe(2);
    expect(countPs("poppy")).toBe(0);
    expect(countPs(!String)).toMatch(/Enter a word/);
  });
});
