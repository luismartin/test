var test = {
	testVar: 100,
	testFunc: function(num) {
		return num * this.testVar;
	}
}
console.log(test.testFunc(4));
