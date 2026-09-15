console.log("Begin of script INSTANTIATE.")

const Files = Java.type("java.nio.file.Files");
const Paths = Java.type("java.nio.file.Paths");

const javaBytes = Files.readAllBytes(Paths.get("test.wasm"));
const bytes = new Uint8Array(javaBytes);

(async () => {
  try {
    const wasm = await WebAssembly.instantiate(bytes,{},{
      builtins:["js-string"],
      importedStringConstants: "string_constants"
    });

    const result = wasm.instance.exports._main();
    console.log("Result:", result);
    
  } catch (e) {
    console.error("ERROR:", e)
  }
})();
