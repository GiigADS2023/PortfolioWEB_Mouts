document.getElementById("downloadBtn").addEventListener("click", function() {
    const link = document.createElement("a");
    link.href = "assets/documents/Giorgia Batista Schmidt - CV.pdf"; // Caminho para o seu currículo
    link.download = "Giorgia Batista Schmidt - CV.pdf"; // Nome do arquivo que será baixado
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Remove o link após o clique
});

document.addEventListener("DOMContentLoaded", function() {
    var typingEffect = new Typed(".typedText", {
        strings: ["Designer", "Programadora"],
        loop: true,
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 2000
    });
});
