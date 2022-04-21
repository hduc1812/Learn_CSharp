$(function(){

    //Sticky Navbar
    var stickyNavTop = $('#navbar').offset().top;

    $(window).scroll(function () {
        if ($(this).scrollTop() > stickyNavTop) {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        }
    });
    
    // Tab Menu 
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#left').css({"top": "30px", "padding-top": "17px"});
        } else {
            $('#left').css({"top": "100px", "padding-top": "20px"});
        }
    });

});

//Search Menu
function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenu");
    li = ul.getElementsByTagName("li");
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
}