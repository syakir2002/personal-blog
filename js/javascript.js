// Mobile Hamburger Menu Toggle Logic
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

if (mobileMenu && navLinks) {
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileMenu.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });
}

// Basic Form Submission Feedback Interception
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        alert(`Thank you, ${name}! Your form submitted perfectly.`);
        
        contactForm.reset();
    });
}

// Sidebar Project Tab Switching Logic
function showProject(projectId) {
    // 1. Remove active state from all content panels
    const panels = document.querySelectorAll('.project-panel');
    panels.forEach(panel => panel.classList.remove('active'));

    // 2. Remove active state from all left sidebar list items
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => item.classList.remove('active'));

    // 3. Activate the matching project panel
    const targetedPanel = document.getElementById(projectId);
    if (targetedPanel) {
        targetedPanel.classList.add('active');
    }

    // 4. Activate the clicked sidebar menu item
    // Finds the menu item possessing the corresponding click event argument
    const clickedItem = event.currentTarget;
    if (clickedItem) {
        clickedItem.classList.add('active');
    }
}


// Monitor page scroll position to change sidebar highlights dynamically
window.addEventListener('scroll', () => {
    const targets = document.querySelectorAll('#about-me-sec, #journey-sec, #skills-sec');
    const links = document.querySelectorAll('.sub-link');
    
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

// Function 1: Handles switching between different project panels via Sidebar clicks
function showProject(projectId) {
    // Hide all project information sections
    document.querySelectorAll('.project-panel').removeClassNameOrClass('active');
    document.querySelectorAll('.project-panel').forEach(panel => panel.classList.remove('active'));
    
    // Deactivate previous sidebar items
    document.querySelectorAll('.menu-item').forEach(item => item.classList.remove('active'));

    // Activate selected project layout element
    document.getElementById(projectId).classList.add('active');
    
    // Highlight matching click item in sidebar menu tree
    event.currentTarget.classList.add('active');
}

// Function 2: Manages Left/Right sliding mechanics for individual screenshot lists
function moveSlider(projectPanelId, direction) {
    const sliderContainer = document.getElementById(`slider-${projectPanelId}`);
    const images = sliderContainer.querySelectorAll('.slider-img');
    
    let currentActiveIndex = 0;

    // Find out which screenshot is currently showing inside the block
    images.forEach((img, index) => {
        if (img.classList.contains('active')) {
            currentActiveIndex = index;
        }
    });

    // Remove active markers
    images[currentActiveIndex].classList.remove('active');

    // Calculate next array sequence loop boundary path securely
    let nextActiveIndex = currentActiveIndex + direction;
    if (nextActiveIndex >= images.length) {
        nextActiveIndex = 0; // Wrap back to the beginning
    } else if (nextActiveIndex < 0) {
        nextActiveIndex = images.length - 1; // Wrap back to the end
    }

    // Paint visibility to the next computed item index frame target
    images[nextActiveIndex].classList.add('active');
}
