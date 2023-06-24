var menu = document.getElementById('nav');
var menuHeight = menu.offsetHeight; 
window.addEventListener('scroll', function() {
  if (window.pageYOffset > menuHeight) {
    menu.classList.add('sticky'); 
  } else {
    menu.classList.remove('sticky'); 
  }
});
