// typing animation.
document.addEventListener('DOMContentLoaded', function() {
    const words = ['Cyber Security Enthusiast.', 'UI/UX Designer.', 'software engneer.'];
    const typewriter = document.getElementById('typewriter');
    let index = 0;

    function type() {
        typewriter.textContent = '';
        let word = words[index];
        let i = 0;
        const typingInterval = setInterval(() => {
            typewriter.textContent += word[i];
            i++;
            if (i === word.length) {
                clearInterval(typingInterval);
                setTimeout(erase, 2000);
            }
        }, 100);
    }

    function erase() {
        let word = words[index];
        let i = word.length - 1;
        const erasingInterval = setInterval(() => {
            word = word.substring(0, i);
            typewriter.textContent = word;
            i--;
            if (i === -1) {
                clearInterval(erasingInterval);
                index = (index + 1) % words.length;
                setTimeout(type, 500);
            }
        }, 100);
    }

    type();
// adding CV pdf to download.
    document.getElementById('download-cv').addEventListener('click', function() {
        const a = document.createElement('a');
        a.href = PDF_FILE_URL;
        a.setAttribute('download', '');
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
});

// function for the messaging.
document.getElementById("messageBtn").addEventListener("click", function() {
    window.location.href = "mailto:sm.amarhisham@gmail.com";
});

// smooth scroll for the page.
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });
});


