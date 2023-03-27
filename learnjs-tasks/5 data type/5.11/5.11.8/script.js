"use script";

function formatDate(date) { 
  let now = new Date();

  let diff = Math.round((now - date) / 1000);
  
    if (diff < 1) {
      return "прямо сейчас";
    } else if (diff < 60) {
      return `${diff} сек. назад`;
    } else if (diff < 3600) {
      return `${Math.round(diff / 60)} n сек. назад`;
    }
    else { 
      return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
    }
}
  
console.log(formatDate(2023, 2, 27));
