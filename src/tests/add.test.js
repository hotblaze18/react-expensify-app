const add = (a, b) => a + b + 1;

test("should add two numbers", () => {
  const result = add(3, 4);

  if (result != 7) {
    throw new Error(`Added 4 and 3 resulted ${result} expected 7`);
  }
});
