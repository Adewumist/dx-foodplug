
//ESS

// console.log('send me your account number')
// alert(writeup)
// var writeup ='I am hungry'

// console.log(harmburgerdiv)
// console.log(document)

var harmburgerdiv = document.querySelector('.harmburger')
var mobilelinks = document.querySelector('.mobile-links-holder')
var mybackdrop = document.querySelector('.backdrop')



function dosomething(){
    harmburgerdiv.classList.toggle('showburger')
    
    mobilelinks.classList.toggle('show-mobile-links-holder')
  mybackdrop.classList.toggle('show-backdrop')

}