export default {
	'*.{js,jsx,ts,tsx,json,css,md}': [
		'biome format --write',
		'biome lint --apply',
	],
}
