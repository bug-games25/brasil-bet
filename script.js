function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const user = JSON.parse(localStorage.getItem(email));
  if (user && user.password === password) {
    localStorage.setItem('loggedIn', email);
    window.location.href = 'dashboard.html';
  } else {
    alert('Login inválido');
  }
}

function register() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  if (!email || !password) return alert('Preencha tudo');
  localStorage.setItem(email, JSON.stringify({password, balance: 100}));
  alert('Cadastro realizado');
  window.location.href = 'login.html';
}

function logout() {
  localStorage.removeItem('loggedIn');
  window.location.href = 'login.html';
}

function updateDashboard() {
  const userEmail = localStorage.getItem('loggedIn');
  const user = JSON.parse(localStorage.getItem(userEmail));
  if (!user) return logout();
  document.getElementById('balance').innerText = user.balance;
}

function playSlot() {
  const result = Math.random() < 0.5 ? "Você perdeu!" : "Você ganhou R$ 10!";
  document.getElementById('slot-result').innerText = result;
}

if (window.location.pathname.includes('dashboard')) updateDashboard();