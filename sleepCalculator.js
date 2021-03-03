const getSleepHours = day => {
  if (day === "monday"){
    return 8;
  } else if (day === "tuesday") {
    return 5;
  } else if (day === "wednesday") {
    return 9;
  } else if (day === "thursday") {
    return 6;
  } else if (day === "friday") {
    return 7;
  } else if (day === "saturday") {
    return 10;
  } else if (day === "sunday") {
    return 9
  }
};

console.log(getSleepHours("friday"));

const getActualSleepHours = () => 
  getSleepHours("monday")  +
  getSleepHours("tuesday") + 
  getSleepHours("wednesday") +
  getSleepHours("thursday")+  
  getSleepHours("friday") +  
  getSleepHours("saturday") +  
  getSleepHours("sunday");


console.log(getActualSleepHours());

const getIdealSleepHours = () => {
  const idealHours = 8;
  return (idealHours*7);
};

console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
 
  if (actualSleepHours === idealSleepHours){
    console.log("you got the perfect amount of sleep");
  } else if (actualSleepHours > idealSleepHours){
    console.log("You got " + (idealSleepHours - actualSleepHours) + " more  hours sleep than you needed");
  } else if (actualSleepHours < idealSleepHours) {
    console.log("You need to get " + (idealSleepHours - actualSleepHours) + " hours more rest each night");
  }
};

calculateSleepDebt()

