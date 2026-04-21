function greet(name){
    return name || "Guest";
}

test ("returns Guest when name  is empty", ()=> {
//Arrange 
const name = "";
// Act 
const result= greet(name);
//Assert 
expect (result).toBe ("Guest");
});


function toggle(value){
    return !value;
}
test ("toggles boolean value",()=>{
const input =true;
const result = toggle(value);
expect (result). toBe(false);
});


function addItem(arr, item){
    arr.push(item);
    return arr;
}
test ("adds item to array", () =>{
    const arr =[1,2,3,4];
    const result = addItem (arr,item);
    expect(result).toEqual([1,2,3,4,5]);
})


function removeItem(arr, item) {
return arr.filter(i => i !== item);
}
test('removes item from array', () => {
const arr = [1,2,3,4,5];
const result = removeItem(arr,3);
expect(result).toEqual([1,2,4,5]);
});


function isValidPassword(password) {
return password.length >= 6;
}
test('returns true for valid password length', () => {
const password = "1234cdfg";
const result = isValidPassword(password);
expect(result).toBe(true);
});

//STAGE 3


//exactly 6 characters 
function isValidPassword(password) {
return password.length >= 6;
}
test('returns true for valid password length', () => {
const password = "greens";
const result = isValidPassword(password);
expect(result).toBe(true);
});

//less than 6 characters - negative
function isValidPassword(password) {
return password.length >= 6;
}
test('returns true for valid password length', () => {
const password = "green";
const result = isValidPassword(password);
expect(result).toBe(false);
});

// more than 6 characters- positive
function isValidPassword(password) {
return password.length >= 6;
}
test('returns true for valid password length', () => {
const password = "greens1234";
const result = isValidPassword(password);
expect(result).toBe(true);
});

// empty - edge case
function isValidPassword(password) {
return password.length >= 6;
}
test('returns true for valid password length', () => {
const password = "";
const result = isValidPassword(password);
expect(result).toBe(false);
});

//with special characters 
function isValidPassword(password) {
return password.length >= 6;
}
test('returns true for valid password length', () => {
const password = "#greens @45";
const result = isValidPassword(password);
expect(result).toBe(true);
});

// with spaces
function isValidPassword(password) {
return password.length >= 6;
}
test('returns true for valid password length', () => {
const password = "g e ns";
const result = isValidPassword(password);
expect(result).toBe(true);
});



// positive - with word
function containsWord(sentence, word) {
return sentence.includes(word);
}
test("checks if sentence contains word",()=>{
    const sentence = "My name is Mailisha";
    const result=containsWord(sentence, "Mailisha");
    expect (result).toBe(true);
})
//negative -without the word
function containsWord(sentence, word) {
return sentence.includes(word);
}
test("checks if sentence contains word",()=>{
    const sentence = "My name is Juliet";
    const result=containsWord(sentence, "Mailisha");
    expect (result).toBe(false);
})

//edge case - with different case
function containsWord(sentence, word) {
return sentence.includes(word);
}
test("checks if sentence contains word",()=>{
    const sentence = "My name is Mailisha";
    const result=containsWord(sentence, "mailisha");
    expect (result).toBe(false);
})

//boundary - one letter more
function containsWord(sentence, word) {
return sentence.includes(word);
}
test("checks if sentence contains word",()=>{
    const sentence = "My name is Mailisha";
    const result=containsWord(sentence, "Mailishad");
    expect (result).toBe(false);
})
//special character
function containsWord(sentence, word) {
return sentence.includes(word);
}
test("checks if sentence contains word",()=>{
    const sentence = "My name is Juliet.";
    const result=containsWord(sentence, "Juliet");
    expect (result).toBe(true);
})

//positive
function addItem(arr, item) {
arr.push(item);
return arr;
}
test("adds item to array",()=>{
    const arr=[1,2,3,4];
    const result=addItem(arr, 5);
    expect (result).toEqual([1,2,3,4,5]);
})
//negative
function addItem(arr, item) {
arr.push(item);
return arr;
}
test('removes item from array', () => {
const arr = [1,2,3,4,5];
const result = removeItem(arr,3);
expect(result).toEqual([1,2,4,5]);
});
//edge- case
function addItem(arr, item) {
arr.push(item);
return arr;
}
test("adds item to array",()=>{
    const arr=[1,2,3,4];
    const result=addItem(arr, "Juliet");
    expect (result).toEqual([1,2,3,4,"Juliet"]);
})
//boundary 
function addItem(arr, item) {
arr.push(item);
return arr;
}
test("adds item to array",()=>{
    const arr=[];
    const result=addItem(arr, 5);
    expect (result).toEqual([5]);
})
//positive 
function addItem(arr, item) {
arr.push(item);
return arr;
}
test("adds item to array",()=>{
    const arr=[1,2,3,4 ];
    const result=addItem(arr, [5,6]);
    expect (result).toEqual([1,2,3,4,[5,6]]);
})
