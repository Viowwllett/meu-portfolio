document.querySelector("#btn-projeto").addEventListener("click", function(e){
    e.preventDefault();

    const destino = document.querySelector("#projetos");

    window.scrollTo({
        top: destino.offsetTop,
        behavior: "smooth"
    });
});