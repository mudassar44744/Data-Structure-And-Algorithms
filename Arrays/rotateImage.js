function rotate(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i; j < matrix.length; j++) {
			// Transpose
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    // Reverse
    matrix.forEach(arr => arr.reverse());
    return matrix;
};

console.log(rotate(
    [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]])
)

/**
 Problem :
 https://leetcode.com/problems/rotate-image/



00 01 02
10 11 12
20 22 22


Reverse on Diagonal and then Reverse Left to Right 
	
	1 2 3      1 4 7      7 4 1
	4 5 6  =>  2 5 8  =>  8 5 2 
	7 8 9      3 6 9      9 6 3

https://leetcode.com/problems/rotate-image/solutions/2617602/easy-to-understand-typescript-solution-with-explanation/

*/