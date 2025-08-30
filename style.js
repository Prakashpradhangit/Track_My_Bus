var burger=document.querySelector('.burger')
var nav=document.querySelector('.nav-links')

const navSlide = () =>{
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');

    })    
}
navSlide();

// set key and value to local storage
//TODO: change to seassion staorage
var f,t;
document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('select-from')
    .addEventListener('input', handleSelectFrom);

    document.getElementById('select-to')
    .addEventListener('input', handleSelectTo)

    document.getElementById('search')
    .addEventListener('click', ()=>{
        
        //set location in local storage

         localStorage.setItem('From',f)
         localStorage.setItem('To',t)
       
       
    })
})

function  handleSelectFrom(){
    let select = document.getElementById('select-from')
    f = select.value;
   
}

function  handleSelectTo(){
    let select = document.getElementById('select-to')
    t  = select.value;
    
}

//TODO: page reload and set data to null

window.addEventListener( "pageshow", function ( event ) {
  var historyTraversal = event.persisted || ( typeof window.performance != "undefined" && window.performance.navigation.type === 2 );
  if ( historyTraversal ) {
    window.location.reload();
  }
});
