console.log("Begin of script.")

const Files = Java.type("java.nio.file.Files");
const Paths = Java.type("java.nio.file.Paths");

const javaBytes = Files.readAllBytes(Paths.get("stringlen.wasm"));
const bytes = new Uint8Array(javaBytes);

(async () => {
  try {
    const wasm = await WebAssembly.instantiate(bytes, {
        test: {
            getTestString: () => {
                return "Hello World!";
            },
            print: (s) => {
                console.log(s);
            }
        }
    }, {builtins: ["js-string"]});

    const result = wasm.instance.exports._start();
    console.log("Result:", result);
    
  } catch (e) {
    console.error("ERROR:", e)
  }
})();

