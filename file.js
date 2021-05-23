export function identity(x) {
  return x;
}

export function boom() {
  try {
    throw new Error("boom");
  } catch (e) {
    return {
      message: e.message,
      stack: e.stack
    };
  }
}
