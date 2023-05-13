// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// $(document).ready(function(){
  const currentDate = dayjs().format("dddd, MMMM D");
  console.log(currentDate);

  var date= document.getElementById("currentDay");
  console.log(date)
  var text = document.createTextNode(currentDate);

  date.appendChild(text);

  dayjs().hour();
  console.log(dayjs().hour());

  var timeBlock = document.getElementsByClassName("time-block");
  console.log(timeBlock);

  for (let i = 0; i < timeBlock.length; i++) {
    //console.log(timeBlock[i].id)
    console.log()
    // if timeblock id is equal to current hour add present class
    if(timeBlock[i].id.split("-")[1] == dayjs().hour()) {
      timeBlock[i].classList.add('present')
    } 
    // else if timeblock id is greater than current hour, add future class
    else if(timeBlock[i].id.split("-")[1] > dayjs().hour()) {
      timeBlock[i].classList.add('future')
    } 
    // else if timeblock id is less than current hour, add past class
    else if(timeBlock[i].id.split("-")[1] < dayjs().hour()) {
      timeBlock[i].classList.add('past')
    }
  }


  //const currentDay = document.currentDay("").val("");

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

