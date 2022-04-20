/**
 * 
 * @param {string} utcDate 
 * @returns {string} formattedDate MMM DD YYYY
 */
export const getFormattedDate = (utcDate) => {
	if(!utcDate) return '';
	const date = new Date(utcDate);
	const year = date.getFullYear();
	const month = date.toLocaleString('default', { month: 'short' });
	const day = date.getDate();

	return `${month} ${day} ${year}`;
}