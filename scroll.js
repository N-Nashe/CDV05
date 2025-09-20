// Simple auto-scroll tour for My Portfolio

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

// Close website functionality for "Nah" button
function closeWebsite() {
    // Add fade out effect
    document.body.style.transition = "opacity 0.5s ease";
    document.body.style.opacity = "0";
    
    // After fade out, show "closed" message
    setTimeout(() => {
        document.body.innerHTML = `
            <div style="
                text-align: center; 
                padding: 100px 20px; 
                font-family: Arial, sans-serif;
                background: linear-gradient(135deg, #667eea 0%, #3db68bff 100%);
                color: white;
                min-height: 100vh;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            ">
                <h1 style="font-size: 3rem; margin-bottom: 20px;">🖐🏾 Website Closed!</h1>
                <p style="font-size: 1.2rem; margin-bottom: 30px;">Thanks for considering My Portfolio!</p>
                <p style="font-size: 1rem; margin-bottom: 40px; opacity: 0.8;"></p>
                <button onclick="location.reload()" style="
                    background: white;
                    color: #37be95ff;
                    border: none;
                    padding: 15px 30px;
                    font-size: 1.1rem;
                    border-radius: 50px;
                    cursor: pointer;
                    font-weight: bold;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
                    transition: transform 0.2s ease;
                " onmouseover="this.style.transform='scale(1.05)'" 
                   onmouseout="this.style.transform='scale(1)'">
                    Let's go back! 👀
                </button>
            </div>
        `;
        document.body.style.opacity = "1";
    }, 500);
}
    


