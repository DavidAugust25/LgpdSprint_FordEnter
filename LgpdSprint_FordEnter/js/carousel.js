

// carrossel

// classe matriz de armazenamento 
let carouselArr = [];

// classe carrossel
class Carousel {

    constructor(imagem, titulo, link) {
        this.image = imagem;
        this.title = titulo;
        this.url = link;
    }  

        static Start(arr){
        if(arr && arr.length > 0){
            Carousel._sequence = 0;
            Carousel._size = arr.length;
            Carousel.Render(); // Mostrar o primeiro slide imediatamente
            Carousel.ResetTimer();
        } else {
            throw "Método necessita de uma Variável pro Conjunto válido.";
        }
    }

    static Render() {
        let carouselItem = carouselArr[Carousel._sequence];
        let imagemdiv = document.getElementById("carousel");
        let titulodiv = document.getElementById("carousel-title");

        if (!imagemdiv || !titulodiv) return; // Segurança caso a DOM não esteja pronta

        imagemdiv.style.backgroundImage = `url('img/${carouselItem.image}')`;
        imagemdiv.style.backgroundSize = "cover";
        imagemdiv.style.backgroundPosition = "center";
        imagemdiv.style.transition = "all .8s ease-in-out";
        imagemdiv.innerHTML = `<a href="${carouselItem.url}" style="display:block; width:100%; height:100%;"></a>`;

        titulodiv.innerHTML = `<a href="${carouselItem.url}">${carouselItem.title}</a>`;
    }

    static Next(){
        Carousel._sequence++;
        if (Carousel._sequence >= Carousel._size) {
            Carousel._sequence = 0;
        }
        Carousel.Render();
    }

    static ResetTimer() {
        clearInterval(Carousel._interval);
        Carousel._interval = setInterval(function(){ Carousel.Next(); }, 8000);
    }

    static nextSlide() {
        Carousel.Next();
        Carousel.ResetTimer();
    }

    static prevSlide() {
        Carousel._sequence--;
        if (Carousel._sequence < 0) {
            Carousel._sequence = Carousel._size - 1; 
        }
        Carousel.Render();
        Carousel.ResetTimer(); 
    }
};

