// Preloader
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  preloader.style.opacity = '0';
  setTimeout(() => {
    preloader.style.display = 'none';
  }, 300);
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(255, 255, 255, 0.98)';
  } else {
    navbar.style.background = 'rgba(255, 255, 255, 0.95)';
  }
});

// Hamburger menu with animation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('active');
});

// Close menu when clicking on a link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('active');
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Tabs for use cases with smooth transition
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all
    tabBtns.forEach(b => b.classList.remove('active'));
    tabContents.forEach(c => c.classList.remove('active'));
    
    // Add active class to clicked button and corresponding content
    btn.classList.add('active');
    const targetContent = document.getElementById(btn.dataset.tab);
    if (targetContent) {
      targetContent.classList.add('active');
    }
  });
});

// Chat de Soporte Profesional
const chatToggle = document.getElementById('chat-toggle');
const chatPanel = document.getElementById('chat-panel');
const chatClose = document.getElementById('chat-close');
const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');
const chatMessages = document.getElementById('chat-messages');

// Abrir/Cerrar chat
chatToggle.addEventListener('click', () => {
  chatPanel.style.display = 'block';
  setTimeout(() => {
    chatPanel.style.opacity = '1';
    chatPanel.style.transform = 'translateY(0) scale(1)';
  }, 10);
});

chatClose.addEventListener('click', () => {
  chatPanel.style.opacity = '0';
  chatPanel.style.transform = 'translateY(10px) scale(0.95)';
  setTimeout(() => {
    chatPanel.style.display = 'none';
  }, 300);
});

// Función para agregar mensaje
function addMessage(content, isUser = false) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `chat-message ${isUser ? 'user-message' : 'agent-message'}`;
  
  const now = new Date();
  const timeStr = now.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
  
  messageDiv.innerHTML = `
    <div class="message-content">${content}</div>
    <div class="message-time">${timeStr}</div>
  `;
  
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Respuestas automáticas del bot
function getBotResponse(userMessage) {
  const message = userMessage.toLowerCase();
  
  if (message.includes('precio') || message.includes('costo') || message.includes('plan')) {
    return 'Tenemos planes desde $299/mes para hasta 50 extintores. ¿Te gustaría que te enviemos una cotización personalizada? 💰';
  } else if (message.includes('demo') || message.includes('prueba')) {
    return 'Perfecto! Puedes solicitar una demo gratuita de 15 minutos. ¿Cuál sería el mejor horario para ti? 📅';
  } else if (message.includes('integra') || message.includes('erp')) {
    return 'SIGECO se integra con SAP, Odoo, Microsoft Dynamics y más. También tenemos API REST para integraciones personalizadas. 🔗';
  } else if (message.includes('hola') || message.includes('buenas')) {
    return '¡Hola! 👋 ¿En qué puedo ayudarte hoy? Puedo responder sobre precios, demos, integraciones o cualquier duda sobre SIGECO.';
  } else if (message.includes('gracias')) {
    return '¡De nada! ¿Hay algo más en lo que pueda ayudarte? Estoy aquí para resolver todas tus dudas sobre SIGECO. 😊';
  } else {
    return 'Interesante pregunta. Para darte la información más precisa, te recomiendo contactar directamente con nuestro equipo técnico. ¿Te ayudo a programar una llamada? 📞';
  }
}

// Manejar envío de mensajes
function sendMessage() {
  const message = chatInput.value.trim();
  if (message) {
    addMessage(message, true);
    chatInput.value = '';
    
    // Simular respuesta del bot después de un delay
    setTimeout(() => {
      addMessage(getBotResponse(message));
    }, 1000 + Math.random() * 1500); // Delay realista
  }
}

sendBtn.addEventListener('click', sendMessage);

chatInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

// Manejar preguntas frecuentes
document.querySelectorAll('.question-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const question = btn.dataset.question;
    const answer = btn.dataset.answer;
    
    addMessage(question, true);
    
    setTimeout(() => {
      addMessage(answer);
    }, 800);
  });
});

// Inicialización del chat
document.addEventListener('DOMContentLoaded', () => {
  // Mensaje de bienvenida después de 3 segundos
  setTimeout(() => {
    if (chatMessages.children.length === 1) {
      addMessage('¿Necesitas ayuda con algo específico? Puedes usar las preguntas frecuentes o escribirme directamente. 💡');
    }
  }, 3000);
});

// Demo form multi-step functionality
let currentStep = 1;
const totalSteps = 3;

function updateProgress() {
  const progressFill = document.getElementById('progress-fill');
  const progressSteps = document.querySelectorAll('.progress-step');
  
  // Update progress bar
  const progress = (currentStep / totalSteps) * 100;
  progressFill.style.width = `${progress}%`;
  
  // Update step indicators
  progressSteps.forEach((step, index) => {
    const stepNumber = index + 1;
    step.classList.remove('active', 'completed');
    
    if (stepNumber === currentStep) {
      step.classList.add('active');
    } else if (stepNumber < currentStep) {
      step.classList.add('completed');
      step.innerHTML = '✓';
    } else {
      step.innerHTML = stepNumber;
    }
  });
}

function showStep(stepNumber) {
  // Hide all steps
  document.querySelectorAll('.form-step').forEach(step => {
    step.classList.remove('active');
  });
  
  // Show current step
  const targetStep = document.querySelector(`[data-step="${stepNumber}"]`);
  if (targetStep) {
    targetStep.classList.add('active');
  }
  
  currentStep = stepNumber;
  updateProgress();
}

function validateStep(stepNumber) {
  const step = document.querySelector(`[data-step="${stepNumber}"]`);
  const requiredFields = step.querySelectorAll('[required]');
  
  for (let field of requiredFields) {
    if (!field.value.trim()) {
      field.focus();
      field.style.borderColor = '#E74C3C';
      setTimeout(() => {
        field.style.borderColor = '';
      }, 3000);
      return false;
    }
  }
  return true;
}

// Next step buttons
document.querySelectorAll('.next-step').forEach(btn => {
  btn.addEventListener('click', () => {
    const nextStep = parseInt(btn.dataset.next);
    
    if (validateStep(currentStep)) {
      showStep(nextStep);
    }
  });
});

// Previous step buttons
document.querySelectorAll('.prev-step').forEach(btn => {
  btn.addEventListener('click', () => {
    const prevStep = parseInt(btn.dataset.prev);
    showStep(prevStep);
  });
});

// Form submission with enhanced loading state
document.getElementById('demoForm').addEventListener('submit', e => {
  e.preventDefault();
  
  if (!validateStep(3)) {
    return;
  }
  
  const submitBtn = e.target.querySelector('.submit-btn');
  
  // Show loading state
  submitBtn.classList.add('loading');
  submitBtn.disabled = true;
  
  // Collect form data
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());
  
  console.log('Demo request data:', data);
  
  // Simulate form submission
  setTimeout(() => {
    showNotification('¡Demo solicitada exitosamente! 🚀 Te contactaremos en menos de 2 horas.', 'success');
    
    // Reset form
    e.target.reset();
    showStep(1);
    
    // Reset button
    submitBtn.classList.remove('loading');
    submitBtn.disabled = false;
  }, 2000);
});

// Input animations and validation
document.querySelectorAll('.form-input, .form-select, .form-textarea').forEach(input => {
  input.addEventListener('focus', () => {
    input.parentElement.classList.add('focused');
  });
  
  input.addEventListener('blur', () => {
    input.parentElement.classList.remove('focused');
    
    // Simple validation feedback
    if (input.hasAttribute('required') && !input.value.trim()) {
      input.style.borderColor = '#E74C3C';
    } else {
      input.style.borderColor = '';
    }
  });
  
  input.addEventListener('input', () => {
    // Clear error state on input
    input.style.borderColor = '';
  });
});

// Notification system
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <span class="notification-icon">${type === 'success' ? '✅' : 'ℹ️'}</span>
      <span class="notification-message">${message}</span>
    </div>
  `;
  
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.classList.add('show');
  }, 100);
  
  // Remove after 5 seconds
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 5000);
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

// Observe cards and other elements
document.querySelectorAll('.card-animated, .section-title').forEach(el => {
  observer.observe(el);
});
