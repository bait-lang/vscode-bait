import * as yaml from 'js-yaml'
import * as fs from 'fs'
import path = require('path')

const yml_paths = [
	'./language-configuration.yml'
]

const get_out_path = (inpath: string): string => {
	const out_path = path.resolve(__dirname, '..', 'out', inpath)
	return out_path.replace('.yml', '.json')
}

const convert_file = (yml_path: string) => {
	const yml_txt = fs.readFileSync(yml_path, 'utf8')
	const obj = yaml.load(yml_txt)
	const json_txt = JSON.stringify(obj) + '\n'
	fs.writeFileSync(get_out_path(yml_path), json_txt)
}

const main = () => {
	for (const p of yml_paths) {
		try {
			convert_file(p)
		} catch (e) {
			console.log(e)
		}
	}
}

main()