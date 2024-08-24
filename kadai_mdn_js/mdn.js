// 今日の日付を取得
const today = new Date();

// 年、月、日を取得
const year = today.getFullYear();
const month = today.getMonth() + 1; 
const day = today.getDate();

// 指定された形式で日付を表示
const formattedDate = `${2023}年${8}月${22}日`;

// console.logで表示
console.log(formattedDate);
