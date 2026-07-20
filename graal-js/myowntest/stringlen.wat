(module

  (import "js-string" "length" (func $length (param externref) (result i32)))

  (import "test" "getTestString" (func $getTestString (result externref)))
  (import "test" "print" (func $print (param externref)))
  (import "test" "print" (func $printInt (param i32)))

  (memory 1)
  ;; (memory (export "memory") 1)

;;   (data (i32.const 0) "Hello World!")
;;   (data (i32.const 32) "Second String")

  (func $_start

    ;; test length
    call $getTestString
    call $length
    call $printInt

  )

  (export "_start" (func $_start))
)