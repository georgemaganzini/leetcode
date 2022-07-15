const roman = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}

var romanToInt = function(S) {
    let ans = 0
    for (let i = S.length-1; ~i; i--) {
        let num = roman[S.charAt(i)]
        // iterate backwards, instead of tracking highest val seen, if current number * 4 < ans, subtract it
        if (4 * num < ans) ans -= num
        else ans += num
    }
    return ans
};


var romanToInt = function(s) {
    let total = 0;
    for (let [i, char]of s.split('').entries()){
        switch (char) {
            case "M":
                total += 1000;
                break;
            case "D":
                total += 500;
                break;
            case "C":
                total += 100;
                if (s[i+1]==='D') total -= 200;
                if (s[i+1]==='M') total -= 200;
                break;
            case "L":
                total += 50;
                break;
            case "X":
                total += 10;
                if (s[i+1]==='L') total -= 20;
                if (s[i+1]==='C') total -= 20;
                break;
            case "V":
                total += 5;
                break;
            case "I":
                total+=1;
                if (s[i+1]==='V') total -= 2;
                if (s[i+1]==='X') total -= 2;
                break;
            default:
                break;
        }
    }

    return total
};

let s = "MCMXCIV";
console.log(romanToInt(s))