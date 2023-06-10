function concatStrings(strA, strB) {
  return strA + strB;
}

concatStrings(1, 2); // 3 <-- OPPS!
concatStrings("abc", "def"); // "abcdef"
concatStrings("world", "wide"); // "worldwide"
concatStrings("123", "456"); // 123456

// JEST
expect(concatStrings("abc", "def").toBe("abcdef"));

expect(concatStrings("123", "456").toBe("123456"));
