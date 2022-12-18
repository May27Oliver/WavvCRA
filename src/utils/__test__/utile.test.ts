import printWord from "../printWord";

describe("test begin", () => {
  test("Hello Test", () => {
    expect(printWord("Hello Test")).toBe("Hello Test");
  });
});
