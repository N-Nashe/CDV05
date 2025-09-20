// Simple auto-scroll tour for Munashe's Portfolio

function startTour() {
    const sections = ['#about', '#projects', '#contact'];
    let index = 0;
    
    function scrollNext() {
        if (index < sections.length) {
            document.querySelector(sections[index]).scrollIntoView({ behavior: 'smooth' });
            index++;
            setTimeout(scrollNext, 3000);
        }
    }
    
    scrollNext();
}
