// Data Creation
var translations = {
    'title': { 'pt': 'MORINEL', 'en': 'MORINEL' },
    'info': { 'pt': 'Info', 'en': 'Info' },
    'work': { 'pt': 'Trabalho', 'en': 'Work' },
    'contact': { 'pt': 'Contato', 'en': 'Contact' },
    'consultancy': { 'pt': 'CONSULTORIA E DESIGN MORINEL', 'en': 'MORINEL DESIGN CONSULTANCY' },
    'transform': { 'pt': 'Posso trasformar o design da sua empresa.', 'en': 'I can transform your company\'s design.' },
    'selected-projects': { 'pt': 'Projetos Selecionados', 'en': 'Selected Projects' },
};

// Function Definitions
function toggleMenu() {
    var overlay = document.querySelector("#colorOverlay");
    var menuButton = document.querySelector(".menu-button");
    var title = document.querySelector(".title");
    var header = document.querySelector(".header");
    var langButtons = document.querySelectorAll(".language-buttons button");
    
    if (!menuButton.classList.contains('expanded')) {
        gsap.to(overlay, {
            scale: 1,
            duration: 0.7,
            onComplete: function() {
                title.style.color = "#111111";  // changes title to black
                header.style.backgroundColor = "#f1f1f1";  // changes header to white
                menuButton.style.backgroundColor = "#111111";  // changes menuButton to black
                langButtons.forEach(button => button.style.color = "#111111");  // changes langButtons to black
            }
        });
        menuButton.classList.add('expanded');
    } else {
        gsap.to(overlay, {
            scale: 0,
            duration: 0.7,
            onComplete: function() {
                title.style.color = "#f1f1f1";  // changes title to white
                header.style.backgroundColor = "#111111";  // changes header to black
                menuButton.style.backgroundColor = "#f1f1f1";  // changes menuButton to white
                langButtons.forEach(button => button.style.color = "#f1f1f1");  // changes langButtons to white
            }
        });
        menuButton.classList.remove('expanded');
    }
}

function translatePage(language) {
    var elements = document.querySelectorAll('[data-translation-key]');
    elements.forEach(function(element) {
        var translationKey = element.getAttribute('data-translation-key');
        element.textContent = translations[translationKey][language];
    });
    $('.language-buttons button').removeClass('active');
    $(`.language-buttons button[data-language="${language}"]`).addClass('active');
}

// Initialization
$(document).ready(function() {
    $('.language-buttons button').click(function() {
        translatePage($(this).attr('data-language'));
    });
    translatePage('pt');
});