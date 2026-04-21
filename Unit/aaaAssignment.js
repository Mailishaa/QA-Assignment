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

//less than 6 characters 
function isValidPassword(password) {
return password.length >= 6;
}
test('returns true for valid password length', () => {
const password = "green";
const result = isValidPassword(password);
expect(result).toBe(false);
});

// more than 6 characters
function isValidPassword(password) {
return password.length >= 6;
}
test('returns true for valid password length', () => {
const password = "greens1234";
const result = isValidPassword(password);
expect(result).toBe(true);
});

// empty 
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




function containsWord(sentence, word) {
return sentence.includes(word);

}
test("checks if sentence contains word")
function addItem(arr, item) {
arr.push(item);
return arr;
}
