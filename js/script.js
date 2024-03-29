// dir
var bodyDir = $('body').css('direction')
var dirAr
if(bodyDir == "rtl"){
  dirAr= true
}
else{
  dirAr = false
}



const search = document.querySelector('.form-control');
const btn = document.querySelector('.search-btn');
btn.addEventListener('click' , ()=>{search.classList.toggle('active')})


// ==== navbar toggler ======
let open_nav = $('#open_menu');
let close_nav = $('#close_menu');
let nav = $('.navbar-collapse')

open_nav.click(function () {
    nav.addClass("active");
})

close_nav.click(function () {
    nav.removeClass("active");
});

$(document).on('click' , (e)=>{
  !$(e.target).closest('.navbar').length ? nav.removeClass("active") : '';
})



////////////////////// profile photo change ///////////////////////////


let files = $('.file');
let photos = $('.photo');

if (files.length > 0) {
  files.each((index, file) => {
    $(file).change(() => {
      let choosedFile = file.files[0];
      if (choosedFile) {
        let reader = new FileReader();
        reader.onload = () => {
          photos.eq(index).attr('src', reader.result);
        };
        reader.readAsDataURL(choosedFile);
      }
    });
  });
}


/*============= personal information ==============*/

let profile_photo = document.getElementById('profile-photo');
let photo = document.getElementById('photo');
let file = document.getElementById('file');
let camera_btn = document.getElementById('camera')
let confirm_btn = document.getElementById('accept')

if( file !=null){

  file.onchange = ()=>{
    confirm_btn.style.display = 'flex';
    let choosedFile = file.files[0];
    if(choosedFile){
      let reader = new FileReader();
      reader.onload = ()=>{
        photo.setAttribute('src' , reader.result);
      }
      reader.readAsDataURL(choosedFile);
    }
  }
}

// file.addEventListener("mouseover" , ()=>{
//   $('.add-img').addClass('active')
// })
// file.addEventListener("mouseout" , ()=>{
//   $('.add-img').removeClass('active')
// })

if(file != null){
  camera_btn.onclick = ()=>{
    file.click();
  }

}


/* ============ single=blog page ============= */

let nav_link = document.querySelectorAll('.nav-link');

nav_link.forEach((link) => {
    link.addEventListener('click', () => {
        nav_link.forEach((link) => {
            link.classList.remove('active');
        })
        link.classList.add('active')
    })
})

let nav_links = document.querySelectorAll('.blog .nav-link');
let content_sections = document.querySelectorAll('.blog .content');


change_active = ()=>{

    let height = window.scrollY ;

    content_sections.forEach((section , i)=>{
console.log(section.offsetTop);
        if(height >= section.offsetTop - section.offsetHeight * 0.25 ){
            nav_links.forEach((link)=>{
                link.classList.remove('active');
            })
            nav_links[i].classList.add('active');
        }
        
    })

}

window.addEventListener('scroll', change_active);

/*===============================================*/


  $(document).ready(function() {
    $('select').niceSelect();
  });


/*==================================================*/



const inputElements = [...document.querySelectorAll('input.code')]
    
    inputElements.forEach((ele,index)=>{
      ele.addEventListener('keydown',(e)=>{
        // if the keycode is backspace & the current field is empty
        // focus the input before the current. Then the event happens
        // which will clear the "before" input box.
        if(e.keyCode === 8 && e.target.value==='') inputElements[Math.max(0,index-1)].focus()
      })
      ele.addEventListener('input',(e)=>{
          inputElements[index].focus()
        const [first,...rest] = e.target.value
        e.target.value = first ?? '' // first will be undefined when backspace was entered, so set the input to ""
        const lastInputBox = index===inputElements.length-1
        const didInsertContent = first!==undefined
        if(didInsertContent && !lastInputBox) {
          // continue to input the rest of the string
          inputElements[index+1].focus()
          inputElements[index+1].value = rest.join('')
          inputElements[index+1].dispatchEvent(new Event('input'))
        }
      })
    })
    
    
    // mini example on how to pull the data on submit of the form
    function onSubmit(e){
      e.preventDefault()
      const code = inputElements.map(({value})=>value).join('')
      console.log(code)
    }




// loader
$('#loading').fadeOut(500);

new WOW().init();