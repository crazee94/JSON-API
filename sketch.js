function setup(){
  getGreeting();
}


async function getGreeting(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
 
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11, 13);
    //console.log(hour);
 
    if (hour >= 06 && hour <= 18) {
      text("Good Day", 200,200)
    } else {
        text("Good Evening", 200,200)
    }
 
    //backgroundImg = loadImage(bg);
    //console.log(backgroundImg);
 }