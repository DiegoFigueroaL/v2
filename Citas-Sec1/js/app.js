(function(){
    const quotes = [
        {
            cita: "El fútbol es como el ajedrez, pero sin dados.",
            autor: "Lukas Podolski"
        },
        {
            cita: "Siento que estoy cantando como Freddie Mercury.",
            autor: "Lucho Jara"
        },
        {
            cita: "Me enteré por la prensa.",
            autor: "Michelle Bachelet"
        },
        {
            cita: "Cabros, esto no prendió.",
            autor: "Clemente Pérez"
        }
    ];
    const btn = document.getElementById("generate-btn")

    btn.addEventListener("click",function(){
        let random = Math.floor(Math.random() * quotes.length);
        document.getElementById("quote").textContent = quotes[random].cita
        document.querySelector('.author').textContent = quotes[random].autor

    })
})();

