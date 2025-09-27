// SIGECO Landing Page Interactive Scripts

// DOM Elements
const preloader = document.getElementById('preloader');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');
const faqToggle = document.getElementById('faq-toggle');
const faqPanel = document.getElementById('faq-panel');
const faqClose = document.getElementById('faq-close');
const faqQuestions = document.querySelectorAll('.faq-question');
const demoForm = document.getElementById('demo-form');

// Preloader functionality
window.addEventListener('load', () => {
    setTimeout(() => {
        preloader.classList.add('hidden');
        // Remove preloader from DOM after animation
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }, 1000); // Show preloader for at least 1 second
});

// Mobile Navigation Toggle
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
    }
});

// Tab switching functionality
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetTab = button.getAttribute('data-tab');
        
        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked button and corresponding content
        button.classList.add('active');
        document.getElementById(targetTab).classList.add('active');
        
        // Add animation effect
        const activeContent = document.getElementById(targetTab);
        activeContent.style.opacity = '0';
        activeContent.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            activeContent.style.opacity = '1';
            activeContent.style.transform = 'translateY(0)';
        }, 50);
    });
});

// FAQ Chat functionality
faqToggle.addEventListener('click', () => {
    faqPanel.classList.toggle('active');
});

faqClose.addEventListener('click', () => {
    faqPanel.classList.remove('active');
});

// Close FAQ panel when clicking outside
document.addEventListener('click', (e) => {
    if (!faqToggle.contains(e.target) && !faqPanel.contains(e.target)) {
        faqPanel.classList.remove('active');
    }
});

// FAQ Question Toggle
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const faqId = question.getAttribute('data-faq');
        const answer = document.getElementById(`faq-${faqId}`);
        const arrow = question.querySelector('.faq-arrow');
        
        // Toggle active state
        question.classList.toggle('active');
        answer.classList.toggle('active');
        
        // Close other open FAQs
        faqQuestions.forEach(otherQuestion => {
            if (otherQuestion !== question) {
                otherQuestion.classList.remove('active');
                const otherId = otherQuestion.getAttribute('data-faq');
                const otherAnswer = document.getElementById(`faq-${otherId}`);
                otherAnswer.classList.remove('active');
            }
        });
    });
});

// Form submission
demoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(demoForm);
    const data = Object.fromEntries(formData);
    
    // Validate required fields
    const requiredFields = ['company', 'firstName', 'lastName', 'email', 'industry'];
    const missingFields = requiredFields.filter(field => !data[field] || data[field].trim() === '');
    
    if (missingFields.length > 0) {
        showAlert('Por favor, completa todos los campos requeridos.', 'error');
        return;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showAlert('Por favor, ingresa un email válido.', 'error');
        return;
    }
    
    // Check terms acceptance
    if (!data.terms) {
        showAlert('Debes aceptar los términos y condiciones para continuar.', 'error');
        return;
    }
    
    // Show loading state
    const submitButton = demoForm.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    submitButton.innerHTML = '<span>Enviando...</span>';
    submitButton.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        // Reset button
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
        
        // Show success message
        showAlert(
            `¡Gracias ${data.firstName}! Tu solicitud ha sido enviada correctamente. Te contactaremos en las próximas 24 horas para coordinar tu demo personalizada.`,
            'success'
        );
        
        // Reset form
        demoForm.reset();
        
        // Log data (in real implementation, this would be sent to a server)
        console.log('Demo request submitted:', data);
        
        // Track conversion (in real implementation, this would be sent to analytics)
        trackConversion('demo_request_submitted', {
            company: data.company,
            industry: data.industry,
            employees: data.employees
        });
        
    }, 2000); // Simulate network delay
});

// Utility Functions

// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Scroll to demo section
function scrollToDemo() {
    scrollToSection('demo');
}

// Scroll to features section
function scrollToFeatures() {
    scrollToSection('features');
}

// Make functions globally available
window.scrollToDemo = scrollToDemo;
window.scrollToFeatures = scrollToFeatures;

// Alert system
function showAlert(message, type = 'info') {
    // Remove existing alerts
    const existingAlert = document.querySelector('.custom-alert');
    if (existingAlert) {
        existingAlert.remove();
    }
    
    // Create alert element
    const alert = document.createElement('div');
    alert.className = `custom-alert custom-alert-${type}`;
    alert.innerHTML = `
        <div class="alert-content">
            <span class="alert-icon">${getAlertIcon(type)}</span>
            <span class="alert-message">${message}</span>
            <button class="alert-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;
    
    // Add styles
    alert.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        max-width: 400px;
        background: white;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        z-index: 10001;
        animation: slideInRight 0.3s ease-out;
        border-left: 4px solid ${getAlertColor(type)};
    `;
    
    const alertContent = alert.querySelector('.alert-content');
    alertContent.style.cssText = `
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 16px 20px;
    `;
    
    const alertIcon = alert.querySelector('.alert-icon');
    alertIcon.style.cssText = `
        font-size: 20px;
        color: ${getAlertColor(type)};
    `;
    
    const alertMessage = alert.querySelector('.alert-message');
    alertMessage.style.cssText = `
        flex: 1;
        color: #1e293b;
        line-height: 1.5;
    `;
    
    const alertClose = alert.querySelector('.alert-close');
    alertClose.style.cssText = `
        background: none;
        border: none;
        font-size: 24px;
        color: #64748b;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    `;
    
    // Add to document
    document.body.appendChild(alert);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (alert.parentElement) {
            alert.style.animation = 'slideOutRight 0.3s ease-in forwards';
            setTimeout(() => alert.remove(), 300);
        }
    }, 5000);
}

function getAlertIcon(type) {
    const icons = {
        success: '✓',
        error: '✗',
        warning: '⚠',
        info: 'ℹ'
    };
    return icons[type] || icons.info;
}

function getAlertColor(type) {
    const colors = {
        success: '#10b981',
        error: '#ef4444',
        warning: '#f59e0b',
        info: '#3b82f6'
    };
    return colors[type] || colors.info;
}

// Analytics tracking (placeholder function)
function trackConversion(eventName, properties = {}) {
    // In a real implementation, this would send data to analytics services
    console.log('Tracking conversion:', eventName, properties);
    
    // Example implementations:
    // Google Analytics: gtag('event', eventName, properties);
    // Facebook Pixel: fbq('track', eventName, properties);
    // Custom analytics: analytics.track(eventName, properties);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.feature-card, .pro-item, .con-item');
    animateElements.forEach(el => {
        observer.observe(el);
    });
});

// Add CSS for animations
const animationStyles = document.createElement('style');
animationStyles.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .feature-card,
    .pro-item,
    .con-item {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease-out;
    }
    
    .feature-card.animate-in,
    .pro-item.animate-in,
    .con-item.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(animationStyles);

// Form input enhancements
document.addEventListener('DOMContentLoaded', () => {
    // Add floating labels effect
    const formInputs = document.querySelectorAll('.demo-form input, .demo-form select, .demo-form textarea');
    
    formInputs.forEach(input => {
        // Add focus/blur effects
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentElement.classList.remove('focused');
            }
        });
        
        // Check if input has value on load
        if (input.value) {
            input.parentElement.classList.add('focused');
        }
    });
});

// Keyboard navigation for accessibility
document.addEventListener('keydown', (e) => {
    // Escape key closes FAQ panel
    if (e.key === 'Escape') {
        faqPanel.classList.remove('active');
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Tab navigation for FAQ questions
    if (e.key === 'Tab' && faqPanel.classList.contains('active')) {
        const focusableElements = faqPanel.querySelectorAll('button, [tabindex]:not([tabindex="-1"])');
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
        }
    }
});

// Performance optimizations
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll handler
const debouncedScrollHandler = debounce(() => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
    }
}, 10);

// Replace the original scroll handler
window.removeEventListener('scroll', () => {}); // Remove if any existing
window.addEventListener('scroll', debouncedScrollHandler);

// Lazy loading for images (if any are added)
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Error handling for failed resources
window.addEventListener('error', (e) => {
    console.error('Resource failed to load:', e.target);
    // Could implement fallback loading or user notification here
});

// Service Worker registration (for future PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment when service worker is implemented
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => {
        //         console.log('SW registered: ', registration);
        //     })
        //     .catch(registrationError => {
        //         console.log('SW registration failed: ', registrationError);
        //     });
    });
}

// Console welcome message
console.log(`
🚀 SIGECO Landing Page
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Version: 1.0.0
Built with: Vanilla JavaScript, CSS Grid, and ❤️
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✨ Features loaded:
• Preloader animation
• Mobile navigation
• Tab switching
• FAQ chat system
• Form validation & submission
• Smooth scrolling
• Intersection Observer animations
• Accessibility enhancements

📊 Performance optimizations:
• Debounced scroll handlers
• Lazy loading ready
• Minimal DOM manipulation
• Efficient event delegation

🔗 Need help? Check out our FAQ or contact support!
`);