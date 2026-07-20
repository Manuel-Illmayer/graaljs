console.log("Begin of script.")

const Files = Java.type("java.nio.file.Files");
const Paths = Java.type("java.nio.file.Paths");

const javaBytes = Files.readAllBytes(Paths.get("test.wasm"));
const bytes = new Uint8Array(javaBytes);

(async () => {
  try {
    const wasm = await WebAssembly.instantiate(bytes, {
      js: {
        log: (x) => console.log("wasm says: "+x)
      }
    });

    wasm.instance.exports.run()

  } catch (e) {
    console.error("ERROR:", e)
  }
})();



// const fs = require('fs')
// const path = require('path')

// const bytes = fs.readFileSync(path.join(__dirname,'test.wasm'));

// (async () => {
//   const wasm = await WebAssembly.instantiate(bytes);
//   console.log(wasm.instance.exports.main());
// })();