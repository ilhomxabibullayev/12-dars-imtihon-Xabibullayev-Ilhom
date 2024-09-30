// 1 masala

function findAverage(params) {
    if (params.length === 0) return 0;

    const sum = params.reduce((acc, num) => acc + num, 0);
    return sum / params.length;
}

const numbers = [1];
console.log(findAverage(numbers));

function findAverage(params) {
    if (params.length === 0) return 0;

    const sum = params.reduce((acc, num) => acc + num, 0);
    return sum / params.length;
}

const number = [1, 3, 5, 7];
console.log(findAverage(number));

// 4 masala

function findFirstNonConsecutive(params) {
    for (let i = 1; i < params.length; i++) {
        if (params[i] !== params[i - 1] + 1) {
            return params[i];
        }
    }
    return null;
}

const num = [1, 2, 3, 4, 6, 7, 8];
console.log(findFirstNonConsecutive(num));

function findFirstNonConsecutive(params) {
    for (let i = 1; i < params.length; i++) {
        if (params[i] !== params[i - 1] + 1) {
            return params[i];
        }
    }
    return null;
}

const num2 = [1, 2, 3, 4];
console.log(findFirstNonConsecutive(num2));

// 5 masala

function findOddCountNumber(params) {
    const count = {};

    for (let num of params) {
        count[num] = (count[num] || 0) + 1;
    }

    for (let num in count) {
        if (count[num] % 2 !== 0) {
            return num;
        }
    }
    return null;
}

const numbers2 = [7];
console.log(findOddCountNumber(numbers2));

function findOddCountNumber(params) {
    const count = {};

    for (let num of params) {
        count[num] = (count[num] || 0) + 1;
    }

    for (let num in count) {
        if (count[num] % 2 !== 0) {
            return num;
        }
    }
    return null;
}

const numbers3 = [0];
console.log(findOddCountNumber(numbers3));

function findOddCountNumber(params) {
    const count = {};

    for (let num of params) {
        count[num] = (count[num] || 0) + 1;
    }

    for (let num in count) {
        if (count[num] % 2 !== 0) {
            return num;
        }
    }
    return null;
}

const numbers4 = [1, 1, 2];
console.log(findOddCountNumber(numbers4));

function findOddCountNumber(params) {
    const count = {};

    for (let num of params) {
        count[num] = (count[num] || 0) + 1;
    }

    for (let num in count) {
        if (count[num] % 2 !== 0) {
            return num;
        }
    }
    return null;
}

const numbers5 = [0, 1, 0, 1, 0];
console.log(findOddCountNumber(numbers5));

function findOddCountNumber(params) {
    const count = {};

    for (let num of params) {
        count[num] = (count[num] || 0) + 1;
    }

    for (let num in count) {
        if (count[num] % 2 !== 0) {
            return num;
        }
    }
    return null;
}

const numbers6 = [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1,];
console.log(findOddCountNumber(numbers6));

// 6 masala

function findMinNumber(params) {
    if (params.length === 0) {
        return null;
    }

    let min = arr[0];

    for (let i = 1; i < params.length; i++) {
        if (params[i] < min) {
            min = params[i];
        }
    }

    return min;
}

const nums = [78, 56, 232, 12, 8];
console.log(findMinNumber(nums));

function findMinNumber(params) {
    if (params.length === 0) {
        return null;
    }

    let min = arr[0];

    for (let i = 1; i < params.length; i++) {
        if (params[i] < min) {
            min = params[i];
        }
    }

    return min;
}

const nums2 = [78, 56, 232, 12, 18];
console.log(findMinNumber(nums2));

function findMinNumber(params) {
    if (params.length === 0) {
        return null;
    }

    let min = params[0];

    for (let i = 1; i < params.length; i++) {
        if (params[i] < min) {
            min = params[i];
        }
    }

    return min;
}

const nums3 = [78, 56, 232, 412, 228];
console.log(findMinNumber(nums3));

function findMinNumber(params) {
    if (params.length === 0) {
        return null;
    }

    let min = params[0];

    for (let i = 1; i < params.length; i++) {
        if (params[i] < min) {
            min = params[i];
        }
    }

    return min;
}

const nums4 = [78, 56, 232, 12, 0];
console.log(findMinNumber(nums4));

function findMinNumber(params) {
    if (params.length === 0) {
        return null;
    }

    let min = params[0];

    for (let i = 1; i < params.length; i++) {
        if (params[i] < min) {
            min = params[i];
        }
    }

    return min;
}

const nums5 = [1, 56, 232, 12, 8];
console.log(findMinNumber(nums5));

// 7 masala

function sumNumbers(...numbers) {
    let sum = 0;

    for (let num of numbers) {
        sum += num;
    }

    return sum;
}

console.log(sumNumbers(0, -1));
console.log(sumNumbers(0, 1));
console.log(sumNumbers(2, 2));
console.log(sumNumbers(-1, 2));

// 9 masala

function canFormTriangle(a, b, c) {
    return (a + b > c) && (a + c > b) && (b + c > a);
}

const son1 = 1;
const son2 = 2;
const son3 = 2;

if (canFormTriangle(son1, son2, son3)) {
    console.log("true");
} else {
    console.log("false");
}

function canFormTriangle(a, b, c) {
    return (a + b > c) && (a + c > b) && (b + c > a);
}

const son4 = 7;
const son5 = 2;
const son6 = 2;

if (canFormTriangle(son4, son5, son6)) {
    console.log("true");
} else {
    console.log("false");
}
