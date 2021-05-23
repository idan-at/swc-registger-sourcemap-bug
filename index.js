const assert = require('assert');

const registerSwc = () => {
  const register = require("@swc/register");

  const options = {
    env: {
      targets: {
        node: "14",
      },
    },
    module: {
      type: "commonjs",
    },
    sourceMaps: true,
  }

  register(options);
}

registerSwc();
const { boom } = require("./file");

const e = boom();
console.log(e.stack)
assert(e.stack.includes('file.js:7:'), 'Expected file.js stack trace to point to line 7.')
