// This is not a perfect random generator, but good enough for this small app until a backend is implemented
export const generateRandomString = (): string =>
  Math.random().toString(16).substr(2, 8);
