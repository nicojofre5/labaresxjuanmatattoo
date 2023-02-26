document.querySelectorAll(".modal-container img").forEach(el=>{
    el.addEventListener("click",function(ev){
        this.parentNode.classList.add("active");
    })
});
