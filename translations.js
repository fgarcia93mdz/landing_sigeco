// Sistema de Traducción Multi-idioma para SIGECO
// Soporte para Español (ES), English (EN) y Português (PT)

const translations = {
  // Español (Idioma por defecto)
  es: {
    // Navegación
    nav: {
      home: "Inicio",
      why: "¿Por qué SIGECO?",
      usecases: "Casos de Uso", 
      testimonials: "Testimonios",
      demo: "Demo"
    },

    // Hero Section
    hero: {
      badge: "Sistema PCI de Nueva Generación",
      title: "SIGECO",
      subtitle: "Protección Contra Incendios",
      lead1: "Gestión inteligente",
      lead2: "automatización de inspecciones",
      lead3: "desarrollo a medida",
      leadText: " con IA predictiva, ",
      leadText2: " y ",
      leadText3: " para tu empresa.",
      features: {
        fast: "Implementación Rápida",
        secure: "100% Seguro",
        mobile: "App Móvil"
      },
      cta: "Solicitar Demo Gratuita",
      ctaSub: "Sin compromiso • 15 minutos",
      stats: {
        companies: "Empresas",
        availability: "Disponibilidad", 
        support: "Soporte"
      },
      social: "Empresas líderes ya usan SIGECO:",
      notification: "Sistema en línea • Extintor B-204 inspeccionado"
    },

    // Features Section
    features: {
      title: "¿Por qué SIGECO?",
      specialist: {
        title: "Especialistas en PCI",
        desc: "Profundos conocimientos en ingeniería de sistemas contra incendios con certificaciones internacionales.",
        badge: "Certificado NFPA"
      },
      ai: {
        title: "Alertas Predictivas", 
        desc: "Inteligencia artificial que anticipa vencimientos y detecta patrones de posibles fallas.",
        badge: "IA Avanzada"
      },
      custom: {
        title: "Desarrollo a Medida",
        desc: "Integraciones nativas con ERP, CRM y sistemas empresariales existentes.",
        badge: "API Rest"
      },
      automation: {
        title: "Automatización Total",
        desc: "Flujos de trabajo inteligentes que optimizan las operaciones de campo.",
        badge: "IoT Ready"
      }
    },

    // Use Cases
    usecases: {
      title: "Formas de Uso",
      inspection: {
        tab: "Inspección",
        title: "Inspección de Campo", 
        desc: "Escanea con QR/NFC cada extintor; registra ubicaciones en mapa; genera checklists dinámicos."
      },
      maintenance: {
        tab: "Mantenimiento",
        title: "Mantenimiento Programado",
        desc: "Planifica órdenes de trabajo; optimiza rutas con geolocalización; recibe alertas antes de vencimientos."
      },
      reports: {
        tab: "Reporte Ejecutivo", 
        title: "Reportes Ejecutivos",
        desc: "Dashboards personalizables; análisis de costos y cumplimiento; exportación a PDF/Excel."
      }
    },

    // Testimonials
    testimonials: {
      title: "Lo Que Dicen Nuestros Clientes",
      metrics: {
        cost: "Reducción de Costos",
        costDesc: "En mantenimiento preventivo",
        time: "Tiempo Ahorrado", 
        timeDesc: "En inspecciones manuales",
        compliance: "Cumplimiento",
        complianceDesc: "En normativas PCI",
        failures: "Menos Fallas",
        failuresDesc: "Por mantenimiento predictivo"
      },
      cta: {
        title: "¿Listo para Transformar tu Gestión de PCI?",
        text: "Únete a más de 500 empresas que ya confían en SIGECO para su protección contra incendios",
        demo: "Solicitar Demo",
        contact: "Contactar Ahora",
        features: {
          demo: "Demo sin compromiso",
          fast: "Implementación rápida", 
          custom: "Personalización total"
        }
      }
    },

    // Demo Form
    demo: {
      badge: "Demo Gratuita • Sin Compromiso",
      title: "Descubre SIGECO",
      subtitle: "en 15 minutos",
      description: "Agenda una demo personalizada y descubre cómo SIGECO puede transformar tu gestión de protección contra incendios con IA predictiva.",
      benefits: {
        instant: "Configuración inmediata",
        expert: "Experto dedicado",
        analysis: "Análisis personalizado"
      },
      formTitle: "Agenda tu Demo",
      formSubtitle: "Completa tus datos y te contactaremos en menos de 2 horas",
      steps: {
        personal: "Información Personal",
        company: "Información de Empresa", 
        preferences: "Preferencias de Demo"
      },
      fields: {
        name: "Nombre completo",
        email: "Correo electrónico",
        phone: "Teléfono / WhatsApp",
        company: "Empresa",
        industry: "Industria", 
        extinguishers: "Número aproximado de extintores",
        demoType: "Tipo de demo preferida",
        comments: "Comentarios adicionales"
      },
      placeholders: {
        name: "Ej: Juan Pérez",
        email: "juan@empresa.com",
        phone: "+54 9 261 123 4567",
        company: "Nombre de tu empresa",
        comments: "Cuéntanos sobre tus necesidades específicas, desafíos actuales o preguntas..."
      },
      industries: {
        select: "Selecciona tu industria",
        manufacturing: "Manufactura",
        construction: "Construcción", 
        health: "Salud",
        logistics: "Logística",
        energy: "Energía",
        food: "Alimentaria",
        mining: "Minería",
        other: "Otro"
      },
      extinguisherCounts: {
        select: "Selecciona cantidad",
        small: "1 - 50 extintores",
        medium: "51 - 200 extintores",
        large: "201 - 500 extintores", 
        xlarge: "Más de 500 extintores"
      },
      demoTypes: {
        online: "Demo Online",
        onlineDesc: "Videollamada de 15 minutos",
        onsite: "Demo Presencial",
        onsiteDesc: "Visita a tus instalaciones"
      },
      buttons: {
        continue: "Continuar",
        previous: "Anterior",
        submit: "Solicitar Demo"
      },
      testimonial: "La demo de SIGECO nos convenció inmediatamente. Implementamos el sistema en 2 semanas."
    },

    // Chat
    chat: {
      toggle: "Chat de soporte",
      agent: "Soporte SIGECO",
      status: "En línea • Resp. promedio 2min",
      welcome: "¡Hola! 👋 Soy tu asistente de SIGECO. ¿En qué puedo ayudarte hoy?",
      placeholder: "Escribe tu pregunta aquí...",
      faqTitle: "Preguntas frecuentes:",
      faq: {
        register: "🔥 ¿Cómo registro extintores?",
        alerts: "⚙️ ¿Cómo configuro alertas?", 
        integration: "🔗 ¿Hay integración con ERP?",
        ai: "🤖 ¿Cómo funciona la IA predictiva?",
        pricing: "💰 ¿Cuáles son los precios?"
      },
      answers: {
        register: "Utiliza la app móvil de SIGECO para escanear códigos QR o NFC de cada extintor. El sistema registra automáticamente ubicación GPS, fecha/hora y estado del equipo. También puedes crear nuevos registros manualmente desde el panel web.",
        alerts: "Ve a Configuración → Alertas en tu dashboard. Puedes configurar notificaciones por email, SMS o push para: vencimientos próximos, mantenimientos programados, inspecciones pendientes y alertas de IA predictiva. Personaliza los tiempos de anticipación según tus necesidades.",
        integration: "Sí, SIGECO se integra nativamente con sistemas ERP como SAP, Odoo, Microsoft Dynamics y Bitrix24. También ofrecemos API REST completa para integraciones personalizadas. El proceso de integración incluye mapeo de datos y sincronización bidireccional.",
        ai: "SIGECO utiliza IA predictiva para analizar patrones históricos, condiciones ambientales y datos de sensores IoT. El sistema predice posibles fallas hasta 30 días antes, optimiza rutas de mantenimiento y sugiere reemplazos preventivos basados en machine learning.",
        pricing: "Ofrecemos múltiples planes: Básico (hasta 50 extintores), Profesional (hasta 500), Empresarial (ilimitado) y Personalizado. Incluimos implementación, capacitación, soporte 24/7 y actualizaciones. Solicita una demo para conocer precios específicos."
      },
      contacts: {
        whatsapp: "WhatsApp",
        demo: "Demo Gratuita",
        phone: "Llamar Ahora"
      }
    },

    // Submission Modal
    modal: {
      title: "Enviar Solicitud de Demo",
      summary: "📋 Resumen de tu solicitud:",
      options: "🚀 Elige cómo enviar tu solicitud:",
      whatsapp: {
        title: "WhatsApp (Recomendado)",
        desc: "Respuesta inmediata • Coordinación directa",
        button: "Enviar por WhatsApp"
      },
      email: {
        title: "Email", 
        desc: "Registro formal • Respuesta en 2-4 horas",
        button: "Enviar por Email"
      },
      cancel: "Cancelar",
      success: {
        whatsapp: "¡Solicitud enviada por WhatsApp! 📱 Te responderemos inmediatamente.",
        email: "¡Solicitud enviada por Email! 📧 Te contactaremos en las próximas 2-4 horas."
      }
    },

    // Common
    common: {
      loading: "Enviando...",
      required: "*",
      close: "Cerrar"
    }
  },

  // English
  en: {
    nav: {
      home: "Home",
      why: "Why SIGECO?",
      usecases: "Use Cases",
      testimonials: "Testimonials", 
      demo: "Demo"
    },

    hero: {
      badge: "Next Generation FPS System",
      title: "SIGECO",
      subtitle: "Fire Protection System",
      lead1: "Intelligent management",
      lead2: "inspection automation",
      lead3: "custom development", 
      leadText: " with predictive AI, ",
      leadText2: " and ",
      leadText3: " for your company.",
      features: {
        fast: "Fast Implementation",
        secure: "100% Secure",
        mobile: "Mobile App"
      },
      cta: "Request Free Demo",
      ctaSub: "No commitment • 15 minutes",
      stats: {
        companies: "Companies",
        availability: "Uptime",
        support: "Support"
      },
      social: "Leading companies already use SIGECO:",
      notification: "System online • Extinguisher B-204 inspected"
    },

    features: {
      title: "Why SIGECO?",
      specialist: {
        title: "FPS Specialists",
        desc: "Deep knowledge in fire protection systems engineering with international certifications.",
        badge: "NFPA Certified"
      },
      ai: {
        title: "Predictive Alerts",
        desc: "Artificial intelligence that anticipates expirations and detects patterns of potential failures.",
        badge: "Advanced AI"
      },
      custom: {
        title: "Custom Development", 
        desc: "Native integrations with ERP, CRM and existing enterprise systems.",
        badge: "REST API"
      },
      automation: {
        title: "Total Automation",
        desc: "Smart workflows that optimize field operations.",
        badge: "IoT Ready"
      }
    },

    usecases: {
      title: "Use Cases",
      inspection: {
        tab: "Inspection",
        title: "Field Inspection",
        desc: "Scan QR/NFC codes on each extinguisher; record locations on map; generate dynamic checklists."
      },
      maintenance: {
        tab: "Maintenance", 
        title: "Scheduled Maintenance",
        desc: "Plan work orders; optimize routes with geolocation; receive alerts before expiration."
      },
      reports: {
        tab: "Executive Report",
        title: "Executive Reports",
        desc: "Customizable dashboards; cost and compliance analysis; export to PDF/Excel."
      }
    },

    testimonials: {
      title: "What Our Customers Say",
      metrics: {
        cost: "Cost Reduction",
        costDesc: "In preventive maintenance",
        time: "Time Saved",
        timeDesc: "In manual inspections", 
        compliance: "Compliance",
        complianceDesc: "With FPS regulations",
        failures: "Fewer Failures",
        failuresDesc: "Through predictive maintenance"
      },
      cta: {
        title: "Ready to Transform Your FPS Management?",
        text: "Join over 500 companies that trust SIGECO for their fire protection",
        demo: "Request Demo",
        contact: "Contact Now",
        features: {
          demo: "Demo with no commitment",
          fast: "Fast implementation",
          custom: "Total customization"
        }
      }
    },

    demo: {
      badge: "Free Demo • No Commitment",
      title: "Discover SIGECO", 
      subtitle: "in 15 minutes",
      description: "Schedule a personalized demo and discover how SIGECO can transform your fire protection management with predictive AI.",
      benefits: {
        instant: "Instant setup",
        expert: "Dedicated expert",
        analysis: "Personalized analysis"
      },
      formTitle: "Schedule your Demo",
      formSubtitle: "Complete your information and we'll contact you within 2 hours",
      steps: {
        personal: "Personal Information",
        company: "Company Information",
        preferences: "Demo Preferences"
      },
      fields: {
        name: "Full name",
        email: "Email address",
        phone: "Phone / WhatsApp", 
        company: "Company",
        industry: "Industry",
        extinguishers: "Approximate number of extinguishers",
        demoType: "Preferred demo type",
        comments: "Additional comments"
      },
      placeholders: {
        name: "E.g: John Smith",
        email: "john@company.com",
        phone: "+1 555 123 4567",
        company: "Your company name",
        comments: "Tell us about your specific needs, current challenges or questions..."
      },
      industries: {
        select: "Select your industry",
        manufacturing: "Manufacturing",
        construction: "Construction",
        health: "Healthcare",
        logistics: "Logistics",
        energy: "Energy",
        food: "Food & Beverage", 
        mining: "Mining",
        other: "Other"
      },
      extinguisherCounts: {
        select: "Select quantity",
        small: "1 - 50 extinguishers",
        medium: "51 - 200 extinguishers",
        large: "201 - 500 extinguishers",
        xlarge: "More than 500 extinguishers"
      },
      demoTypes: {
        online: "Online Demo",
        onlineDesc: "15-minute video call",
        onsite: "On-site Demo", 
        onsiteDesc: "Visit to your facilities"
      },
      buttons: {
        continue: "Continue",
        previous: "Previous",
        submit: "Request Demo"
      },
      testimonial: "SIGECO's demo convinced us immediately. We implemented the system in 2 weeks."
    },

    chat: {
      toggle: "Support chat",
      agent: "SIGECO Support",
      status: "Online • Avg response 2min",
      welcome: "Hi! 👋 I'm your SIGECO assistant. How can I help you today?",
      placeholder: "Type your question here...",
      faqTitle: "Frequently asked questions:",
      faq: {
        register: "🔥 How do I register extinguishers?",
        alerts: "⚙️ How do I configure alerts?",
        integration: "🔗 Is there ERP integration?", 
        ai: "🤖 How does predictive AI work?",
        pricing: "💰 What are the prices?"
      },
      answers: {
        register: "Use SIGECO's mobile app to scan QR or NFC codes on each extinguisher. The system automatically records GPS location, date/time and equipment status. You can also create new records manually from the web panel.",
        alerts: "Go to Settings → Alerts in your dashboard. You can configure email, SMS or push notifications for: upcoming expirations, scheduled maintenance, pending inspections and predictive AI alerts. Customize anticipation times according to your needs.",
        integration: "Yes, SIGECO integrates natively with ERP systems like SAP, Odoo, Microsoft Dynamics and Bitrix24. We also offer complete REST API for custom integrations. The integration process includes data mapping and bidirectional synchronization.",
        ai: "SIGECO uses predictive AI to analyze historical patterns, environmental conditions and IoT sensor data. The system predicts possible failures up to 30 days in advance, optimizes maintenance routes and suggests preventive replacements based on machine learning.",
        pricing: "We offer multiple plans: Basic (up to 50 extinguishers), Professional (up to 500), Enterprise (unlimited) and Custom. We include implementation, training, 24/7 support and updates. Request a demo to learn specific pricing."
      },
      contacts: {
        whatsapp: "WhatsApp", 
        demo: "Free Demo",
        phone: "Call Now"
      }
    },

    modal: {
      title: "Send Demo Request",
      summary: "📋 Summary of your request:",
      options: "🚀 Choose how to send your request:",
      whatsapp: {
        title: "WhatsApp (Recommended)",
        desc: "Immediate response • Direct coordination",
        button: "Send via WhatsApp"
      },
      email: {
        title: "Email",
        desc: "Formal record • Response in 2-4 hours", 
        button: "Send via Email"
      },
      cancel: "Cancel",
      success: {
        whatsapp: "Request sent via WhatsApp! 📱 We'll respond immediately.",
        email: "Request sent via Email! 📧 We'll contact you within 2-4 hours."
      }
    },

    common: {
      loading: "Sending...",
      required: "*",
      close: "Close"
    }
  },

  // Português
  pt: {
    nav: {
      home: "Início",
      why: "Por que SIGECO?",
      usecases: "Casos de Uso",
      testimonials: "Depoimentos",
      demo: "Demo"
    },

    hero: {
      badge: "Sistema SCI de Nova Geração", 
      title: "SIGECO",
      subtitle: "Sistema Contra Incêndios",
      lead1: "Gestão inteligente",
      lead2: "automação de inspeções",
      lead3: "desenvolvimento sob medida",
      leadText: " com IA preditiva, ",
      leadText2: " e ",
      leadText3: " para sua empresa.",
      features: {
        fast: "Implementação Rápida",
        secure: "100% Seguro",
        mobile: "App Mobile"
      },
      cta: "Solicitar Demo Grátis",
      ctaSub: "Sem compromisso • 15 minutos",
      stats: {
        companies: "Empresas",
        availability: "Disponibilidade",
        support: "Suporte"
      },
      social: "Empresas líderes já usam SIGECO:",
      notification: "Sistema online • Extintor B-204 inspecionado"
    },

    features: {
      title: "Por que SIGECO?",
      specialist: {
        title: "Especialistas em SCI",
        desc: "Conhecimento profundo em engenharia de sistemas contra incêndios com certificações internacionais.",
        badge: "Certificado NFPA"
      },
      ai: {
        title: "Alertas Preditivos",
        desc: "Inteligência artificial que antecipa vencimentos e detecta padrões de possíveis falhas.",
        badge: "IA Avançada"
      },
      custom: {
        title: "Desenvolvimento Sob Medida",
        desc: "Integrações nativas com ERP, CRM e sistemas empresariais existentes.",
        badge: "API REST"
      },
      automation: {
        title: "Automação Total", 
        desc: "Fluxos de trabalho inteligentes que otimizam as operações de campo.",
        badge: "IoT Ready"
      }
    },

    usecases: {
      title: "Casos de Uso",
      inspection: {
        tab: "Inspeção",
        title: "Inspeção de Campo",
        desc: "Escaneie códigos QR/NFC em cada extintor; registre localizações no mapa; gere checklists dinâmicas."
      },
      maintenance: {
        tab: "Manutenção",
        title: "Manutenção Programada",
        desc: "Planeje ordens de trabalho; otimize rotas com geolocalização; receba alertas antes do vencimento."
      },
      reports: {
        tab: "Relatório Executivo",
        title: "Relatórios Executivos", 
        desc: "Dashboards personalizáveis; análise de custos e conformidade; exportação para PDF/Excel."
      }
    },

    testimonials: {
      title: "O Que Dizem Nossos Clientes",
      metrics: {
        cost: "Redução de Custos",
        costDesc: "Em manutenção preventiva",
        time: "Tempo Economizado",
        timeDesc: "Em inspeções manuais",
        compliance: "Conformidade",
        complianceDesc: "Com normas SCI",
        failures: "Menos Falhas",
        failuresDesc: "Por manutenção preditiva"
      },
      cta: {
        title: "Pronto para Transformar sua Gestão de SCI?",
        text: "Junte-se a mais de 500 empresas que já confiam no SIGECO para sua proteção contra incêndios",
        demo: "Solicitar Demo",
        contact: "Contatar Agora", 
        features: {
          demo: "Demo sem compromisso",
          fast: "Implementação rápida",
          custom: "Personalização total"
        }
      }
    },

    demo: {
      badge: "Demo Grátis • Sem Compromisso",
      title: "Descubra o SIGECO",
      subtitle: "em 15 minutos",
      description: "Agende uma demo personalizada e descubra como o SIGECO pode transformar sua gestão de proteção contra incêndios com IA preditiva.",
      benefits: {
        instant: "Configuração imediata",
        expert: "Especialista dedicado",
        analysis: "Análise personalizada"
      },
      formTitle: "Agende sua Demo",
      formSubtitle: "Complete seus dados e entraremos em contato em menos de 2 horas",
      steps: {
        personal: "Informações Pessoais",
        company: "Informações da Empresa",
        preferences: "Preferências da Demo"
      },
      fields: {
        name: "Nome completo",
        email: "Endereço de e-mail", 
        phone: "Telefone / WhatsApp",
        company: "Empresa",
        industry: "Setor",
        extinguishers: "Número aproximado de extintores",
        demoType: "Tipo de demo preferido",
        comments: "Comentários adicionais"
      },
      placeholders: {
        name: "Ex: João Silva",
        email: "joao@empresa.com",
        phone: "+55 11 99999-9999",
        company: "Nome da sua empresa",
        comments: "Conte-nos sobre suas necessidades específicas, desafios atuais ou perguntas..."
      },
      industries: {
        select: "Selecione seu setor",
        manufacturing: "Manufatura",
        construction: "Construção",
        health: "Saúde",
        logistics: "Logística",
        energy: "Energia",
        food: "Alimentícia",
        mining: "Mineração",
        other: "Outro"
      },
      extinguisherCounts: {
        select: "Selecione a quantidade",
        small: "1 - 50 extintores", 
        medium: "51 - 200 extintores",
        large: "201 - 500 extintores",
        xlarge: "Mais de 500 extintores"
      },
      demoTypes: {
        online: "Demo Online",
        onlineDesc: "Videochamada de 15 minutos",
        onsite: "Demo Presencial",
        onsiteDesc: "Visita às suas instalações"
      },
      buttons: {
        continue: "Continuar",
        previous: "Anterior",
        submit: "Solicitar Demo"
      },
      testimonial: "A demo do SIGECO nos convenceu imediatamente. Implementamos o sistema em 2 semanas."
    },

    chat: {
      toggle: "Chat de suporte",
      agent: "Suporte SIGECO",
      status: "Online • Resposta média 2min",
      welcome: "Olá! 👋 Sou seu assistente do SIGECO. Como posso ajudá-lo hoje?",
      placeholder: "Digite sua pergunta aqui...",
      faqTitle: "Perguntas frequentes:",
      faq: {
        register: "🔥 Como registro extintores?",
        alerts: "⚙️ Como configuro alertas?",
        integration: "🔗 Há integração com ERP?",
        ai: "🤖 Como funciona a IA preditiva?", 
        pricing: "💰 Quais são os preços?"
      },
      answers: {
        register: "Use o app mobile do SIGECO para escanear códigos QR ou NFC de cada extintor. O sistema registra automaticamente localização GPS, data/hora e status do equipamento. Você também pode criar novos registros manualmente no painel web.",
        alerts: "Vá em Configurações → Alertas no seu dashboard. Você pode configurar notificações por email, SMS ou push para: vencimentos próximos, manutenções programadas, inspeções pendentes e alertas de IA preditiva. Personalize os tempos de antecipação conforme suas necessidades.",
        integration: "Sim, o SIGECO integra nativamente com sistemas ERP como SAP, Odoo, Microsoft Dynamics e Bitrix24. Também oferecemos API REST completa para integrações personalizadas. O processo de integração inclui mapeamento de dados e sincronização bidirecional.",
        ai: "O SIGECO utiliza IA preditiva para analisar padrões históricos, condições ambientais e dados de sensores IoT. O sistema prevê possíveis falhas até 30 dias antes, otimiza rotas de manutenção e sugere substituições preventivas baseadas em machine learning.",
        pricing: "Oferecemos múltiplos planos: Básico (até 50 extintores), Profissional (até 500), Empresarial (ilimitado) e Personalizado. Incluímos implementação, treinamento, suporte 24/7 e atualizações. Solicite uma demo para conhecer preços específicos."
      },
      contacts: {
        whatsapp: "WhatsApp",
        demo: "Demo Grátis",
        phone: "Ligar Agora"
      }
    },

    modal: {
      title: "Enviar Solicitação de Demo",
      summary: "📋 Resumo da sua solicitação:",
      options: "🚀 Escolha como enviar sua solicitação:", 
      whatsapp: {
        title: "WhatsApp (Recomendado)",
        desc: "Resposta imediata • Coordenação direta",
        button: "Enviar via WhatsApp"
      },
      email: {
        title: "E-mail",
        desc: "Registro formal • Resposta em 2-4 horas",
        button: "Enviar via E-mail"
      },
      cancel: "Cancelar",
      success: {
        whatsapp: "Solicitação enviada via WhatsApp! 📱 Responderemos imediatamente.",
        email: "Solicitação enviada via E-mail! 📧 Entraremos em contato nas próximas 2-4 horas."
      }
    },

    common: {
      loading: "Enviando...",
      required: "*",
      close: "Fechar"
    }
  }
};

// Sistema de gestão de idioma
class LanguageManager {
  constructor() {
    this.currentLanguage = localStorage.getItem('sigeco-language') || 'es';
    this.init();
  }

  init() {
    this.initializeSelector();
    this.updateContent();
    this.bindEvents();
  }

  initializeSelector() {
    // Actualizar el selector existente con el idioma guardado
    const currentLangSpan = document.querySelector('.current-lang');
    if (currentLangSpan) {
      currentLangSpan.textContent = this.currentLanguage.toUpperCase();
    }

    // Actualizar las opciones activas
    document.querySelectorAll('.language-option').forEach(option => {
      option.classList.toggle('active', option.dataset.lang === this.currentLanguage);
    });
  }

  bindEvents() {
    const toggle = document.getElementById('languageToggle');
    const dropdown = document.getElementById('languageDropdown');

    if (toggle && dropdown) {
      toggle.addEventListener('click', () => {
        dropdown.classList.toggle('active');
      });

      // Cerrar dropdown al hacer click fuera
      document.addEventListener('click', (e) => {
        if (!toggle.contains(e.target) && !dropdown.contains(e.target)) {
          dropdown.classList.remove('active');
        }
      });

      // Cambio de idioma
      dropdown.addEventListener('click', (e) => {
        const langOption = e.target.closest('.language-option');
        if (langOption) {
          const newLang = langOption.dataset.lang;
          this.changeLanguage(newLang);
          dropdown.classList.remove('active');
        }
      });
    }
  }

  changeLanguage(newLang) {
    if (newLang === this.currentLanguage) return;

    this.currentLanguage = newLang;
    localStorage.setItem('sigeco-language', newLang);
    
    // Actualizar selector visual
    const currentLangSpan = document.querySelector('.current-lang');
    if (currentLangSpan) {
      currentLangSpan.textContent = newLang.toUpperCase();
    }

    // Actualizar opciones activas
    document.querySelectorAll('.language-option').forEach(option => {
      option.classList.toggle('active', option.dataset.lang === newLang);
    });

    // Actualizar todo el contenido
    this.updateContent();

    // Regenerar FAQ del chat con nuevo idioma
    this.updateChatFAQ();
  }

  updateContent() {
    const lang = translations[this.currentLanguage];
    if (!lang) return;

    // Actualizar navegación
    this.updateNavigation(lang.nav);
    
    // Actualizar hero section
    this.updateHeroSection(lang.hero);
    
    // Actualizar features
    this.updateFeatures(lang.features);
    
    // Actualizar casos de uso
    this.updateUseCases(lang.usecases);
    
    // Actualizar testimonials
    this.updateTestimonials(lang.testimonials);
    
    // Actualizar demo form
    this.updateDemoForm(lang.demo);
    
    // Actualizar chat
    this.updateChat(lang.chat);
  }

  updateNavigation(nav) {
    const navLinks = {
      '#hero': nav.home,
      '#features': nav.why,
      '#usecases': nav.usecases,
      '#testimonials': nav.testimonials,
      '#demo': nav.demo
    };

    document.querySelectorAll('.nav-links a').forEach(link => {
      const href = link.getAttribute('href');
      if (navLinks[href]) {
        if (href === '#demo') {
          link.textContent = navLinks[href];
        } else {
          link.textContent = navLinks[href];
        }
      }
    });
  }

  updateHeroSection(hero) {
    // Badge
    const badge = document.querySelector('.hero-badge .badge-text');
    if (badge) badge.textContent = hero.badge;

    // Title y subtitle  
    const titleMain = document.querySelector('.title-main');
    if (titleMain) titleMain.textContent = hero.title;
    
    const titleSub = document.querySelector('.title-sub');
    if (titleSub) titleSub.textContent = hero.subtitle;

    // Lead text
    const lead = document.querySelector('.lead');
    if (lead) {
      lead.innerHTML = `
        <span class="lead-highlight">${hero.lead1}</span>${hero.leadText}
        <span class="lead-highlight">${hero.lead2}</span>${hero.leadText2}
        <span class="lead-highlight">${hero.lead3}</span>${hero.leadText3}
      `;
    }

    // Features
    const miniFeatures = document.querySelectorAll('.mini-feature span:last-child');
    if (miniFeatures.length >= 3) {
      miniFeatures[0].textContent = hero.features.fast;
      miniFeatures[1].textContent = hero.features.secure;
      miniFeatures[2].textContent = hero.features.mobile;
    }

    // CTA Button
    const ctaBtn = document.querySelector('.btn-glow .btn-text');
    if (ctaBtn) ctaBtn.textContent = hero.cta;
    
    const ctaSub = document.querySelector('.btn-glow .btn-subtext');
    if (ctaSub) ctaSub.textContent = hero.ctaSub;

    // Stats
    const stats = document.querySelectorAll('.stat-label');
    if (stats.length >= 3) {
      stats[0].textContent = hero.stats.companies;
      stats[1].textContent = hero.stats.availability;
      stats[2].textContent = hero.stats.support;
    }

    // Social proof
    const socialText = document.querySelector('.social-text');
    if (socialText) socialText.textContent = hero.social;

    // Notification
    const notification = document.querySelector('.notification-text');
    if (notification) notification.textContent = hero.notification;
  }

  updateFeatures(features) {
    const sectionTitle = document.querySelector('#features .section-title');
    if (sectionTitle) sectionTitle.textContent = features.title;

    const cards = document.querySelectorAll('#features .card');
    const featureData = [features.specialist, features.ai, features.custom, features.automation];

    cards.forEach((card, index) => {
      if (featureData[index]) {
        const title = card.querySelector('h3');
        const desc = card.querySelector('p');
        const badge = card.querySelector('.badge');

        if (title) title.textContent = featureData[index].title;
        if (desc) desc.textContent = featureData[index].desc;
        if (badge) badge.textContent = featureData[index].badge;
      }
    });
  }

  updateUseCases(usecases) {
    const sectionTitle = document.querySelector('#usecases .section-title');
    if (sectionTitle) sectionTitle.textContent = usecases.title;

    // Tab buttons
    const tabBtns = document.querySelectorAll('.tab-btn');
    if (tabBtns.length >= 3) {
      tabBtns[0].textContent = usecases.inspection.tab;
      tabBtns[1].textContent = usecases.maintenance.tab;
      tabBtns[2].textContent = usecases.reports.tab;
    }

    // Tab content
    const usecaseData = [usecases.inspection, usecases.maintenance, usecases.reports];
    const tabContents = document.querySelectorAll('.tab-content');

    tabContents.forEach((content, index) => {
      if (usecaseData[index]) {
        const title = content.querySelector('h3');
        const desc = content.querySelector('p');

        if (title) title.textContent = usecaseData[index].title;
        if (desc) desc.textContent = usecaseData[index].desc;
      }
    });
  }

  updateTestimonials(testimonials) {
    const sectionTitle = document.querySelector('#testimonials .section-title');
    if (sectionTitle) sectionTitle.textContent = testimonials.title;

    // Metrics
    const metricLabels = document.querySelectorAll('.metric-label');
    const metricDescs = document.querySelectorAll('.metric-desc');
    const metrics = [testimonials.metrics.cost, testimonials.metrics.time, testimonials.metrics.compliance, testimonials.metrics.failures];
    const metricDescriptions = [testimonials.metrics.costDesc, testimonials.metrics.timeDesc, testimonials.metrics.complianceDesc, testimonials.metrics.failuresDesc];

    metricLabels.forEach((label, index) => {
      if (metrics[index]) label.textContent = metrics[index];
    });

    metricDescs.forEach((desc, index) => {
      if (metricDescriptions[index]) desc.textContent = metricDescriptions[index];
    });

    // CTA Section
    const ctaTitle = document.querySelector('.cta-title');
    if (ctaTitle) ctaTitle.textContent = testimonials.cta.title;

    const ctaText = document.querySelector('.cta-text');
    if (ctaText) ctaText.textContent = testimonials.cta.text;

    const ctaBtns = document.querySelectorAll('.cta-actions .btn .btn-text');
    if (ctaBtns.length >= 2) {
      ctaBtns[0].textContent = testimonials.cta.demo;
      ctaBtns[1].textContent = testimonials.cta.contact;
    }

    const featureItems = document.querySelectorAll('.feature-item span');
    const ctaFeatures = [testimonials.cta.features.demo, testimonials.cta.features.fast, testimonials.cta.features.custom];
    featureItems.forEach((item, index) => {
      if (ctaFeatures[index]) item.textContent = ctaFeatures[index];
    });
  }

  updateDemoForm(demo) {
    // Badge y títulos
    const demoBadge = document.querySelector('.demo-badge .badge-text');
    if (demoBadge) demoBadge.textContent = demo.badge;

    const titleHighlight = document.querySelector('.title-highlight');
    if (titleHighlight) titleHighlight.textContent = demo.title;

    const titleSubtitle = document.querySelector('.title-subtitle');
    if (titleSubtitle) titleSubtitle.textContent = demo.subtitle;

    const demoDesc = document.querySelector('.demo-description');
    if (demoDesc) demoDesc.textContent = demo.description;

    // Benefits
    const benefitTexts = document.querySelectorAll('.benefit-text');
    const benefits = [demo.benefits.instant, demo.benefits.expert, demo.benefits.analysis];
    benefitTexts.forEach((text, index) => {
      if (benefits[index]) text.textContent = benefits[index];
    });

    // Form header
    const formTitle = document.querySelector('.form-title');
    if (formTitle) formTitle.textContent = demo.formTitle;

    const formSubtitle = document.querySelector('.form-subtitle');
    if (formSubtitle) formSubtitle.textContent = demo.formSubtitle;

    // Step indicators
    const stepTitles = document.querySelectorAll('.step-title');
    const steps = [demo.steps.personal, demo.steps.company, demo.steps.preferences];
    stepTitles.forEach((title, index) => {
      if (steps[index]) title.textContent = steps[index];
    });

    // Labels y placeholders
    this.updateFormLabelsAndPlaceholders(demo);

    // Buttons
    const nextBtns = document.querySelectorAll('.next-step .btn-text');
    nextBtns.forEach(btn => btn.textContent = demo.buttons.continue);

    const prevBtns = document.querySelectorAll('.prev-step .btn-text');
    prevBtns.forEach(btn => btn.textContent = demo.buttons.previous);

    const submitBtn = document.querySelector('.submit-btn .btn-text');
    if (submitBtn) submitBtn.textContent = demo.buttons.submit;

    // Testimonial
    const testimonialContent = document.querySelector('.form-testimonial .testimonial-content');
    if (testimonialContent) testimonialContent.textContent = `"${demo.testimonial}"`;
  }

  updateFormLabelsAndPlaceholders(demo) {
    // Labels
    const labels = {
      'name': demo.fields.name,
      'email': demo.fields.email,
      'phone': demo.fields.phone,
      'company': demo.fields.company,
      'industry': demo.fields.industry,
      'extinguishers': demo.fields.extinguishers,
      'demo-type': demo.fields.demoType,
      'comments': demo.fields.comments
    };

    Object.keys(labels).forEach(fieldName => {
      const label = document.querySelector(`label[for="${fieldName}"]`);
      if (label) {
        const required = label.textContent.includes('*') ? ' *' : '';
        label.textContent = labels[fieldName] + required;
      }
    });

    // Placeholders
    const placeholders = {
      'name': demo.placeholders.name,
      'email': demo.placeholders.email,
      'phone': demo.placeholders.phone,
      'company': demo.placeholders.company,
      'comments': demo.placeholders.comments
    };

    Object.keys(placeholders).forEach(fieldName => {
      const input = document.querySelector(`#${fieldName}`);
      if (input) input.placeholder = placeholders[fieldName];
    });

    // Select options
    this.updateSelectOptions(demo);

    // Radio options
    this.updateRadioOptions(demo);
  }

  updateSelectOptions(demo) {
    // Industry select
    const industrySelect = document.getElementById('industry');
    if (industrySelect) {
      const options = industrySelect.querySelectorAll('option');
      if (options.length > 0) {
        options[0].textContent = demo.industries.select;
        options[1].textContent = demo.industries.manufacturing;
        options[2].textContent = demo.industries.construction;
        options[3].textContent = demo.industries.health;
        options[4].textContent = demo.industries.logistics;
        options[5].textContent = demo.industries.energy;
        options[6].textContent = demo.industries.food;
        options[7].textContent = demo.industries.mining;
        options[8].textContent = demo.industries.other;
      }
    }

    // Extinguishers select
    const extinguishersSelect = document.getElementById('extinguishers');
    if (extinguishersSelect) {
      const options = extinguishersSelect.querySelectorAll('option');
      if (options.length > 0) {
        options[0].textContent = demo.extinguisherCounts.select;
        options[1].textContent = demo.extinguisherCounts.small;
        options[2].textContent = demo.extinguisherCounts.medium;
        options[3].textContent = demo.extinguisherCounts.large;
        options[4].textContent = demo.extinguisherCounts.xlarge;
      }
    }
  }

  updateRadioOptions(demo) {
    const radioContents = document.querySelectorAll('.radio-content');
    if (radioContents.length >= 2) {
      // Online demo
      radioContents[0].innerHTML = `
        <strong>${demo.demoTypes.online}</strong>
        <small>${demo.demoTypes.onlineDesc}</small>
      `;

      // Onsite demo  
      radioContents[1].innerHTML = `
        <strong>${demo.demoTypes.onsite}</strong>
        <small>${demo.demoTypes.onsiteDesc}</small>
      `;
    }
  }

  updateChat(chat) {
    // Agent info
    const agentName = document.querySelector('.agent-name');
    if (agentName) agentName.textContent = chat.agent;

    const agentStatus = document.querySelector('.agent-status');
    if (agentStatus) agentStatus.textContent = chat.status;

    // Welcome message
    const welcomeMessage = document.querySelector('.agent-message .message-content');
    if (welcomeMessage) welcomeMessage.textContent = chat.welcome;

    // Input placeholder
    const chatInput = document.getElementById('chat-input');
    if (chatInput) chatInput.placeholder = chat.placeholder;

    // FAQ title
    const faqTitle = document.querySelector('.questions-title');
    if (faqTitle) faqTitle.textContent = chat.faqTitle;

    // Contact buttons
    const contactTexts = document.querySelectorAll('.contact-text');
    const contacts = [chat.contacts.whatsapp, chat.contacts.demo, chat.contacts.phone];
    contactTexts.forEach((text, index) => {
      if (contacts[index]) text.textContent = contacts[index];
    });
  }

  updateChatFAQ() {
    const lang = translations[this.currentLanguage];
    if (!lang) return;

    const faqButtons = document.querySelectorAll('.question-btn');
    const faqData = [
      { question: lang.chat.faq.register, answer: lang.chat.answers.register },
      { question: lang.chat.faq.alerts, answer: lang.chat.answers.alerts },
      { question: lang.chat.faq.integration, answer: lang.chat.answers.integration },
      { question: lang.chat.faq.ai, answer: lang.chat.answers.ai },
      { question: lang.chat.faq.pricing, answer: lang.chat.answers.pricing }
    ];

    faqButtons.forEach((button, index) => {
      if (faqData[index]) {
        button.textContent = faqData[index].question;
        button.setAttribute('data-question', faqData[index].question);
        button.setAttribute('data-answer', faqData[index].answer);
      }
    });
  }

  // Método para obtener traducción actual
  t(key) {
    const keys = key.split('.');
    let value = translations[this.currentLanguage];
    
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }
    
    return value;
  }

  // Formatear datos del formulario según idioma
  formatDemoDataForLanguage(data) {
    const lang = translations[this.currentLanguage];
    
    const industryLabels = {
      'manufactura': lang.demo.industries.manufacturing || 'Manufacturing',
      'construccion': lang.demo.industries.construction || 'Construction',
      'salud': lang.demo.industries.health || 'Healthcare',
      'logistica': lang.demo.industries.logistics || 'Logistics', 
      'energia': lang.demo.industries.energy || 'Energy',
      'alimentaria': lang.demo.industries.food || 'Food',
      'mineria': lang.demo.industries.mining || 'Mining',
      'otro': lang.demo.industries.other || 'Other'
    };
    
    const extinctorLabels = {
      '1-50': lang.demo.extinguisherCounts.small || '1 - 50 extinguishers',
      '51-200': lang.demo.extinguisherCounts.medium || '51 - 200 extinguishers',
      '201-500': lang.demo.extinguisherCounts.large || '201 - 500 extinguishers',
      '500+': lang.demo.extinguisherCounts.xlarge || 'More than 500 extinguishers'
    };
    
    const demoTypeLabels = {
      'online': `${lang.demo.demoTypes.online} (${lang.demo.demoTypes.onlineDesc})`,
      'presencial': `${lang.demo.demoTypes.onsite} (${lang.demo.demoTypes.onsiteDesc})`
    };
    
    return {
      nombre: data.name || 'Not specified',
      email: data.email || 'Not specified',
      telefono: data.phone || 'Not specified', 
      empresa: data.company || 'Not specified',
      industria: industryLabels[data.industry] || 'Not specified',
      extintores: extinctorLabels[data.extinguishers] || 'Not specified',
      tipoDemo: demoTypeLabels[data['demo-type']] || lang.demo.demoTypes.online,
      comentarios: data.comments || 'No additional comments',
      fecha: new Date().toLocaleString(this.getLocaleCode(), {
        weekday: 'long',
        year: 'numeric',
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };
  }

  getLocaleCode() {
    const locales = {
      'es': 'es-ES',
      'en': 'en-US', 
      'pt': 'pt-BR'
    };
    return locales[this.currentLanguage] || 'es-ES';
  }
}

// Inicializar el sistema de idiomas cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  window.languageManager = new LanguageManager();
});

// Exportar para uso global
window.translations = translations;