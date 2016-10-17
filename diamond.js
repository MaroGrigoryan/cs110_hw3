"use strict";

const diamond = function(n) {

if(n%2 === 0) { 

n = n + 1;

}


if(n===0){

	return "";
}
 
 for(let k = 1; k<=n; k=k+1){
 	const space = abs((n+1)/2 - k);
 	const star = n-2*(abs((n+1)/2 - k));

 	console.log(starspace(" ",space)+starspace("*",star)+"\n");
 }



};
 


const starspace = function(a,b){
	let value = "";
	for(let c=1; c<=b; c=c+1 ){

		value=value+a;
	}
		return value;
}

const abs = function(n){

	if(n<0){
		return -n;
	}
	return n;
};
diamond(5);
