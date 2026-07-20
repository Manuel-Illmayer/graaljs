(module
  (import "js" "strlen" (func $strlen (param externref) (result i32)))

  (func (export "run") (param externref) (result i32)
    local.get 0
    call $strlen
  )
)