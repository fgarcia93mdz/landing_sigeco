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
  // Use language manager if available, fallback to default
  if (window.languageManager) {
    return window.languageManager.formatDemoDataForLanguage(data);
  }
  
  // Fallback for Spanish
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
  
  // Get translations
  const lang = window.languageManager ? window.languageManager.currentLanguage : 'es';
  const t = window.translations ? window.translations[lang].modal : {
    title: 'Enviar Solicitud de Demo',
    summary: '📋 Resumen de tu solicitud:',
    options: '🚀 Elige cómo enviar tu solicitud:',
    whatsapp: {
      title: 'WhatsApp (Recomendado)',
      desc: 'Respuesta inmediata • Coordinación directa',
      button: 'Enviar por WhatsApp'
    },
    email: {
      title: 'Email',
      desc: 'Registro formal • Respuesta en 2-4 horas', 
      button: 'Enviar por Email'
    },
    cancel: 'Cancelar'
  };
  
  const fieldLabels = window.translations ? window.translations[lang].demo.fields : {
    name: 'Nombre',
    email: 'Email',
    phone: 'Teléfono',
    company: 'Empresa', 
    industry: 'Industria',
    extinguishers: 'Cantidad de Extintores',
    demoType: 'Tipo de Demo',
    comments: 'Comentarios'
  };
  
  // Generate messages
  const whatsappMessage = generateWhatsAppMessage(data);
  const emailSubjects = {
    es: 'Solicitud de Demo - SIGECO',
    en: 'Demo Request - SIGECO',
    pt: 'Solicitação de Demo - SIGECO'
  };
  const emailSubject = emailSubjects[lang] || emailSubjects.es;
  const emailBody = generateEmailBody(data);
  
  // Check if has comments
  const noCommentsTexts = ['Sin comentarios adicionales', 'No additional comments', 'Sem comentários adicionais'];
  const hasComments = data.comentarios && !noCommentsTexts.includes(data.comentarios);
  
  modal.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h3>${t.title}</h3>
        <button class="modal-close" onclick="closeSubmissionModal()">&times;</button>
      </div>
      
      <div class="modal-body">
        <div class="submission-summary">
          <h4>${t.summary}</h4>
          <div class="data-summary">
            <div class="data-row"><strong>${fieldLabels.name}:</strong> ${data.nombre}</div>
            <div class="data-row"><strong>${fieldLabels.email}:</strong> ${data.email}</div>
            <div class="data-row"><strong>${fieldLabels.phone}:</strong> ${data.telefono}</div>
            <div class="data-row"><strong>${fieldLabels.company}:</strong> ${data.empresa}</div>
            <div class="data-row"><strong>${fieldLabels.industry}:</strong> ${data.industria}</div>
            <div class="data-row"><strong>${fieldLabels.extinguishers}:</strong> ${data.extintores}</div>
            <div class="data-row"><strong>${fieldLabels.demoType}:</strong> ${data.tipoDemo}</div>
            ${hasComments ? 
              `<div class="data-row"><strong>${fieldLabels.comments}:</strong> ${data.comentarios}</div>` : ''}
          </div>
        </div>
        
        <div class="submission-options">
          <h4>${t.options}</h4>
          
          <div class="option-card whatsapp-option">
            <div class="option-icon">📱</div>
            <div class="option-content">
              <h5>${t.whatsapp.title}</h5>
              <p>${t.whatsapp.desc}</p>
              <button class="btn btn-primary btn-whatsapp" onclick="sendViaWhatsApp('${encodeURIComponent(whatsappMessage)}')">
                <span class="btn-icon">💬</span>
                <span class="btn-text">${t.whatsapp.button}</span>
              </button>
            </div>
          </div>
          
          <div class="option-card email-option">
            <div class="option-icon">📧</div>
            <div class="option-content">
              <h5>${t.email.title}</h5>
              <p>${t.email.desc}</p>
              <button class="btn btn-outline btn-email" onclick="sendViaEmail('${encodeURIComponent(emailSubject)}', '${encodeURIComponent(emailBody)}')">
                <span class="btn-icon">✉️</span>
                <span class="btn-text">${t.email.button}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div class="modal-footer">
        <button class="btn btn-secondary" onclick="closeSubmissionModal()">${t.cancel}</button>
      </div>
    </div>
  `;
  
  return modal;
}

// Generate WhatsApp message with multi-language support
function generateWhatsAppMessage(data) {
  const lang = window.languageManager ? window.languageManager.currentLanguage : 'es';
  
  const templates = {
    es: {
      title: '🚀 *SOLICITUD DE DEMO SIGECO*',
      contact: '👤 *Datos de Contacto:*',
      company: '🏢 *Información Empresarial:*',
      preferences: '🎯 *Preferencias de Demo:*',
      date: '📅 *Fecha de Solicitud:*',
      message: '¡Hola! Quiero solicitar una demo de SIGECO según los datos arriba. ¿Cuándo podemos coordinar?',
      name: 'Nombre',
      email: 'Email', 
      phone: 'Teléfono',
      companyName: 'Empresa',
      industry: 'Industria',
      extinguishers: 'Cantidad de Extintores',
      type: 'Tipo',
      comments: 'Comentarios',
      noComments: 'Sin comentarios adicionales'
    },
    en: {
      title: '🚀 *SIGECO DEMO REQUEST*',
      contact: '👤 *Contact Information:*',
      company: '🏢 *Company Information:*', 
      preferences: '🎯 *Demo Preferences:*',
      date: '📅 *Request Date:*',
      message: 'Hello! I want to request a SIGECO demo according to the data above. When can we coordinate?',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      companyName: 'Company', 
      industry: 'Industry',
      extinguishers: 'Number of Extinguishers',
      type: 'Type',
      comments: 'Comments',
      noComments: 'No additional comments'
    },
    pt: {
      title: '🚀 *SOLICITAÇÃO DE DEMO SIGECO*',
      contact: '👤 *Dados de Contato:*',
      company: '🏢 *Informações da Empresa:*',
      preferences: '🎯 *Preferências da Demo:*',
      date: '📅 *Data da Solicitação:*',
      message: 'Olá! Quero solicitar uma demo do SIGECO conforme os dados acima. Quando podemos coordenar?',
      name: 'Nome',
      email: 'E-mail',
      phone: 'Telefone', 
      companyName: 'Empresa',
      industry: 'Setor',
      extinguishers: 'Quantidade de Extintores',
      type: 'Tipo',
      comments: 'Comentários',
      noComments: 'Sem comentários adicionais'
    }
  };
  
  const t = templates[lang] || templates.es;
  const hasComments = data.comentarios !== t.noComments && data.comentarios !== 'No additional comments' && data.comentarios !== 'Sem comentários adicionais';
  
  return `${t.title}

${t.contact}
• ${t.name}: ${data.nombre}
• ${t.email}: ${data.email}
• ${t.phone}: ${data.telefono}

${t.company}
• ${t.companyName}: ${data.empresa}
• ${t.industry}: ${data.industria}
• ${t.extinguishers}: ${data.extintores}

${t.preferences}
• ${t.type}: ${data.tipoDemo}
${hasComments ? `• ${t.comments}: ${data.comentarios}` : ''}

${t.date} ${data.fecha}

${t.message}`;
}

// Generate email body with multi-language support
function generateEmailBody(data) {
  const lang = window.languageManager ? window.languageManager.currentLanguage : 'es';
  
  const templates = {
    es: {
      greeting: 'Estimado equipo SIGECO,',
      intro: 'Solicito una demo personalizada del sistema SIGECO con los siguientes datos:',
      contact: 'DATOS DE CONTACTO:',
      company: 'INFORMACIÓN EMPRESARIAL:',
      preferences: 'PREFERENCIAS DE DEMO:',
      requestDate: 'Fecha de solicitud:',
      closing: 'Quedo a la espera de su contacto para coordinar la demo.',
      regards: 'Saludos cordiales,',
      name: 'Nombre',
      email: 'Email',
      phone: 'Teléfono',
      companyName: 'Empresa',
      industry: 'Industria', 
      extinguishers: 'Cantidad de Extintores',
      type: 'Tipo',
      comments: 'Comentarios',
      noComments: 'Sin comentarios adicionales'
    },
    en: {
      greeting: 'Dear SIGECO team,',
      intro: 'I request a personalized demo of the SIGECO system with the following information:',
      contact: 'CONTACT INFORMATION:',
      company: 'COMPANY INFORMATION:',
      preferences: 'DEMO PREFERENCES:',
      requestDate: 'Request date:',
      closing: 'I look forward to your contact to coordinate the demo.',
      regards: 'Best regards,',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      companyName: 'Company',
      industry: 'Industry',
      extinguishers: 'Number of Extinguishers',
      type: 'Type',
      comments: 'Comments',
      noComments: 'No additional comments'
    },
    pt: {
      greeting: 'Estimada equipe SIGECO,',
      intro: 'Solicito uma demo personalizada do sistema SIGECO com as seguintes informações:',
      contact: 'DADOS DE CONTATO:',
      company: 'INFORMAÇÕES DA EMPRESA:',
      preferences: 'PREFERÊNCIAS DA DEMO:',
      requestDate: 'Data da solicitação:',
      closing: 'Aguardo seu contato para coordenar a demo.',
      regards: 'Atenciosamente,',
      name: 'Nome',
      email: 'E-mail',
      phone: 'Telefone',
      companyName: 'Empresa',
      industry: 'Setor',
      extinguishers: 'Quantidade de Extintores',
      type: 'Tipo', 
      comments: 'Comentários',
      noComments: 'Sem comentários adicionais'
    }
  };
  
  const t = templates[lang] || templates.es;
  const hasComments = data.comentarios !== t.noComments && data.comentarios !== 'No additional comments' && data.comentarios !== 'Sem comentários adicionais';
  
  return `${t.greeting}

${t.intro}

${t.contact}
- ${t.name}: ${data.nombre}
- ${t.email}: ${data.email}
- ${t.phone}: ${data.telefono}

${t.company}
- ${t.companyName}: ${data.empresa}
- ${t.industry}: ${data.industria}
- ${t.extinguishers}: ${data.extintores}

${t.preferences}
- ${t.type}: ${data.tipoDemo}
${hasComments ? `- ${t.comments}: ${data.comentarios}` : ''}

${t.requestDate} ${data.fecha}

${t.closing}

${t.regards}
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
  const lang = window.languageManager ? window.languageManager.currentLanguage : 'es';
  const t = window.translations ? window.translations[lang].modal.success : {
    whatsapp: '¡Solicitud enviada por WhatsApp! 📱 Te responderemos inmediatamente.',
    email: '¡Solicitud enviada por Email! 📧 Te contactaremos en las próximas 2-4 horas.'
  };
  
  showNotification(t[method], 'success');
  
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
