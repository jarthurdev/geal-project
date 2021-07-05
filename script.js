var nav = document.querySelector('#header nav')
var toggle = document.querySelectorAll('nav .toggle')

for(var element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}

var links = document.querySelectorAll('nav ul li a')

for(var link of links) {
    link.addEventListener('click', function() {
        nav.classList.remove('show')
    })
}