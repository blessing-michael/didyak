const quotes=[{
    quote: `"Family is where life begins"`
}, {
    quote: `"Love begins in our home by praying together"`
}, {
    quote: `"Even if you are flawed like all humans are, you are still flawless in my eyes, and that is all that matters."`
}]


let btn =document.querySelector('.btn')
let quote =document.querySelector(".quote")

btn.addEventListener("click", function(){
    let random = Math.floor(Math.random()* quotes.length);
    quote.innerHTML= quotes[random].quote
})