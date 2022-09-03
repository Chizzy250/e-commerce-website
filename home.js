//Carousel or Image Slider
(function () {
  const pics = [
    "slider-0.jpg",
    "slider-1.jpg",
    "slider-2.jpg",
    "slider-3.jpg",
    "slider-4.jpg",
    ];
    
const left = document.querySelector('#btn-left')
const right = document.querySelector('#btn-right')
const slider = document.querySelector('#slider')
    
  let count = 0; 
  
  left.addEventListener("click", function () {
    if (count !== 0) {
      count -= 1
    }else {
      count = 0
    }
    slider.style.backgroundImage = `url('./img/${pics[count]}')`
  })
    
    right.addEventListener("click", function () {
      if (count === pics.length -1) {
        count = 0
      }else {
        count += 1
      }
slider.style.backgroundImage = `url('./img/${pics[count]}')`
    })
})()



//sidebar 
const menuBtn = document.querySelector('.menu-btn-container');
const menuList = document.querySelector('.menu-list');
let menuOpen = false;

menuBtn.addEventListener('click', ()=>{
  menuBtn.classList.toggle('open');
  menuList.classList.toggle('open');
/*   if(!menuOpen){
    menuBtn.classList.add('open');
    menuOpen=true;
  } else{
    menuBtn.classList.remove('open');
    menuOpen=false;
  }; */
});

//Exit 
function exit() {
 return "Are you sure you want to exit?"
}


let button = document.getElementById("btn");

button.addEventListener('click', () => {
  let forminfo = {
    fname: document.getElementById('first-name').value,
    lname: document.getElementById('surname').value,
    email: document.getElementById('email').value,
    pswrd: document.getElementById('password').value 
  };
  dispData(forminfo);
});
                    
function dispData(forminfo) {
  if(forminfo) {
    var results = document.getElementById('results');
    results.innerHTML = `<label for>First Name</label>
                                <input type="text" value=${forminfo.first-name}>
                          <br>
                                <label for>Last Name</label>
                                <input type ="text" value =${forminfo.surname}>
                            <br>
                            
                                <label for>Email</label>
                                <input type="text" value =${forminfo.email}>
                            
                            <br>
                                <label for>Password</label>
                                <input type="text" value =${forminfo.password}>`;  
    }
}