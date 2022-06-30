
const findNthPrime = (n) => {
    if (n < 1) return null;

    let primeNumbers = [2];

    for (let i = 3; primeNumbers.length < n; i += 2){
        let isPrime = true;
        for (let j = 0; j < primeNumbers.length; j++) {
            if (primeNumbers[j] * primeNumbers[j] <= i){
                if (i % primeNumbers[j] === 0){
                    isPrime = false;
                    break;
                }
            }
        }
        if (isPrime) primeNumbers.push(i);
    }
    return primeNumbers[n-1];
}

// console.log(findNthPrime(5))

// function Rational(x, y) {

// }
//     let g = gcd(Math.abs(x), Math.abs(y));

//     let num = x / g;

//     let den = Math.abs(y) / g;

//     if (y < 0) num = -num;


//     toString: function() {
//         if (den === 1) return "" + num;
//         return num + "/" + den;
//         }

// }


class Rational {
    constructor(numerator, denominator){
        this.numerator = numerator;
        this.denominator = denominator;
    }

    getNumerator(){
        return this.numerator;
    }

    getDenominator(){
        return this.denominator
    }

    add(num){
        return new Rational(this.getNumerator() * num.getDenominator() + num.getNumerator() * this.getDenominator(), this.getDenominator() * num.getDenominator());
    }

    subtract(num){
        return new Rational(this.getNumerator() * num.getDenominator() - num.getNumerator() * this.getDenominator(), this.getDenominator() * num.getDenominator());
    }

    multiply(num){
        return new Rational(this.getNumerator() * num.getNumerator(), this.getDenominator() * num.getDenominator());
    }

    divide(num){
        return new Rational(this.getNumerator() * num.getDenominator(), this.getDenominator() * num.getNumerator());
    }

    printDecimal(){
        return console.log(this.getNumerator()/this.getDenominator());
    }

    printFraction(){
        return console.log(`${this.getNumerator()}/${this.getDenominator()}`)
    }

}

let number = new Rational(3, 7);

number.printDecimal();