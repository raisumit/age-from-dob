const dateForm = document.getElementById('dateForm');
const userAge = {};
dateForm.addEventListener('submit',function(e){
 e.preventDefault();
 if(e.currentTarget.elements.dateInput.value !=''){
  console.log(e.currentTarget.elements.dateInput.value);
  caculateAge(e.currentTarget.elements.dateInput.value);
 }else{

 }
});

function caculateAge(dob){
 const currentDate = new Date();
 const currentYear = currentDate.getFullYear();
 const currentMonth = currentDate.getMonth();
 const currentDay = currentDate.getDate();

 const birthDate = new Date(dob);
 const birthYear = birthDate.getFullYear();
 const birthMonth = birthDate.getMonth();
 const birthDay = birthDate.getDate();

 userAge.years = currentYear - birthYear;

 if(currentMonth > birthMonth){
  userAge.month = currentMonth - birthMonth;
  if(currentDay == birthDay){
   userAge.day = 0;
  }
  if(currentDay > birthDay){
   userAge.day = currentDay - birthDay
  }
  if(currentDay < birthDay){
   userAge.month = userAge.month - 1;
   userAge.day = (new Date(currentYear,currentMonth, currentDay) - new Date(birthYear,birthMonth,birthDay))/(1000*60*60*24)+1;
  }
 }
 if(currentMonth == birthMonth){
  //
  userAge.month = currentMonth - birthMonth;
  if(currentDay == birthDay){
   userAge.day = 0;
  }
  if(currentDay > birthDay){
   userAge.day = currentDay - birthDay;
  }
  if(currentDay < birthDay){
    userAge.day = (new Date(currentYear,currentMonth, currentDay) - new Date(birthYear,birthMonth,birthDay))/(1000*60*60*24)+1;
  }
 }
 if(currentMonth < birthMonth){
  userAge.years = userAge.years - 1;
  userAge.month = 12 - (birthMonth - currentMonth);
  if(currentDay == birthDay){
   userAge.day = 0;
  }
  if(currentDay > birthDay){
   userAge.day = currentDay - birthDay;
  }
  if(currentDay < birthDay){
   userAge.month = userAge.month - 1;
   userAge.day = (new Date(currentYear,currentMonth, currentDay) - new Date(birthYear,birthMonth,birthDay))/(1000*60*60*24)+1;
  }
 }
 document.querySelector('.years').innerHTML = userAge.years;
 document.querySelector('.months').innerHTML = userAge.month;
 document.querySelector('.days').innerHTML = userAge.day;
}