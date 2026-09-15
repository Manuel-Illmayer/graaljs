console.log("Begin of script INSTANTIATE.")

const Files = Java.type("java.nio.file.Files");
const Paths = Java.type("java.nio.file.Paths");

const javaBytes = Files.readAllBytes(Paths.get("test.wasm"));
const bytes = new Uint8Array(javaBytes);

(async () => {
  try {
    const wasm = await WebAssembly.instantiate(bytes,{},{builtins:["js-string"]});

    const result = wasm.instance.exports._main("123");
    console.log("Result:", result);
    
  } catch (e) {
    console.error("ERROR:", e)
  }
})();
