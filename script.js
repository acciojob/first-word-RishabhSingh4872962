function firstWord(s) {
  // your code here
	if (s.length==0 || s.length==1) {
		return s;
	}
	let str=s.trim().split(" ");
	if (str.length==1) {
		return s;
	}
	return str[0];
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
