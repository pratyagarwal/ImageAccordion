const panels=document.querySelectorAll('.panel')
// console.log(panels[1])
panels.forEach((panel)=>{
  console.log(panel);
  panel.addEventListener('click',
  ()=>{
    removeActive()
    panel.classList.add('active')
  })
})

function removeActive(){
  panels.forEach((panel)=>{
    panel.classList.remove('active')
  })
}