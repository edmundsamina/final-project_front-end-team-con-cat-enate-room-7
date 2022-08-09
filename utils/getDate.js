    
export function getMaxDate() {
    const now = new Date();
	const maxYear = (now.getFullYear() + 5);
	let month =  (now.getMonth() + 1);
	let day =  (now.getDate());
	if(month < 10)
        month = '0' + month.toString();
    if(day < 10)
        day = '0' + day.toString();
	const maxDate = `${maxYear}-${month}-${day}`
    return maxDate
}
export function getMinDate() {
    const now = new Date();
	const minYear = (now.getFullYear() - 5);
	let month =  (now.getMonth() + 1);
	let day =  (now.getDate());
	if(month < 10)
        month = '0' + month.toString();
    if(day < 10)
        day = '0' + day.toString();
	const minDate = `${minYear}-${month}-${day}`
    return minDate
}

export function getCurrentDate() {
    const now = new Date();
	const year = (now.getFullYear());
	let month =  (now.getMonth() + 1);
	let day =  (now.getDate());
	if(month < 10)
        month = '0' + month.toString();
    if(day < 10)
        day = '0' + day.toString();
	const currentDate = `${year}-${month}-${day}`
    return currentDate
}