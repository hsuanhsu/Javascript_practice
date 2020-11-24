/* ---------------------------------------------------------------------------------------------------------
   輸出:
   不論是innerHTML、alert、createTextNode、document.write，
   因為輸出到網頁上的HTML碼中，所以必定會轉變為字串值。
   也就是不論這轉出的值原本是數字的2進位、8進位、16進位，就會變成10進位，而其他的類型的值也會自動轉成字串值。
   在開發時並不會用這樣的輸出方式，所以還是只有console.log這方式可用。
--------------------------------------------------------------------------------------------------------- */

/* console.log: */
console.log('在瀏覽器的除錯主控台中輸出')

/* alert:
   除非你真的有需要在如Internet Explorer6、7上作相容性的測試或開發，
   不然這個alert可以略過不要用，它有很多缺點，建議不要再使用它。
*/
window.alert('在警告視窗輸出')
alert('在警告視窗輸出(寫法2)')

/* document.write:
   它同樣不是一個好方法，也是一個存在已久的輸出方法。
   表面上雖然看起來就這樣用，但實際上並不是那麼簡單。它只建議用在測試時，真正使用上千萬不要使用。
   document相當於window.document，它是在window物件下的內容物件。
*/
document.write('在HTML上輸出')

/* innerHTML:
   這個方式是推薦的輸出方式，也是現今很多JavaScript函式庫用來輸出結果的方式。
   <div id="demo"></div>
*/
// 此行必須寫在<div>之後
document.getElementById("demo").innerHTML = '推薦此方法在HTML上輸出'

/* createTextNode:
   createTextNode是一個document物件中的方法，看它的名稱就知道用途是"建立文字的節點"。
   不過你要建立節點需要與其他的方法搭配才行，不是獨立使用的方法。
   其中的demo2要求是HTML中已經存在的DOM節點。
   不過，這個方法比innerHTML複雜些，而且效能更低，只會用在特別的情況，例如有需要作節點的處理時。
   <div id="demo2"></div>
*/
const newText = document.createTextNode('安安你好')
const demo2 = document.getElementById("demo2")
demo2.appendChild(newText)
