//https://www.hackerrank.com/challenges/diagonal-difference/problem
//https://leetcode.com/problems/matrix-diagonal-sum/description/
// Javascript Code for Find difference between sums of two diagonals

function difference(arr,n)
	{
		// Initialize sums of diagonals
		let d1 = 0, d2 = 0;
	
		for (let i = 0; i < n; i++)
		{
			for (let j = 0; j < n; j++)
			{
				// finding sum of primary diagonal
				if (i == j)
					d1 += arr[i][j];
	
				// finding sum of secondary diagonal
				if (i == n - j - 1)
					d2 += arr[i][j];
			}
		}
	
		// Absolute difference of the sums
		// across the diagonals
		return Math.abs(d1 - d2);
	}
	
	/* Driver program to test above function */
	
		let n = 3;
		
		let arr =
		[
			[11, 2, 4],
			[4 , 5, 6],
			[10, 8, -12]
		];
	
		document.write(difference(arr, n));
	

	function diagonalDifference(arr) {
  
	let dim = arr[0].length;
	let f_d = 0;
	let  s_d = 0; 
	let sum = 0;

	for(let i = 0, j = (dim - 1); i < dim, j > -1; i++, j--) {
		f_d += arr[i][i];
		s_d += arr[i][j];
	} 

	sum = f_d - s_d;

	if(sum >= 0) return sum;
	else if(sum < 0) return Math.abs(sum);

}

(diagonalDifference(arr));

// 00 01 02
// 10 11 12
// 20 21 22

//      02
//   11 
//20 


/*
i === (n - j - 1)

row   length col  length value
0 === 3   -  2  -   1
1 === 3   -  1  -   1
2 === 3   -  0  -   1
*/
