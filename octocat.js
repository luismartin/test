var test = {
	testVar: 150,
	testFunc: function(num) {
		return num * this.testVar;
	}
}
console.log(test.testFunc(4));
