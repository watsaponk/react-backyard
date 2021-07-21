import GetMagicNumber from '../../../../src/features/equally/sideeffects/GetMagicNumber'

beforeEach(() => jest.useFakeTimers())

afterEach(() => {
	jest.useRealTimers()
	jest.spyOn(global.Math, 'random').mockRestore()
})

test('GetMagicNumber should generate match criteria result after 1000 ms', () => {
	const sut = GetMagicNumber().then(result => {
		const { goal, value } = result
		expect(goal).toBeLessThanOrEqual(5)
		expect(goal).toBeGreaterThanOrEqual(-5)
		expect(value).toBeLessThanOrEqual(5)
		expect(value).toBeGreaterThanOrEqual(-5)
		expect(goal).not.toEqual(value)
	})

	jest.advanceTimersByTime(1000)
	return sut
})
