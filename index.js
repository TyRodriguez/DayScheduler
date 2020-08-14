//rendor todays date and time - CHECK
//rendor schedule layout dynamically - CHECK
//allow user changes to textarea to be made. - CHECK
//when save button clicked - update DOM - check
//update time-block color based on if now time -check

$(document).ready(function () {
  let date = moment().format("MMMM Do YYYY, h:mm a");
  const today = $("#currentDay");
  // let t = moment().calendar();
  today.append(date);
  // console.log(m);
  // console.log(t);

  let now =moment().format("HH")

  const schedule = $(".container");
  const workhours = 18
  
    for(var i = 9;i<workhours;i++){
      const timeBlock = $("<div>").addClass("time-block row");
      // const row = $("<div>").addClass("row");
      const hour = $("<div>").addClass("hour col-1 col col-xs-2")
      const textArea = $("<textarea>").addClass("description col-10 col-xs-10").attr("data-value", i).append("TEST")
      const button = $("<button>").addClass("saveBtn col-1 col-xs-12").append("<i class='fas fa-save'>")
      schedule.append(timeBlock);
     timeBlock.append(hour,textArea,button)
    //  let timestamp = i
    hour.append(i+":00")

     if(now > i){
      timeBlock.addClass("past");
      }
      else if(now == i){
      timeBlock.addClass("present");
      }
      else if(now < i){
      timeBlock.addClass("future");
      }
      else if(now >= 19){
      timeBlock.addClass("past");
      }
      let item = "value" + i;
      let items = localStorage.getItem(item);
      textArea.val(items);  

      if (i>12){
        hour.text(i-12+":00")
      }
    }

  let saveBtn = $(".saveBtn");
  saveBtn.on("click", e => {
    let todo = $(this).prev()
    let todos = todo.val();
    let item = "value"+todo.attr("data-value")
    localStorage.setItem(item,todos)
  });

 

  // let time = moment().format("LT");
  //       let test1 = moment().hour()
  //       let test2 = moment().get('hour');
  //       console.log(test2)
  // checkTime = () => {
  //   let time = moment().format("LT");
  //   console.log(time);
  //   workhours.forEach(workhour => {
  //     const eachHour = $(".hour").text();

  //     // console.log(eachHour)
  //   });
  // };
  // checkTime();
});
