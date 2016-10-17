"use strict";
const reverse = function(arr) {

	const newlist= arr.map(function(n){
		return arr[arr.length-index(arr,n)-1];

	});
	return newlist;
};

const index= function(arr,n){
	for(let c=0;c<arr.length;c=c+1){
		if(arr[c]===n){
			return c;
		}
	}

};

const reversedArray = reverse([1, 2, 3, 4, 5, 6, 7]);
console.log(reversedArray); 

