let date, hour, minute, second;

setInterval(()=>{
    date= new Date();
    hour=date.getHours();
    minute=date.getMinutes();
    second=date.getSeconds();
    second=6*second;
    hour=hour%12;
    hour=30*hour+minute/2;
    minute=6*minute;
    console.log(hour);
    hours.style.transform=`rotate(${hour}deg)`
    minutes.style.transform=`rotate(${minute}deg)`;
    seconds.style.transform=`rotate(${second}deg)`;
}, 1000)