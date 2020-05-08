


//global variable
let ListContainer = document.querySelector("#navbar__list");
let sectionLen = document.getElementsByTagName('section').length;
let sections = document.getElementsByTagName('section')
 
//helper function
function isElementInView(el){
var rect = el.getBoundingClientRect();
return(
  rect.top >= 0 &&
  rect.left >= 0 &&
  rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
  rect.right <= (window.innerWidth || document.documentElement.clientWidth)
);


}

//element creation
for(let i = 1; i <= sectionLen; i++){
const listItem = document.createElement('li');
listItem.innerHTML = `<a href = ${'#section'+i} class = "menu__link">${'Section'+" " + i}</a>`;
ListContainer.appendChild(listItem);
}

//btn for topTOUp Btn 

const toggle = document.getElementById('toggle');
toggle.addEventListener('click', function(){
 window.scrollTo({
   top: 10,
   left: 0,
   behavior: "smooth",
 })
 console.log('clicked');
})

//main function
window.addEventListener('scroll', function(){
for(let i = 0; i < sectionLen; i++){
if(isElementInView(sections[i])){
  sections[i].classList.add('my-active-class');
  ListContainer.children[i].classList.add('my-active-menu');
  
}
if(!isElementInView(sections[i])){
  sections[i].classList.remove('my-active-class');
  ListContainer.children[i].classList.remove('my-active-menu');

}
}
});



