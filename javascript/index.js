let type = document.querySelector('#type')
let color = document.getElementById('color')
let sum = document.getElementById('sum')
let pres = document.getElementById('pres')
let desc = document.getElementById('desc')
let img = document.querySelector('.img')
let file = document.getElementById('file')
let btn = document.getElementById('btn')
let form = document.getElementById('form')

img.addEventListener('click', function(){
    file.click()
})

function validate(){
    if(!file.value){
        img.style.borderColor = 'red'
        return false
    } else{
    img.style.borderColor = 'teal'
    }
    return true
}
let data = JSON.parse(localStorage.getItem('card'))
?JSON.parse(localStorage.getItem('card'))
:[]

btn && btn.addEventListener('click', function(){
validate()
if(validate()){
    let list = {
        file : file.files,
        type : type.value,
        color : color.value,
        sum : sum.value,
        pres : pres.value,
        desc : desc.value,
    }
    data.push(list)
}
console.log(data);
localStorage.setItem('card', JSON.stringify(data))
})