function rec1() {
  document.getElementById("rec1").classList.add("show");
//  console.log(document.getElementById("").classList);
//  document.getElementById("rec").classList.remove('show');
}
function rec2(){
  document.getElementById("rec2").classList.add("show");
}
function rec3(){
  document.getElementById("rec3").classList.add("show");
}
function rec4(){
  document.getElementById("rec4").classList.add("show");
}


// Close the dropdown if the user clicks outside of it
 window.onclick = function(event) {
  if (!event.target.matches('.dropbtn') && !event.target.matches('.butao') ) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var menu = document.getElementById("menu");
    // var i;
    for (var i = 0; i < dropdowns.length || i < menu.length; i++) {
      console.log("então");
       var openDropdown = dropdowns[i];
       var openmenu = menu[i];
       if (dropdowns[i].classList.contains('show') || menu.classList.contains('show')) {
        console.log(dropdowns.classList)
        dropdowns[i].classList.remove("show");
        document.getElementById("menu").classList.remove('show');
      }
    }
 
  }
}
