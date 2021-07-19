function generateNumber() {
	const base = Math.floor(Math.random() * 6)
	const pow = Math.random() < 0.5 ? -1 : 1
	return base * pow
}

export interface MagicNumber {
	goal: number
	value: number
}

export default function GetMagicNumber(): Promise<MagicNumber> {
	return new Promise(resolve =>
		setTimeout(() => {
			let goal = 0
			let value = 0

			do {
				goal = generateNumber()
			} while (goal === value)

			do {
				value = generateNumber()
			} while (value === goal)

			resolve({ goal, value })
		}, 1000)
	)
}
