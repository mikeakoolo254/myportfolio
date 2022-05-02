

console.log("it's working")

let themeDots = document.getElementsById('theme-dot')

for(var i=0; themeDots.length > i; i++){
    themeDots[i].addEventListener('click',function(){
       console.log('Option clicked')
    })
}