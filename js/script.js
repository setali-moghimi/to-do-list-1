let inp=document.querySelector('.m-auto')
let ul = document.querySelector('.todos')
let li=document.querySelectorAll('.fa')
inp.addEventListener('keydown',function(event){
    if(event.code=='Enter'){
        event.preventDefault()
        if(inp.value!=''){

            ul.innerHTML+='<li class="list-group-item d-flex justify-content-between align-items-center">'
            +'<span>'+inp.value+'</span>'+
            '<i class="fa fa-trash-o delete"></i>'
            +'</li>'
            inp.value=''
        }
        li=document.querySelectorAll('.fa')
        console.log(li);
        li.forEach(function(n){
            console.log(n);
            n.addEventListener('click',function(){
                n.parentElement.remove()
            })
        })
    }
})
li.forEach(function(n){
    console.log(n);
    n.addEventListener('click',function(){
        n.parentElement.remove()
    })
})