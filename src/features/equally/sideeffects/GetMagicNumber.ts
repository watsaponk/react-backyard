export default function GetMagicNumber(): Promise<number> {
	return new Promise(resolve =>
		setTimeout(() => {
			const base = Math.floor(Math.random() * 6)
			const pow = Math.random() < 0.5 ? -1 : 1
			resolve(base * pow)
		}, 1000)
	)
}
