/* ---------------------------------------------------------------------------------------------------------
   變數、常數與命名:

--------------------------------------------------------------------------------------------------------- */

/* const:
   在JavaScript語言中，常數指是的"不能再次指定值"(not re-assigned)，而不是"完全無法改變值"(immutable)，這兩個是有差異的概念。
   在之後的內容中會說明，物件類型的常數內容屬性是可以改變的，而在這個情況下常數會是一個常數指標。
   基本上，JavaScript語言中並沒有immutable(不可改變的)的特性。
   因此，通常在程式碼撰寫中，我們使用const的情況會遠比let頻率高很多。
   除非你很確定這個變數等會在程式碼中其他部份會需要被改變，或是它是一個在類別定義裡的變數，不然就用const就對了，如果發生定義上的問題，除錯主控台或檢測工具會提醒你。
*/
// 這個a是不可變的(常數)
const a = 10
// 這行程式碼會發生錯誤: "a" is read-only(只能讀不能寫)
a = 11

/* let: */
// 這個b是可變的(變數)
let b = 5
// b可以再改變其中的值
b = 6

/*
*/

/* 宣告方式:
   1. 一行宣告一個變數或常數。
   2. 少用簡寫或自己發明縮寫。 ex、 不好的命名: setBgColor / 好的命合: setBackgroundColor
   3. 語意不明或對象不明。 ex、不好的命名: insert() 這是要插入什麼？/ 好的命名: insertDiv()
   4. 陣列之類的集合結構，有數量很多的意思，大部份都用"複數"型態的字詞，或者資料的類型來分別。 例如 studentArray 或 students
   [註]ES5以前都只會用 "var" 作為標記，它是 Variable 的縮寫。"let"與 "const"是ES6的新加入特性，你應該開始使用它們。
*/
//不好的宣告方式
const items = getItems(),
    goSportsTeam = true,
    dragonball = 'z';

//好的宣告方式
const items = getItems()
const goSportsTeam = true
const dragonball = 'z'

/* 變數、函式、類別命名:
   變數與函式，都用小駝峰式(camelCase)的命名。
   類別用巴斯卡(PascalCase)或大駝峰式命名法(CamelCase)命名。
*/
let numberOfStudents
const numberOfLegs
function setBackgroundColor()
class Student{}
