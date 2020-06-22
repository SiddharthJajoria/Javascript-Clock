const minute=document.querySelector('.hand-min');
const hour=document.querySelector('.hand-hour');
const second=document.querySelector('.hand-sec');

function setTime(){
  //getting the time
  let seconds=(new Date()).getSeconds();
  let minutes=(new Date()).getMinutes();
  let hours=(new Date()).getHours();

  //setting the time in UI
  second.style.transform=`translateY(-50%) rotate(${-90+(seconds*6)}deg)`;
  minute.style.transform=`translateY(-50%) rotate(${-90+(minutes*6)}deg)`;
  hour.style.transform=`translateY(-50%) rotate(${-90+((hours-12)*30)}deg)`;
  console.log(seconds,minutes,hours);
  setTimeout(function () {
    setTime();
  }, 1000);



}
setTime();
