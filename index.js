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
/* 
   logic to calculate the no of day when the current day is less then users birth day
   as for this simply substracting currentday and birthday is not fesable take and e.g. 
   if the user is born on 31 jan and current day is 1 feb than substractin would result in 30 or -30
   which would be incorrect so here we would use a logic wehre we would first calculate
   total no of day in previous month (new Date('year', 'month',0).getDate()//this will give total no of day in that month)
   now we can substract users birth day from total no of days e.g 31 - 31 = 0 now we will add current day to this 
   to find how many day user have lived here we are concerned only for day not month that we will take care by other logic
   so 0 + 1 = 1 which is correct for the above example wehre user is borned on 31 jan and current day is 1
   he has lived one more day
   this below logic was used earlier but it has some edge case failure so we switch back to above long logic
   this is represented by this logic in the code below
(new Date(currentYear,currentMonth, currentDay) - new Date(birthYear,birthMonth,birthDay))/(1000*60*60*24);
   */
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
   let dayInPrevMonth = new Date(currentYear,currentMonth,0).getDate();
   userAge.day = (dayInPrevMonth - birthDay) + currentDay;
   // userAge.day = (new Date(currentYear,currentMonth, currentDay) - new Date(currentYear,currentMonth-1,birthDay))/(1000*60*60*24)+1;
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
   userAge.month = 11;
   if(currentMonth){
      let maxDayPrevMonth = new Date(currentYear,currentMonth,0).getDate();
      userAge.day = (maxDayPrevMonth - birthDay) + currentDay;
      
   }else{
      let maxDayPrevMonth = new Date(currentYear,12,0).getDate();
      userAge.day = (maxDayPrevMonth - birthDay) + currentDay;
   }
   //  userAge.day = (new Date(currentYear,currentMonth, currentDay) - new Date(currentYear,birthMonth,birthDay))/(1000*60*60*24)+1;
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
   if(currentMonth){
      let maxDayPrevMonth = new Date(currentYear,currentMonth,0).getDate();
      userAge.day = (maxDayPrevMonth - birthDay) + currentDay;
   }else{
      let maxDayPrevMonth = new Date(currentYear,12,0).getDate();
      userAge.day = (maxDayPrevMonth - birthDay) + currentDay;
   }
   //userAge.day = (new Date(currentYear,currentMonth, currentDay) - new Date(birthYear,birthMonth,birthDay))/(1000*60*60*24)+1;
  }
 }
 document.querySelector('.years').innerHTML = userAge.years;
 document.querySelector('.months').innerHTML = userAge.month;
 document.querySelector('.days').innerHTML = userAge.day;
}