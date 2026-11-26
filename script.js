const menuToggle = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-list');
const projectsToggle = document.getElementById('projects-toggle');
const dropdownParent = document.querySelector('.dropdown');
const clickableLinks = document.querySelectorAll('.nav-link:not(.dropdown-toggle), .dropdown-link, .nav-btn');

// 1. Toggle Mobile Drawer
menuToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  const isOpen = navList.classList.toggle('active');
  menuToggle.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
});

// 2. Toggle Dropdown Submenu on Mobile Click
projectsToggle.addEventListener('click', (e) => {
  if (window.innerWidth <= 768) {
    e.preventDefault(); // Prevents jumping to #projects while opening submenu
    dropdownParent.classList.toggle('open');
  }
});

// 3. Close Everything When a Final Link is Clicked
clickableLinks.forEach(link => {
  link.addEventListener('click', () => {
    closeAllMenus();
  });
});

// 4. Close Everything When Clicking Outside Navbar
document.addEventListener('click', (e) => {
  if (!navList.contains(e.target) && !menuToggle.contains(e.target)) {
    closeAllMenus();
  }
});

function closeAllMenus() {
  navList.classList.remove('active');
  menuToggle.classList.remove('open');
  dropdownParent.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}















//==================== Chatbot JS===============

const chatToggle = document.getElementById('npt-chat-toggle');
const chatBox = document.getElementById('npt-chat-box');
const closeBtn = document.getElementById('npt-close-btn');
const chatIcon = document.getElementById('npt-chat-icon');
const chatForm = document.getElementById('npt-chat-form');
const userInput = document.getElementById('npt-user-input');
const chatBody = document.getElementById('npt-chat-body');
const quickReplyBtns = document.querySelectorAll('#npt-quick-replies button');

// 1. Toggle Chat Window
function toggleChat() {
  const isOpen = chatBox.classList.toggle('open');
  chatIcon.textContent = isOpen ? '✕' : '💬';
}

chatToggle.addEventListener('click', toggleChat);
closeBtn.addEventListener('click', toggleChat);

// 2. Smart Real Estate Knowledge Base
function getBotResponse(input) {
  const text = input.toLowerCase();

  if (text.includes('price') || text.includes('katha') || text.includes('cost') || text.includes('dam') || text.includes('দাম')) {
    return "💰 <strong>Plot & Space Pricing:</strong><br>• <strong>Purbachal Green Valley:</strong> 3, 5 & 10 Katha (Starts at ৳ 18 Lac/Katha)<br>• <strong>Bashundhara Royal City:</strong> 4, 6 & 8 Katha (Starts at ৳ 25 Lac/Katha)<br>• <strong>Mawa Riverview:</strong> 3 & 5 Katha (Starts at ৳ 12 Lac/Katha)<br>• <strong>Commercial Spaces:</strong> Starts at ৳ 16,500/sft.";
  }

  if (text.includes('location') || text.includes('where') || text.includes('address') || text.includes('office') || text.includes('কোথায়')) {
    return "📍 <strong>Project Locations:</strong><br>1. Purbachal 300ft Adjacent<br>2. Bashundhara R/A Extension<br>3. Dhaka-Mawa Expressway, Keraniganj<br>4. Tejgaon & Progoti Sarani (Commercial)<br><br>🏢 <strong>Head Office:</strong> Level-7, Naptune Tower, Progoti Sarani, Badda-Gulshan Link Road, Dhaka.";
  }

  if (text.includes('visit') || text.includes('friday') || text.includes('book') || text.includes('ভিজিট')) {
    return "🚗 <strong>Free Friday Site Visit:</strong><br>We arrange complimentary transport for family site visits every Friday! Call our hotline at <strong>+880 1700-000000</strong> or fill out the <a href='#contact' style='color:#b8962e; font-weight:700;'>Site Visit Form</a>.";
  }

  if (text.includes('landowner') || text.includes('jv') || text.includes('joint') || text.includes('share') || text.includes('জমি')) {
    return "🤝 <strong>Landowner Joint Venture (JV):</strong><br>We offer attractive sharing ratios, competitive signing money, and 100% RAJUK-compliant construction. Contact our JV Desk directly at <strong>+880 1800-000000</strong>.";
  }

  if (text.includes('installment') || text.includes('emi') || text.includes('kisti') || text.includes('কিস্তি')) {
    return "💳 <strong>Flexible Payment Plans:</strong><br>You can book your plot with a 20% down payment and pay the rest in up to <strong>60 easy monthly installments</strong>. Instant registration is available on one-time full payment!";
  }

  if (text.includes('hello') || text.includes('hi') || text.includes('salam') || text.includes('assalamu')) {
    return "Wa Alaikum Assalam! 😊 How can I assist you with your land or commercial property search today?";
  }

  return "Thank you for your query! 📞 For personalized assistance, please call our Sales Hotline at <strong>+880 1700-000000</strong> or leave your number in our <a href='#contact' style='color:#b8962e; font-weight:700;'>Contact Form</a>.";
}

// 3. Append Message to Chat
function appendMessage(content, sender) {
  const msgDiv = document.createElement('div');
  msgDiv.className = `npt-msg ${sender === 'user' ? 'npt-user-msg' : 'npt-bot-msg'}`;
  msgDiv.innerHTML = content;
  chatBody.appendChild(msgDiv);
  chatBody.scrollTop = chatBody.scrollHeight;
}

// 4. Handle User Submission with Typing Animation
function handleUserQuery(queryText) {
  if (!queryText.trim()) return;

  appendMessage(queryText, 'user');
  userInput.value = '';

  // Show typing dots
  const typingDiv = document.createElement('div');
  typingDiv.className = 'npt-msg npt-bot-msg npt-typing';
  typingDiv.innerHTML = '<span></span><span></span><span></span>';
  chatBody.appendChild(typingDiv);
  chatBody.scrollTop = chatBody.scrollHeight;

  setTimeout(() => {
    typingDiv.remove();
    const reply = getBotResponse(queryText);
    appendMessage(reply, 'bot');
  }, 650);
}

chatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  handleUserQuery(userInput.value);
});

// 5. Quick Reply Buttons
quickReplyBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    handleUserQuery(btn.getAttribute('data-query'));
  });
});


//====================  Navbar Responsive JS===============

//====================  Navbar Responsive JS===============

//====================  Navbar Responsive JS===============

//====================  Navbar Responsive JS===============
