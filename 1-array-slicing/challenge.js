// Rules
// The function should take three parameters - start, finish and an array
// The function needs to return a new array that contains a slice of the original array
// The slice should start at the start position and end one place before the finish position

/**
 * Takes and array, start and finsih and slices the array
 * @param {Int} start The start position for the slice
 * @param {Int} finish The finish position that the slice should stop before
 * @param {Array} array Array that will be sliced
 * @return {Array} The slice of the array
 */
function slice(start, finish, array) {
	const slicedArray = [];

	for (const index in array) {
		if (index >= start && index < finish) {
			slicedArray.push(array[index]);
		}
	}

	return slicedArray;
}

const colors = [`orange`, `blue`, `red`, `pink`, `yello`, `purple`];

const slicedArray = slice(0, 2, colors);

console.log(slicedArray);
