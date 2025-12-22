import { YAML } from "bun"
import fs from "fs"

const in_files = [
	["language-configuration.yml", "out/language-configuration.json"],
	["syntaxes/bait.yaml-tmlanguage", "out/bait.json"],
]

fs.mkdirSync("out", { recursive: true });

for (const [input, output] of in_files) {
	const data = fs.readFileSync(input, "utf8")
	const json = YAML.parse(data)
	fs.writeFileSync(output, JSON.stringify(json, null, 0))
}
