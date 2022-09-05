// get unique records from an array of objects based on the provided key
const studentList  = [
{id: 100, name: 'Mr. A', age: 30},
{id: 101, name: 'Mr. B', age: 32},
{id: 102, name: 'Mr. C', age: 28},
{id: 103, name: 'Mr. D', age: 30}
];

function findUniqieByKeyName(list, key) {
	const result = [];
    const obj = {}
	for(let i=0; i< list.length; i++) {
    	if(list[i][key] === obj[list[i][key]]) {
        // do nothing
        } else {
        result.push(list[i]);
        obj[list[i][key]] = list[i][key];
        }
    }
    return result;
}

const uniqueByAge = findUniqieByKeyName(studentList, 'age');
