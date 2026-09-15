console.log("Begin of script STREAMING.");

const Files = Java.type("java.nio.file.Files");
const Paths = Java.type("java.nio.file.Paths");

// Read the file bytes
const javaBytes = Files.readAllBytes(Paths.get("test.wasm"));

(async () => {
  try {
    const stream = new ReadableStream({
      start(controller) {
        controller.enqueue(new Uint8Array(javaBytes));
        controller.close();
      }
    });

    const resultObj = await WebAssembly.instantiateStreaming(stream, {}, { builtins: ["js-string"] });

    const instance = resultObj.instance;
    const result = instance.exports._main("123");
    
    console.log("Result (via Streaming):", result);
    
  } catch (e) {
    console.error("ERROR (Streaming):", e);
  }
})();
