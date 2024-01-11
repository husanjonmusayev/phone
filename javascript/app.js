let search = document.getElementById('search')
let submit = document.getElementById('submit')
let type = document.getElementById('type')
let color = document.getElementById('color')
let minSum = document.getElementById('minSum')
let maxSum = document.getElementById('maxSum')
let creat = document.querySelector('.creat')

let data = JSON.parse(localStorage.getItem('card'))

function showcard(){
    creat.innerHTML = ''
    data.forEach(element => {
       creat.innerHTML += `
       <div class="card">
       <img src="${URL.createObjectURL(element.file[0])}" alt="">
       <div class="list">
           <h4>${element.type}</h4>
           <h4>${element.sum}</h4>
       </div>
       <div class="list">
       <h5>${element.color}</h5>
       <h5>${element.parse}</h5>
       </div>
       <p>${element.desc}</p>
   </div>
       ` 
    });
}

showcard()