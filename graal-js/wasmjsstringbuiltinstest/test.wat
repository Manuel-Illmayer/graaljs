(module
    (global $str1 (import "string_constants" "hello ") externref)
    (global $str2 (import "string_constants" "world") externref)
    (import "js-string" "length" (func $length (param externref) (result i32)))

    (func $main (export "_main") (param externref) (result i32)
        global.get $str1
        call $length
        global.get $str2
        call $length
        i32.add
    )
)
