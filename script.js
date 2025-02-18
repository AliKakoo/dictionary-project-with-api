const $ = document

const resultElem = $.getElementById("result");
const btn = $.getElementById('search-btn')
const input = $.getElementById("inp-word");
const audio = $.getElementById("sound");

const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

btn.addEventListener('click', ()=>{
    let inputWord = input.value

    fetch(`${url}${inputWord}`)
    .then(res =>res.json())
    .then(data => console.log(data))

    
   
})