import { readFileSync } from "fs"
import { parse } from "toml"

const Config = parse(readFileSync("./conf/default.toml"))

export default Config 
