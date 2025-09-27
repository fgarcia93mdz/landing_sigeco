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

// La función sendMessage está definida más abajo con mejoras

sendBtn.addEventListener('click', sendMessage);

chatInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

// Variables del chat
let questionsCollapsed = false;
const quickQuestions = document.querySelector('.quick-questions');

// Toggle collapse de preguntas frecuentes
function toggleQuestions() {
  questionsCollapsed = !questionsCollapsed;
  
  if (questionsCollapsed) {
    quickQuestions.classList.add('collapsed');
    chatMessages.classList.add('expanded');
  } else {
    quickQuestions.classList.remove('collapsed');
    chatMessages.classList.remove('expanded');
  }
}

// Auto-colapsar cuando el usuario empieza a chatear
function autoCollapseQuestions() {
  if (!questionsCollapsed) {
    questionsCollapsed = true;
    quickQuestions.classList.add('collapsed');
    chatMessages.classList.add('expanded');
  }
}

// Scroll suave al final
function scrollToBottom() {
  setTimeout(() => {
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }, 100);
}

// Mostrar indicador de escritura
function showTypingIndicator() {
  const typingDiv = document.createElement('div');
  typingDiv.className = 'chat-message typing-indicator';
  typingDiv.id = 'typing-indicator';
  
  typingDiv.innerHTML = `
    <div class="message-content">
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
    </div>
  `;
  
  chatMessages.appendChild(typingDiv);
  scrollToBottom();
}

// Ocultar indicador de escritura
function hideTypingIndicator() {
  const typingIndicator = document.getElementById('typing-indicator');
  if (typingIndicator) {
    typingIndicator.remove();
  }
}

// Click en título para toggle
document.querySelector('.questions-title').addEventListener('click', toggleQuestions);

// Auto-colapsar al enfocar input
chatInput.addEventListener('focus', autoCollapseQuestions);

// Función mejorada sendMessage
function sendMessage() {
  const message = chatInput.value.trim();
  if (message) {
    autoCollapseQuestions();
    addMessage(message, true);
    chatInput.value = '';
    
    // Mostrar typing indicator
    showTypingIndicator();
    
    setTimeout(() => {
      hideTypingIndicator();
      addMessage(getBotResponse(message));
    }, 1000 + Math.random() * 1500);
  }
}

// Manejar preguntas frecuentes
document.querySelectorAll('.question-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const question = btn.dataset.question;
    const answer = btn.dataset.answer;
    
    autoCollapseQuestions();
    addMessage(question, true);
    
    // Mostrar typing indicator
    showTypingIndicator();
    
    setTimeout(() => {
      hideTypingIndicator();
      addMessage(answer);
    }, 1200);
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
  
  // Send data via WhatsApp and Email
  sendDemoRequest(data, submitBtn, e.target);
});

// Function to send demo request data
function sendDemoRequest(data, submitBtn, form) {
  // Format data for sending
  const formattedData = formatDemoData(data);
  
  // Show options to user
  showSubmissionOptions(formattedData, submitBtn, form);
}

// Format the collected data into readable format
function formatDemoData(data) {
  const industryLabels = {
    'manufactura': 'Manufactura',
    'construccion': 'Construcción', 
    'salud': 'Salud',
    'logistica': 'Logística',
    'energia': 'Energía',
    'alimentaria': 'Alimentaria',
    'mineria': 'Minería',
    'otro': 'Otro'
  };
  
  const extinctorLabels = {
    '1-50': '1 - 50 extintores',
    '51-200': '51 - 200 extintores', 
    '201-500': '201 - 500 extintores',
    '500+': 'Más de 500 extintores'
  };
  
  const demoTypeLabels = {
    'online': 'Demo Online (Videollamada)',
    'presencial': 'Demo Presencial (Visita a instalaciones)'
  };
  
  return {
    nombre: data.name || 'No especificado',
    email: data.email || 'No especificado', 
    telefono: data.phone || 'No especificado',
    empresa: data.company || 'No especificada',
    industria: industryLabels[data.industry] || 'No especificada',
    extintores: extinctorLabels[data.extinguishers] || 'No especificado',
    tipoDemo: demoTypeLabels[data['demo-type']] || 'Demo Online',
    comentarios: data.comments || 'Sin comentarios adicionales',
    fecha: new Date().toLocaleString('es-ES', {
      weekday: 'long',
      year: 'numeric', 
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  };
}

// Show submission options to user
function showSubmissionOptions(formattedData, submitBtn, form) {
  const modal = createSubmissionModal(formattedData, submitBtn, form);
  document.body.appendChild(modal);
  
  // Show modal with animation
  setTimeout(() => {
    modal.classList.add('active');
  }, 100);
}

// Create modal with submission options
function createSubmissionModal(data, submitBtn, form) {
  const modal = document.createElement('div');
  modal.className = 'submission-modal';
  modal.id = 'submission-modal';
  
  // Generate WhatsApp message
  const whatsappMessage = generateWhatsAppMessage(data);
  const emailSubject = 'Solicitud de Demo - SIGECO';
  const emailBody = generateEmailBody(data);
  
  modal.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h3>Enviar Solicitud de Demo</h3>
        <button class="modal-close" onclick="closeSubmissionModal()">&times;</button>
      </div>
      
      <div class="modal-body">
        <div class="submission-summary">
          <h4>📋 Resumen de tu solicitud:</h4>
          <div class="data-summary">
            <div class="data-row"><strong>Nombre:</strong> ${data.nombre}</div>
            <div class="data-row"><strong>Email:</strong> ${data.email}</div>
            <div class="data-row"><strong>Teléfono:</strong> ${data.telefono}</div>
            <div class="data-row"><strong>Empresa:</strong> ${data.empresa}</div>
            <div class="data-row"><strong>Industria:</strong> ${data.industria}</div>
            <div class="data-row"><strong>Cantidad de Extintores:</strong> ${data.extintores}</div>
            <div class="data-row"><strong>Tipo de Demo:</strong> ${data.tipoDemo}</div>
            ${data.comentarios !== 'Sin comentarios adicionales' ? 
              `<div class="data-row"><strong>Comentarios:</strong> ${data.comentarios}</div>` : ''}
          </div>
        </div>
        
        <div class="submission-options">
          <h4>🚀 Elige cómo enviar tu solicitud:</h4>
          
          <div class="option-card whatsapp-option">
            <div class="option-icon">📱</div>
            <div class="option-content">
              <h5>WhatsApp (Recomendado)</h5>
              <p>Respuesta inmediata • Coordinación directa</p>
              <button class="btn btn-primary btn-whatsapp" onclick="sendViaWhatsApp('${encodeURIComponent(whatsappMessage)}')">
                <span class="btn-icon">💬</span>
                <span class="btn-text">Enviar por WhatsApp</span>
              </button>
            </div>
          </div>
          
          <div class="option-card email-option">
            <div class="option-icon">📧</div>
            <div class="option-content">
              <h5>Email</h5>
              <p>Registro formal • Respuesta en 2-4 horas</p>
              <button class="btn btn-outline btn-email" onclick="sendViaEmail('${encodeURIComponent(emailSubject)}', '${encodeURIComponent(emailBody)}')">
                <span class="btn-icon">✉️</span>
                <span class="btn-text">Enviar por Email</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div class="modal-footer">
        <button class="btn btn-secondary" onclick="closeSubmissionModal()">Cancelar</button>
      </div>
    </div>
  `;
  
  return modal;
}

// Generate WhatsApp message
function generateWhatsAppMessage(data) {
  return `🚀 *SOLICITUD DE DEMO SIGECO*

👤 *Datos de Contacto:*
• Nombre: ${data.nombre}
• Email: ${data.email}
• Teléfono: ${data.telefono}

🏢 *Información Empresarial:*
• Empresa: ${data.empresa}
• Industria: ${data.industria}
• Cantidad de Extintores: ${data.extintores}

🎯 *Preferencias de Demo:*
• Tipo: ${data.tipoDemo}
${data.comentarios !== 'Sin comentarios adicionales' ? `• Comentarios: ${data.comentarios}` : ''}

📅 *Fecha de Solicitud:* ${data.fecha}

¡Hola! Quiero solicitar una demo de SIGECO según los datos arriba. ¿Cuándo podemos coordinar?`;
}

// Generate email body
function generateEmailBody(data) {
  return `Estimado equipo SIGECO,

Solicito una demo personalizada del sistema SIGECO con los siguientes datos:

DATOS DE CONTACTO:
- Nombre: ${data.nombre}
- Email: ${data.email}  
- Teléfono: ${data.telefono}

INFORMACIÓN EMPRESARIAL:
- Empresa: ${data.empresa}
- Industria: ${data.industria}
- Cantidad de Extintores: ${data.extintores}

PREFERENCIAS DE DEMO:
- Tipo: ${data.tipoDemo}
${data.comentarios !== 'Sin comentarios adicionales' ? `- Comentarios: ${data.comentarios}` : ''}

Fecha de solicitud: ${data.fecha}

Quedo a la espera de su contacto para coordinar la demo.

Saludos cordiales,
${data.nombre}`;
}

// Send via WhatsApp
function sendViaWhatsApp(message) {
  const whatsappUrl = `https://wa.me/5492615995585?text=${message}`;
  window.open(whatsappUrl, '_blank');
  
  // Close modal and show success
  closeSubmissionModal();
  setTimeout(() => {
    showSuccessMessage('whatsapp');
  }, 500);
}

// Send via Email  
function sendViaEmail(subject, body) {
  const emailUrl = `mailto:info@sigeco.com?subject=${subject}&body=${body}`;
  window.location.href = emailUrl;
  
  // Close modal and show success
  closeSubmissionModal();
  setTimeout(() => {
    showSuccessMessage('email');
  }, 500);
}

// Close submission modal
function closeSubmissionModal() {
  const modal = document.getElementById('submission-modal');
  if (modal) {
    modal.classList.remove('active');
    setTimeout(() => {
      modal.remove();
      // Reset form state
      const submitBtn = document.querySelector('.submit-btn');
      const form = document.getElementById('demoForm');
      if (submitBtn) {
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
      }
    }, 300);
  }
}

// Show success message
function showSuccessMessage(method) {
  const messages = {
    whatsapp: '¡Solicitud enviada por WhatsApp! 📱 Te responderemos inmediatamente.',
    email: '¡Solicitud enviada por Email! 📧 Te contactaremos en las próximas 2-4 horas.'
  };
  
  showNotification(messages[method], 'success');
  
  // Reset form
  const form = document.getElementById('demoForm');
  if (form) {
    form.reset();
    showStep(1);
  }
}

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
