// 1. отфильтровать нечетные числа
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filtered = numbers.filter(checkNumber);
function checkNumber(number){
return number%2!=0;
} console.log(filtered);

// 2. Отфильтровать строки длинее 5 символов
const words = ['apple', 'cat', 'banana', 'dog', 'elephant', 'car', 'bat']
const lengths = words.filter(words => words.length > 5? words.length :0);
console.log(lengths); 

// 3. Оставить только строки
const mixedTypes = [123, 'apple', { fruit: 'apple' }, 'banana', true, 'car', false]
const stringTypes = mixedTypes.filter(string);
function string (item){
    return typeof item === "string";
};
console.log(stringTypes); 

// 4. Офильтровать строки которые начинаются на a
const words2 = ['apple', 'banana', 'apricot', 'grape', 'avocado', 'kiwi']
const startWithA = words2.filter(wordS);
function wordS (item){
    return item.startsWith("a");
}
console.log(startWithA);

//  5. Отфильтровать строки, которые не содержат букву e
const words3 = ['apple', 'banana', 'cherry', 'date', 'fig', 'grape', 'kiwi']
const includesE = words3.filter(wordsE);
function wordsE (item){
    return !item.includes("e");
}console.log(includesE); 

// 6. Посложнее. Отфильтровать студентов с оценками выше 80
const students = [
  { name: 'John', grade: 85 },
  { name: 'Jane', grade: 78 },
  { name: 'Doe', grade: 90 },
  { name: 'Smith', grade: 76 },
  { name: 'Chris', grade: 81 },
]

const studentsWithGrade = students.filter(student => student.grade > 80);
console.log(studentsWithGrade);


// 7. Сложная. Отфильтровать повторяющиеся числа
// можно использовать indexOf()
const duplicates = [1, 2, 3, 2, 4, 5, 5, 6, 7, 8]
const duplicates2 = duplicates.filter((x, i) => duplicates.indexOf(x) === i);

console.log(duplicates2);

// 2.1 Добавить восклицательный знак в конце каждого слова
const words4 = ['hello', 'world', 'javascript']
const wordsAdd = words4.map(someAddWord);
function someAddWord(word){
    return word + "!";
} console.log(wordsAdd);

// 2.2  Добавить нумерацию каждого слова 1. Apple etc.
const words1 = ['apple', 'banana', 'cherry']
const wordsNumber = words1.map(someAddNumber);

function someAddNumber(word, index){
    return (index + 1+".") + " " + word;
} console.log(wordsNumber);


// 2.3 Сделать все числа положительными
const numbers3 = [1, -2, 3, -4, 5]

const numbersPositive = numbers3.map(someAddPositive);
function someAddPositive(number){
    if(number > 0){
        return number;
    } else {
        return number * -1;
    }}
    console.log(numbersPositive);

// 2.4 Сделать каждое число строкой
const numbers4 = [5, 10, 15, 20]

const numbersString = numbers4.map(someAddString);
function someAddString(number){
    return number.toString();
} console.log(numbersString);

// 2.5 Умножить каждый элемент на его индекс
const numbers5 = [1, 2, 3, 4, 5]

const numbersProduct = numbers5.map(someAddProduct);

function someAddProduct(number, index){
    return number * index;
} console.log(numbersProduct);


// 2.6 Прибавить к числу 10 если его индекс кратен 3
const numbers6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const numbersAdd10 = numbers6.map(someAdd10);
function someAdd10(number){
    if(number % 3 === 0){
        return number + 10;
    } else {
        return number;
    }
} console.log(numbersAdd10);