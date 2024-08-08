// ========== Task-1  ==========

// Funksiya yaratish kerak va u funksiya argument sifati array qabul va arrayni ichida valuelar bir qanchda yokida 1 dona yokida umuman bo'lmasligi ham mumkin, fuksiyani vazifasi array ichidagi eng katta va eng kichik sonlarda arrayda qaytarishi kerak

// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

// minMax([2334454, 5]) ➞ [5, 2334454]

// minMax([1]) ➞ [1, 1]

//
//
//

console.log(`========== Task-1  ==========`);

function minMax(firstArr) {
  var minValue = firstArr[0];
  var maxValue = firstArr[0];
  for (const num of firstArr) {
    if (num < minValue) {
      minValue = num;
    }
    if (maxValue < num) {
      maxValue = num;
    }
  }
  return [minValue, maxValue];
}

console.log(minMax([1, 2, 3, 4, 5]));

console.log(minMax([2334454, 5]));

console.log(minMax([1]));

//
//
//

// ========== Task-2  ==========

// Funksiya yaratish kerak va u funksiya argument sifati number qabul va shu sonni 2 ga bo'ladi va chiqqan natijani array solib qaytaradi

// numberSplit(4) ➞ [2, 2]

// numberSplit(10) ➞ [5, 5]

// numberSplit(11) ➞ [5, 6]

// numberSplit(-9) ➞ [-5, -4]

//
//
//

console.log(`========== Task-2  ==========`);

function numberSplit(num) {
  var numberSplited = num / 2;
  return [Math.floor(numberSplited), Math.ceil(numberSplited)];
}

console.log(numberSplit(4));

console.log(numberSplit(10));

console.log(numberSplit(11));

console.log(numberSplit(-9));

//
//
//

// ========== Task-3  ==========

// Funksiya yaratish kerak va u funksiya argument sifatida array qabul qiladi shu arrayni ichidagi sonlarni index bo'yicha va value bo'yicha juft bo'lganlarini array solib qaytaradi

// getOnlyEvens([1, 3, 2, 6, 4, 8]) ➞ [2, 4]

// getOnlyEvens([0, 1, 2, 3, 4]) ➞ [0, 2, 4]

// getOnlyEvens([1, 2, 3, 4, 5]) ➞ []

//
//
//

console.log(`========== Task-3  ==========`);

function getOnlyEvens(secondArr) {
  var getAbsSumAnswer = [];
  for (let i = 0; i < secondArr.length; i++) {
    if (i % 2 == 0 && secondArr[i] % 2 == 0) {
      getAbsSumAnswer.push(secondArr[i]);
    }
  }
  return getAbsSumAnswer;
}

console.log(getOnlyEvens([1, 3, 2, 6, 4, 8]));

console.log(getOnlyEvens([0, 1, 2, 3, 4]));

console.log(getOnlyEvens([1, 2, 3, 4, 5]));

//
//
//

// ========== Task-4  ==========

// Funksiya yaratish kerak va u funksiya argument sifatida array qabul qiladi shu arrayni ichidagi sonlarni musbat qilib ularning hammasini yig'indisini qaytarib bersin number typeda bo'lishi kerak.

// getAbsSum([2, -1, 4, 8, 10]) ➞ 25

// getAbsSum([-3, -4, -10, -2, -3]) ➞ 22

// getAbsSum([2, 4, 6, 8, 10]) ➞ 30

// getAbsSum([-1]) ➞ 1

//
//
//

console.log(`========== Task-4  ==========`);

function getAbsSum(thirdArr) {
  var getAbsSumAnswer = 0;
  for (const num of thirdArr) {
    getAbsSumAnswer += Math.abs(Math.round(num));
  }
  return getAbsSumAnswer;
}

console.log(getAbsSum([2, -1, 4, 8, 10]));

console.log(getAbsSum([-3, -4, -10, -2, -3]));

console.log(getAbsSum([2, 4, 6, 8, 10]));

console.log(getAbsSum([-1]));

//
//
//

// ========== Task-5  ==========

// Funksiya yaratish kerak va u funksiya argument sifatida number va faqat juft qiymat qabul qiladi va ularni array solib qaytaradi agar berilgan argumentlar juft bo'lsa ...

// makePair(1, 2) ➞ [1, 2]

// makePair(51, 21) ➞ [51, 21]

// makePair(512124, 215) ➞ [512124, 215]

// makePair() ➞ []

//
//
//

console.log(`========== Task-5  ==========`);

function makePair(firstNum, secondNum) {
  var makePairAnswer = [];

  if (typeof firstNum == "undefined" && typeof secondNum == "undefined") {
    return makePairAnswer;
  }
  if (typeof firstNum == "number" && typeof secondNum == "number") {
    makePairAnswer.push(firstNum);
    makePairAnswer.push(secondNum);

    return makePairAnswer;
  }
}

console.log(makePair(1, 2));

console.log(makePair(51, 21));

console.log(makePair(512124, 215));

console.log(makePair());

//
//
//
