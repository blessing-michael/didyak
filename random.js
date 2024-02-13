const quotes=[{
    quote: `"yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy"`
}, {
    quote: `"kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"`
}, {
    quote: `"uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu"`
}, {
    quote: `"ccccccccccccccccccccccccccccccccccccccccccc"`
}, {
    quote: `"zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzppppppppppppppppppppppppppppppp"`
}]


let btn =document.querySelector('.btn')
let quote =document.querySelector(".quote")

btn.addEventListener("click", function(){
    let random = Math.floor(Math.random()* quotes.length);
    quote.innerHTML= quotes[random].quote
})