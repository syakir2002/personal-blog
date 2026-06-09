document.addEventListener('DOMContentLoaded', () => {

    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    if (themeToggle) {
        const themeIcon = themeToggle.querySelector('i');

        // Check for saved user preference on startup
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            body.classList.add('light-mode');
            if (themeIcon) themeIcon.className = 'fas fa-sun';
        }

        // Toggle Event
        themeToggle.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevents clicks on the internal icon from misfiring
            body.classList.toggle('light-mode');
            
            if (body.classList.contains('light-mode')) {
                localStorage.setItem('theme', 'light');
                if (themeIcon) themeIcon.className = 'fas fa-sun';
            } else {
                localStorage.setItem('theme', 'dark');
                if (themeIcon) themeIcon.className = 'fas fa-moon';
            }
        });
    }

    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.getElementById('navLinks');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Toggle hamburger icon bars smoothly to an 'X' close indicator
            const menuIcon = mobileMenu.querySelector('i');
            if (menuIcon) {
                menuIcon.classList.toggle('fa-bars');
                menuIcon.classList.toggle('fa-times');
            }
        });
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const nameInput = document.getElementById('name');
            const name = nameInput ? nameInput.value : 'there';
            
            alert(`Thank you, ${name}! Your form submitted perfectly.`);
            contactForm.reset();
        });
    }

    window.addEventListener('scroll', () => {
        const targets = document.querySelectorAll('#about-me-sec, #journey-sec, #skills-sec');
        const links = document.querySelectorAll('.sub-link');
        
        // Skip execution if we aren't on the About page
        if (targets.length === 0 || links.length === 0) return;

        let activeId = '';
        
        targets.forEach(target => {
            const top = target.offsetTop;
            const height = target.clientHeight;
            if (window.pageYOffset >= (top - height / 3)) {
                activeId = target.getAttribute('id');
            }
        });

        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(activeId)) {
                link.classList.add('active');
            }
        });
    });

});

function showProject(projectId) {
    // Hide all project information sections
    const panels = document.querySelectorAll('.project-panel');
    panels.forEach(panel => panel.classList.remove('active'));

    // Deactivate previous sidebar items
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => item.classList.remove('active'));

    // Activate selected project layout element
    const targetedPanel = document.getElementById(projectId);
    if (targetedPanel) {
        targetedPanel.classList.add('active');
    }
    
    // Highlight matching item clicked in the layout tree
    if (window.event && window.event.currentTarget) {
        window.event.currentTarget.classList.add('active');
    }
}

function moveSlider(projectPanelId, direction) {
    const sliderContainer = document.getElementById(`slider-${projectPanelId}`);
    if (!sliderContainer) return; // Guard clause in case slider wrapper doesn't exist

    const images = sliderContainer.querySelectorAll('.slider-img');
    if (images.length === 0) return;
    
    let currentActiveIndex = 0;

    // Find out which screenshot is currently showing inside the block
    images.forEach((img, index) => {
        if (img.classList.contains('active')) {
            currentActiveIndex = index;
        }
    });

    // Remove active marker from the old slide
    images[currentActiveIndex].classList.remove('active');

    // Calculate next slide index securely
    let nextActiveIndex = currentActiveIndex + direction;
    if (nextActiveIndex >= images.length) {
        nextActiveIndex = 0; // Loop back to the beginning
    } else if (nextActiveIndex < 0) {
        nextActiveIndex = images.length - 1; // Loop back to the final image
    }

    // Set the new slide to active
    images[nextActiveIndex].classList.add('active');
}