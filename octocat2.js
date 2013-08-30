var test = {
	testVar: 200,
	testFunc: function(num) {
		return num * this.testVar;
	}
}
console.log(test.testFunc(4));
