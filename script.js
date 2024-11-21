function atualizarContador() {
    const dataInicial = new Date('2024-05-26'); // Data de início da contagem
    const agora = new Date();
    const diferencaMs = agora - dataInicial;

    const segundos = Math.floor(diferencaMs / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);
    const anos = Math.floor(dias / 365);

    // document.getElementById('anos').textContent = anos;
    document.getElementById('dias').textContent = dias % 365;
    document.getElementById('horas').textContent = horas % 24;
    document.getElementById('minutos').textContent = minutos % 60;
    document.getElementById('segundos').textContent = segundos % 60;
}

// Atualiza o contador a cada segundo
setInterval(atualizarContador, 1000);


// Daqui pra baixo é sobre o carrosel de imagens
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); // Muda a imagem a cada 2 segundos
}