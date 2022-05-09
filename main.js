function startTime() {
    const today = new Date();
    let year = today.getUTCFullYear();
    let month = today.getUTCMonth()+1;
    let date = today.getUTCDate();
    let h = today.getUTCHours();
    let m = today.getUTCMinutes();
    let s = today.getUTCSeconds();
    month = checkTime(month)
    date = checkTime(date);
    h = checkTime(h)
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt2').innerHTML =  year+""+month+""+date+""+h+""+m+""+s;
  
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }