const bar=document.getElementById("bar");
const nav=document.getElementById("navbar");
if(bar){
    bar.addEventListener("click",()=>{
        nav.classList.add("active");
    })
}
document.getElementById("fe1").addEventListener("click",function(){
    window.open("cart.html","_self")
})
document.getElementById("fe2").addEventListener("click",function(){
    window.open("shop.html","_self")
})
document.getElementById("fe3").addEventListener("click",function(){
    window.open("contact.html","_self")
})
function open2(){
    window.open("shop.html","_self")
}
document.getElementById("banner").addEventListener("click",function(){
    window.open("shop.html","_self")
})
function open3(){
    window.open("enter.html","_self")
}
document.getElementById("open4").addEventListener("click",function(){
    alert("Üye Kaydınız Başarıyla Yapıldı")
})

function tikla(){
    let text=document.getElementById('td1').innerHTML;
    text="139";
}
function tikla2(){
    window.open("index2.html","_self")
}