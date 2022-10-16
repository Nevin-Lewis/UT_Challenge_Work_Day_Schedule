$("#currentDay").append(moment().format("dddd, MMMM Do"))
var hours = ["07:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM","12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"];
var events = [] 
localStorage.getItem("event", JSON.stringify(events));

for (let i = 0; i<12; i++){
    $(".container").append("<section class=row> <aside class=hour> </aside > <textarea name=tasks> </textarea> <button class= saveBtn> <i class='fa fa-save fa-2x'> </i></button</section>");
    $("aside").eq(i).append(hours[i]);};


function init(){
    $("aside").each(function(index) {
    const date1 = new Date (moment().format('MM/DD/YY') + document.getElementsByClassName("hour")[index].textContent);
    var today = new Date (moment().format('LLL'));
    if (date1.getHours() < today.getHours()) {
        $("textarea").eq(index).addClass("past")}
    else if (date1.getHours() == today.getHours()){
        $("textarea").eq(index).removeClass("past").addClass("present")}
    else {
        $("textarea").eq(index).removeClass("present").addClass("future")
        }})};
    if (JSON.parse(localStorage.getItem("event")) != null){
    events = JSON.parse(localStorage.getItem("event"))
    $("textarea").each(function(index){
    $("textarea[name='tasks']").eq(index).html(events[index]);})}

$("button").each(function(index){
    $("button").eq(index).click(function(){
    events[index] = $("textarea[name='tasks']").eq(index).val();
    localStorage.setItem("event", JSON.stringify(events))})
});
init();