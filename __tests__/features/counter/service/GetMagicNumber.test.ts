import GetMagicNumber from '../../../../src/features/service/GetMagicNumber'

function spyMathRandom(value: number) {
	jest.spyOn(global.Math, 'random').mockReturnValue(value)
}

beforeEach(() => jest.useFakeTimers())

afterEach(() => {
	jest.useRealTimers()
	jest.spyOn(global.Math, 'random').mockRestore()
})

test('Should resolve with positive number lesser than 5', () => {
	spyMathRandom(0.6)

	const sut = GetMagicNumber().then(result => expect(result).toEqual(3))

	jest.advanceTimersByTime(1000)
	return sut
})

test('Should resolve with positive number greater than -5', () => {
	spyMathRandom(0.4)

	const sut = GetMagicNumber().then(result => expect(result).toEqual(-2))

	jest.advanceTimersByTime(1000)
	return sut
})
