import { getFormattedDate } from './index'
describe('getFormattedDate', () => {
  it('returns date in MMM DD YYYY format', () => {
		const utcDate = '2020-08-26T20:59:39.475347Z'
		expect(getFormattedDate(utcDate)).toBe('Aug 26 2020');
	});
	
	it('if an invalid utc date is provided, it throws an error', () => {
		const invalidUtcDate = 'abc';
		expect(getFormattedDate(invalidUtcDate)).toBe('Invalid Date NaN NaN');
	});

	it('if no date is provided, an empty string is returned', () => {
		expect(getFormattedDate(null)).toBe('');
	});
});
