(module
    (import "js-string" "length" (func $length (param externref) (result i32)))

    (func $main (export "_main") (param externref) (result i32)
        local.get 0
        call $length
    )
)
