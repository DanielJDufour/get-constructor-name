const test = require("flug");
const getConstructorName = require("./get-constructor-name.js");

test("test class", ({ eq }) => {
  class TestClass { };
  const obj = new TestClass();
  const name = getConstructorName(obj);
  eq(name, "TestClass");
});

test("buffer", ({ eq }) => {
  const buf = Buffer.alloc(0);
  const name = getConstructorName(buf);
  eq(name, "Buffer");
});

test("arraybuffer", ({ eq }) => {
  const ab = Buffer.alloc(0).buffer;
  const name = getConstructorName(ab);
  eq(name, "ArrayBuffer");
});

test("null", ({ eq }) => {
  const name = getConstructorName(null);
  eq(name, undefined);
});

test("undefined", ({ eq }) => {
  const name = getConstructorName(undefined);
  eq(name, undefined);
});

test("{}", ({ eq }) => {
  const name = getConstructorName({});
  eq(name, "Object");
});

test("0", ({ eq }) => {
  const name = getConstructorName(0);
  eq(name, undefined);
});


test("1", ({ eq }) => {
  const name = getConstructorName(1);
  eq(name, undefined);
});
