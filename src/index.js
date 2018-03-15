class SmartCalculator {

  
   constructor(initialValue) {
	// your implementation
        this.inVal = initialValue;
    }
	
	toString(){
        return eval(this.inVal);
    }
	
    add(number) {
	
        this.inVal +='+'+number;
        return this;
    }

    subtract(number) {

        this.inVal +='-'+number;
        return this;
    }

    multiply(number) {
	
        this.inVal +='*'+number;
        return this;
    }

    devide(number) {
	
        this.inVal +='/'+number;
        return this;
    }

    pow(number) {
	
        this.inVal +='**'+number;
        return this;
    }

  
}

module.exports = SmartCalculator;


