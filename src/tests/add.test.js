const add = (a, b) => a + b;
const generateGreeting = (name = "anonymous") => `hello ${name}`;

test("should add two numbers", () => {
    const result = add(3, 4);
    expect(result).toBe(7);
});
test("should greet marcial", () => {
    const result = generateGreeting("marcial");
    expect(result).toBe("hello marcial");
});
test("should greet anonymous", () => {
    const result = generateGreeting();
    expect(result).toBe("hello anonymous");
});
