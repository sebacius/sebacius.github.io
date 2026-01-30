/**
 * Sebastian Sastre's BBS - Retro Modern Terminal Portfolio
 * Inspired by sngrep and classic BBS systems
 */

(function () {
  'use strict';

  // ============================================
  // MENU CONFIGURATION
  // ============================================

  const menuItems = [
    { key: 'A', label: 'About Me', section: 'about' },
    { key: 'C', label: 'Career', section: 'career' },
    { key: 'P', label: 'PCAP', section: 'experience' },
    { key: 'S', label: 'Skills', section: 'skills' },
    { key: 'F', label: 'Find Me', section: 'contact' },
    { key: 'H', label: 'Help', section: 'help' },
  ];

  // ============================================
  // CONTENT
  // ============================================

  const content = {
    about: `
<div class="text-bbs-cyan font-bold mb-4">About Sebastian Sastre</div>

<div class="flex gap-4 mb-4">
<img src="/sebacius.png" alt="Sebastian Sastre" class="w-14 flex-shrink-0 rounded object-contain">
<div class="text-bbs-text">
<span class="text-bbs-yellow">VoIP Engineer</span> with <span class="text-bbs-green">20+ years</span>
in telecom. I lead teams, architect systems, and still get my hands dirty
in code and SIP traces when it matters.
</div>
</div>

<div class="text-bbs-text mb-4">
I build cloud-native voice infrastructure at scale. Currently driving architecture
for platforms handling <span class="text-bbs-cyan">500K+ devices</span> and <span class="text-bbs-cyan">billions of minutes</span>.
Now integrating AI into real-time voice—where traditional telephony meets
intelligent automation.
</div>

<div class="text-bbs-yellow mb-2">What I Bring:</div>
<div class="text-bbs-text ml-4 mb-4">
  <span class="text-bbs-green">></span> Deep protocol expertise—Kamailio, FreeSWITCH, SIP inside and out<br>
  <span class="text-bbs-green">></span> Cloud-native architecture at national scale<br>
  <span class="text-bbs-green">></span> Technical leadership with a bias for shipping<br>
  <span class="text-bbs-green">></span> The rare engineer who reads SIP traces for fun
</div>

<div class="text-bbs-muted">
From calling cards to AI-driven voice platforms—I've seen telecom evolve
and helped build what comes next.
</div>
`,

    skills: `
<div class="text-bbs-cyan font-bold mb-4">Technical Skills</div>

<div class="text-bbs-yellow mb-2">VoIP & Telecom</div>
<div class="text-bbs-text ml-4 mb-4">
  Kamailio, FreeSWITCH, OpenSIPS, Asterisk, Yate<br>
  SIP, RTP, WebRTC, SRTP, oHRTP Protocol Design<br>
  Pion, GoSIP—comfortable deep in the protocol stack
</div>

<div class="text-bbs-yellow mb-2">SIP Analysis & Debugging</div>
<div class="text-bbs-text ml-4 mb-4">
  sngrep, tshark, Wireshark, Homer<br>
  <span class="text-bbs-muted">I read SIP traces for fun.</span>
</div>

<div class="text-bbs-yellow mb-2">AI & Voice AI</div>
<div class="text-bbs-text ml-4 mb-4">
  ChatGPT, Claude, Gemini, Claude Code, Ollama, Pipecat<br>
  Whisper, Deepgram, ElevenLabs, LangChain, OpenAI API
</div>

<div class="text-bbs-yellow mb-2">Languages</div>
<div class="text-bbs-text ml-4 mb-4">
  <span class="text-bbs-green">Go</span> (primary), Python, C, PHP, Perl, Bash, JavaScript, Lua<br>
  <span class="text-bbs-muted">Deep low-level knowledge makes picking up new languages easy.
  And with AI-assisted coding, the language matters less than the thinking.</span>
</div>

<div class="text-bbs-yellow mb-2">Infrastructure & DevOps</div>
<div class="text-bbs-text ml-4 mb-4">
  Kubernetes, Docker, Terraform, Ansible, ArgoCD<br>
  GCP, AWS, DigitalOcean
</div>

<div class="text-bbs-yellow mb-2">Observability</div>
<div class="text-bbs-text ml-4 mb-4">
  Prometheus, Grafana, ELK Stack, Jaeger
</div>

<div class="text-bbs-yellow mb-2">Databases</div>
<div class="text-bbs-text ml-4">
  PostgreSQL, Redis, MySQL, TimescaleDB
</div>
`,

    experience: `
<div class="mb-6">
  <div class="text-bbs-yellow font-bold">Principal / Staff VoIP Engineer</div>
  <div class="text-bbs-cyan">Weave</div>
  <div class="text-bbs-muted text-sm mb-2">Nov 2019 - Present · 6+ yrs</div>
  <div class="text-bbs-text ml-4">
    Joined to scale voice infrastructure for month-over-month growth.
    Now architecting the Weave platform at national scale—500K+ devices,
    billions of minutes, 99.99% uptime. E911, presence, LCR, Voice AI agents,
    queues, IVRs, recordings, transcriptions, call analytics, intelligent
    routing. Multi-datacenter failover across the US with Anycast global
    load routing. The works.
  </div>
</div>

<div class="mb-6">
  <div class="text-bbs-yellow font-bold">Senior SIP Engineer</div>
  <div class="text-bbs-cyan">Great HealthWorks</div>
  <div class="text-bbs-muted text-sm mb-2">Jan 2016 - Nov 2019 · 3 yrs 10 mos</div>
  <div class="text-bbs-text ml-4">
    Built WebRTC softphone-based call center for customer support—supervisor
    modules, HIPAA-compliant. Carrier-grade reliability. Replaced legacy
    Cisco Call Manager with Kazoo platform.
  </div>
</div>

<div class="mb-6">
  <div class="text-bbs-yellow font-bold">VoIP Developer</div>
  <div class="text-bbs-cyan">IPCom</div>
  <div class="text-bbs-muted text-sm mb-2">Mar 2011 - Dec 2016 · 5 yrs 9 mos</div>
  <div class="text-bbs-text ml-4">
    Implemented SIP proxies and open-source gateways for call routing and
    quality control. Built automated dialers, predictive, TTS, ASR, surveys,
    etc. Engineered mass SMS platform (200K msgs/hour). Led dev team.
  </div>
</div>

<div class="mb-6">
  <div class="text-bbs-yellow font-bold">NOC Engineer</div>
  <div class="text-bbs-cyan">Next Communications</div>
  <div class="text-bbs-muted text-sm mb-2">Sep 2008 - Feb 2011 · 2 yrs 5 mos</div>
  <div class="text-bbs-text ml-4">
    Designed and deployed OpenSIPS SBC for central load balancing of all
    inbound traffic. Troubleshooting Cisco network issues and configurations.
  </div>
</div>

<div class="text-bbs-muted">
For complete history, visit my LinkedIn or type 'F' to find me.
</div>
`,

    career: `
<div class="text-bbs-text mb-4">
Two decades in telecom. I've worn many hats: tech lead, developer, project
manager—sometimes all three at once. Part of teams that built successful
enterprises from the ground up, working with product owners to shape
solutions meant to last.
</div>

<div class="text-bbs-yellow mb-2">Key Areas of Focus:</div>

<div class="mb-5">
  <div class="text-bbs-green font-bold">AI-Driven Voice Infrastructure</div>
  <div class="text-bbs-text ml-4">
    Integrating AI into real-time voice systems—bridging the gap between
    traditional telephony and intelligent automation. AI woven into the
    architecture, not bolted on.
  </div>
</div>

<div class="mb-5">
  <div class="text-bbs-green font-bold">Enterprise VoIP Infrastructure</div>
  <div class="text-bbs-text ml-4">
    Cloud-native, nationwide platform architecture at Weave—
    <span class="text-bbs-cyan">500K+ devices</span>, <span class="text-bbs-cyan">15K+ concurrent calls</span>,
    over <span class="text-bbs-cyan">1 billion minutes</span>. Multi-regional, resilient by design.
  </div>
</div>

<div class="mb-5">
  <div class="text-bbs-green font-bold">Wholesale Carrier Operations</div>
  <div class="text-bbs-text ml-4">
    Wholesale VoIP from inception to successful operation. Routing engines,
    LCR optimization, billing systems, CDR pipelines—the full stack to run
    telecom at scale.
  </div>
</div>

<div class="mb-5">
  <div class="text-bbs-green font-bold">Call Center Technology</div>
  <div class="text-bbs-text ml-4">
    Predictive and broadcast dialer platforms for contact centers with 150+
    agents. Multi-tenant with layered management and supervisor modules.
    Evolved over the years to WebRTC softphones.
  </div>
</div>

<div class="mb-5">
  <div class="text-bbs-green font-bold">Prepaid & Calling Card Systems</div>
  <div class="text-bbs-text ml-4">
    Where it started. Calling card platforms with Asterisk, Cisco gateways,
    VocalTec, NextOne, Genband, Lucent XL. Real-time balance tracking,
    IVR systems, and PSTN integration.
  </div>
</div>
`,

    contact: `
<div class="text-bbs-cyan font-bold mb-4">Contact Information</div>

<div class="mb-4">
  <span class="text-bbs-yellow">Email:</span>
  <a href="mailto:sastre.sebastian@gmail.com" class="text-bbs-cyan hover:underline ml-2">sastre.sebastian@gmail.com</a>
</div>

<div class="mb-4">
  <span class="text-bbs-yellow">LinkedIn:</span>
  <a href="https://www.linkedin.com/in/sebastian-sastre/" target="_blank" class="text-bbs-cyan hover:underline ml-2">linkedin.com/in/sebastian-sastre</a>
</div>

<div class="mb-4">
  <span class="text-bbs-yellow">GitHub:</span>
  <a href="https://github.com/sebacius" target="_blank" class="text-bbs-cyan hover:underline ml-2">github.com/sebacius</a>
</div>

<div class="text-bbs-muted mt-6">
Whether you need help architecting a VoIP system, optimizing
call quality, or building a telecom platform from scratch -
let's talk.
</div>
`,

    help: `
<div class="text-bbs-cyan font-bold mb-4">BBS Help</div>

<div class="text-bbs-yellow mb-2">Navigation</div>
<div class="text-bbs-text ml-4 mb-4">
  <span class="hidden md:inline"><span class="text-bbs-green">[↑][↓]</span> Move through menu items<br></span>
  <span class="hidden md:inline"><span class="text-bbs-green">[Enter]</span> Select current item<br></span>
  <span class="hidden md:inline"><span class="text-bbs-green">[A-Z]</span> Jump to section by hotkey<br></span>
  <span class="md:hidden">Tap menu items to navigate</span>
</div>

<div class="text-bbs-yellow mb-2">Available Sections</div>
<div class="text-bbs-text ml-4 mb-4">
  <span class="text-bbs-cyan">[A]</span> About Me<br>
  <span class="text-bbs-cyan">[C]</span> Career<br>
  <span class="text-bbs-cyan">[P]</span> PCAP - Work history<br>
  <span class="text-bbs-cyan">[S]</span> Skills<br>
  <span class="text-bbs-cyan">[F]</span> Find Me - Contact<br>
  <span class="text-bbs-cyan">[H]</span> Help
</div>

<div class="text-bbs-yellow mb-2">Options</div>
<div class="text-bbs-text ml-4 mb-4">
  <a href="#" onclick="sessionStorage.removeItem('bbs-connected'); location.reload(); return false;" class="text-bbs-cyan hover:underline">Replay connection sequence</a>
</div>

<div class="text-bbs-muted">
Built with vanilla JavaScript and Tailwind CSS.
</div>
`
  };

  // ============================================
  // STATE
  // ============================================

  let selectedIndex = 0;

  // ============================================
  // DOM ELEMENTS
  // ============================================

  const elements = {};

  // ============================================
  // CONNECTION SEQUENCE
  // ============================================

  const connectionLines = [
    { text: 'ATDT 555-SASTRE', delay: 0 },
    { text: '', delay: 300 },
    { text: 'RINGING...', delay: 600 },
    { text: '', delay: 1000 },
    { text: 'CONNECT 28800/ARQ/V34/LAPM/V42BIS', delay: 1400, class: 'text-green-400' },
    { text: '', delay: 1800 },
    { text: 'Establishing secure connection...', delay: 2000, class: 'text-cyan-400' },
    { text: 'Connected to Sebastian Sastre\'s BBS', delay: 2500, class: 'text-yellow-400' },
    { text: '', delay: 2800 },
    { text: 'Press Enter or tap to continue...', delay: 3200, class: 'text-gray-500 blink' },
  ];

  async function playConnectionSequence() {
    const connectText = document.getElementById('connect-text');
    const connectScreen = document.getElementById('connect-screen');
    const bbsMain = document.getElementById('bbs-main');

    // Skip connection sequence on refresh (per browser session)
    if (sessionStorage.getItem('bbs-connected')) {
      connectScreen.style.display = 'none';
      bbsMain.style.display = 'flex';
      return;
    }

    // Allow click/key to skip
    let skipped = false;
    const skipHandler = () => { skipped = true; };
    document.addEventListener('click', skipHandler, { once: true });
    document.addEventListener('keydown', skipHandler, { once: true });

    let output = '';
    let lastDelay = 0;

    for (const line of connectionLines) {
      if (skipped) break;

      await sleep(line.delay - lastDelay);
      lastDelay = line.delay;

      if (skipped) break;

      if (line.class) {
        output += `<span class="${line.class}">${line.text}</span>\n`;
      } else {
        output += line.text + '\n';
      }
      connectText.innerHTML = output;
    }

    if (!skipped) {
      // Wait for user to press enter/click/tap to continue
      await new Promise(resolve => {
        const continueHandler = (e) => {
          if (e.type === 'keydown' && e.key !== 'Enter') return;
          document.removeEventListener('keydown', continueHandler);
          document.removeEventListener('click', continueHandler);
          resolve();
        };
        document.addEventListener('keydown', continueHandler);
        document.addEventListener('click', continueHandler);
      });
    }

    sessionStorage.setItem('bbs-connected', 'true');
    connectScreen.style.display = 'none';
    bbsMain.style.display = 'flex';
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // ============================================
  // MENU RENDERING
  // ============================================

  function renderMenu() {
    const container = elements.menuItems;
    container.innerHTML = '';

    menuItems.forEach((item, index) => {
      const div = document.createElement('div');
      div.className = `menu-item px-3 py-2 cursor-pointer ${index === selectedIndex ? 'selected' : ''}`;
      div.innerHTML = `
        <span class="hotkey text-bbs-yellow">[${item.key}]</span>
        <span class="ml-2">${item.label}</span>
      `;
      div.addEventListener('click', () => {
        selectedIndex = index;
        renderMenu();
        showSection(item.section);
        closeMobileMenu();
      });
      container.appendChild(div);
    });
  }

  // ============================================
  // CONTENT RENDERING
  // ============================================

  function showSection(section) {
    elements.contentArea.innerHTML = content[section] || content.about;

    // Map section keys to display titles
    const titles = {
      about: 'About Me',
      career: 'Career',
      experience: 'PCAP',
      skills: 'Skills',
      contact: 'Find Me',
      help: 'Help'
    };
    const title = titles[section] || section.charAt(0).toUpperCase() + section.slice(1);
    elements.sectionTitle.textContent = title;
    elements.statusSection.textContent = title;

    // Scroll content to top
    elements.contentArea.scrollTop = 0;
  }

  // ============================================
  // KEYBOARD HANDLING
  // ============================================

  function handleKeyDown(e) {
    const key = e.key.toUpperCase();

    // Arrow navigation - also changes content
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      selectedIndex = Math.max(0, selectedIndex - 1);
      renderMenu();
      showSection(menuItems[selectedIndex].section);
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      selectedIndex = Math.min(menuItems.length - 1, selectedIndex + 1);
      renderMenu();
      showSection(menuItems[selectedIndex].section);
      return;
    }

    // Enter to select
    if (e.key === 'Enter') {
      e.preventDefault();
      showSection(menuItems[selectedIndex].section);
      return;
    }

    // Hotkey navigation
    const menuItem = menuItems.find(item => item.key === key);
    if (menuItem) {
      e.preventDefault();
      selectedIndex = menuItems.indexOf(menuItem);
      renderMenu();
      showSection(menuItem.section);
    }
  }

  // ============================================
  // STATUS BAR TIMER & BYTE COUNTERS
  // ============================================

  function startTimer() {
    let seconds = 3600; // 60 minutes

    setInterval(() => {
      seconds--;
      if (seconds < 0) seconds = 3600;

      const mins = Math.floor(seconds / 60);
      const secs = seconds % 60;
      elements.statusTime.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }, 1000);
  }

  function startByteCounters() {
    let bytesUp = 0;
    let bytesDown = 0;

    function formatBytes(bytes) {
      if (bytes < 1024) return bytes + 'B';
      if (bytes < 1048576) return (bytes / 1024).toFixed(1) + 'K';
      return (bytes / 1048576).toFixed(1) + 'M';
    }

    setInterval(() => {
      bytesUp += Math.floor(Math.random() * 500) + 100;
      bytesDown += Math.floor(Math.random() * 2000) + 500;
      elements.bytesUp.textContent = formatBytes(bytesUp);
      elements.bytesDown.textContent = formatBytes(bytesDown);
    }, 150);
  }

  // ============================================
  // INITIALIZATION
  // ============================================

  function init() {
    // Cache DOM elements
    elements.menuItems = document.getElementById('menu-items');
    elements.contentArea = document.getElementById('content-area');
    elements.sectionTitle = document.getElementById('section-title');
    elements.statusTime = document.getElementById('status-time');
    elements.statusSection = document.getElementById('status-section');
    elements.callerNum = document.getElementById('caller-num');
    elements.bytesUp = document.getElementById('bytes-up');
    elements.bytesDown = document.getElementById('bytes-down');
    elements.menuToggle = document.getElementById('menu-toggle');
    elements.menuArrow = document.getElementById('menu-arrow');

    // Random caller number
    elements.callerNum.textContent = Math.floor(Math.random() * 9000 + 1000);

    // Setup
    renderMenu();
    showSection('about');
    startTimer();
    startByteCounters();

    // Keyboard handler
    document.addEventListener('keydown', handleKeyDown);

    // Mobile menu toggle
    elements.menuToggle.addEventListener('click', toggleMobileMenu);

    // Play connection sequence
    playConnectionSequence();
  }

  function toggleMobileMenu() {
    // Only toggle on mobile (when arrow is visible)
    if (window.innerWidth >= 768) return;

    const isHidden = elements.menuItems.classList.contains('hidden');
    if (isHidden) {
      elements.menuItems.classList.remove('hidden');
      elements.menuArrow.textContent = '▲';
    } else {
      elements.menuItems.classList.add('hidden');
      elements.menuArrow.textContent = '▼';
    }
  }

  function closeMobileMenu() {
    if (window.innerWidth < 768) {
      elements.menuItems.classList.add('hidden');
      elements.menuArrow.textContent = '▼';
    }
  }

  // Start
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
