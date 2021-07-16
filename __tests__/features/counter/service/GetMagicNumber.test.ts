import GetMagicNumber from '../../../../src/features/service/GetMagicNumber'

function flushPromises() {
	return new Promise(resolve => process.nextTick(resolve))
}

function spyMathRandom(value: number) {
	jest.spyOn(global.Math, 'random').mockReturnValue(value)
}

beforeEach(() => jest.useFakeTimers())

afterEach(() => {
	jest.useRealTimers()
	jest.spyOn(global.Math, 'random').mockRestore()
})

test('Should resolve with positive number lesser than 5', async () => {
	spyMathRandom(0.6)

	const sut = GetMagicNumber().then(result => expect(result).toEqual(3))

	jest.advanceTimersByTime(1000)
	await flushPromises()
	return sut
})

test('Should resolve with positive number greater than -5', async () => {
	spyMathRandom(0.4)

	const sut = GetMagicNumber().then(result => expect(result).toEqual(-2))

	jest.advanceTimersByTime(1000)
	await flushPromises()
	return sut
})
