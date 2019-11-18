import test from "ava"
import envType from "."

test("main", (t) => {
    t.is(envType, "node")
})
