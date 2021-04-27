//   原題目
/*
function setCookTime(cookMethod, food, time) {
  setTimeout(()=>{
    console.log('製作完成')
    return `${cookMethod}完美${food}`
  }, time)
  console.log('準備中')
}

function start() {
  let result = setCookTime('煮', '泡麵', 2000)
  console.log(result)
}

start()



  1、試著先執行以上的程式碼，會發現拿不到 setTimeout 回傳的值，想想看原因會是如何？

  2、試著改寫 start 和 setCookTime functions，當執行程式碼 2 秒後，會在 start function 裡取到 setTimeout 回傳的值，並 console 出來會依序印出以下結果 。

*/

// Answer1 _ CallBack

answer1 callback function

function setCookTime(cookMethod, food, time, getfood) {
  setTimeout(()=>{
    console.log('製作完成')
    getfood(`${cookMethod}完美${food}`) 
  }, time)
  console.log('準備中')
}

function start() {
  let result = setCookTime('煮', '泡麵', 2000, (result) => {

  })
  console.log(result)
}

start()
