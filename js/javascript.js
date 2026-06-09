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

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

// Check for saved user preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'light') {
    body.classList.add('light-mode');
        icon.classList.replace('fa-moon', 'fa-sun');
        }

        // Toggle event
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('light-mode');
                
                    if (body.classList.contains('light-mode')) {
                            localStorage.setItem('theme', 'light');
                                    icon.classList.replace('fa-moon', 'fa-sun');
                                        } else {
                                                localStorage.setItem('theme', 'dark');
                                                        icon.classList.replace('fa-sun', 'fa-moon');
                                                            }
                                                            });
