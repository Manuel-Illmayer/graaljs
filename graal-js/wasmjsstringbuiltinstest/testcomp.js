console.log("Begin of script COMPILE.");

const Files = Java.type("java.nio.file.Files");
const Paths = Java.type("java.nio.file.Paths");

const javaBytes = Files.readAllBytes(Paths.get("test.wasm"));
const bytes = new Uint8Array(javaBytes);

(async () => {
  try {
    const wasmModule = await WebAssembly.compile(bytes, { builtins: ["js-string"] });
    console.log("Compilation successful.");

    const instance = await WebAssembly.instantiate(wasmModule, {});

    const result = instance.exports._main("123");
    console.log("Result:", result);
    
  } catch (e) {
    console.error("ERROR:", e);
  }
})();
