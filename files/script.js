// ============================================
// Fox Run — script.js
// 1) Menu hamburguer (mobile)
// 2) Validação do formulário de contato
// 3) Exibição dos dados digitados na tela
// ============================================

document.addEventListener('DOMContentLoaded', function () {

  // --------------------------------------------
  // 1) Menu hamburguer
  // --------------------------------------------
  var menuToggle = document.getElementById('menuToggle');
  var siteNav = document.getElementById('siteNav');

  function closeMenu() {
    siteNav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }

  function toggleMenu() {
    var isOpen = siteNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }

  menuToggle.addEventListener('click', toggleMenu);

  // Fecha o menu automaticamente ao clicar em um link (mobile)
  siteNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // --------------------------------------------
  // 2) e 3) Formulário de contato
  // --------------------------------------------
  var form = document.getElementById('contactForm');
  var feedback = document.getElementById('formFeedback');

  var nomeInput = document.getElementById('nome');
  var emailInput = document.getElementById('email');
  var mensagemInput = document.getElementById('mensagem');

  // Marca os campos como "tocados" para ativar o estilo de erro só depois
  // que o usuário já tentou preencher/enviar, evitando bordas vermelhas
  // logo na primeira visita à página.
  [nomeInput, emailInput, mensagemInput].forEach(function (input) {
    input.addEventListener('blur', function () {
      input.setAttribute('data-touched', 'true');
    });
  });

  function validarEmail(valor) {
    var padrao = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return padrao.test(valor);
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    var nome = nomeInput.value.trim();
    var email = emailInput.value.trim();
    var mensagem = mensagemInput.value.trim();

    var erros = [];

    if (nome === '') {
      erros.push('Preencha o campo Nome.');
    }

    if (email === '') {
      erros.push('Preencha o campo E-mail.');
    } else if (!validarEmail(email)) {
      erros.push('Digite um e-mail válido (ex: nome@exemplo.com).');
    }

    if (mensagem === '') {
      erros.push('Escreva uma mensagem antes de enviar.');
    }

    // Se houver erro, marca todos os campos como tocados para mostrar
    // o destaque visual e exibe a lista de erros.
    if (erros.length > 0) {
      [nomeInput, emailInput, mensagemInput].forEach(function (input) {
        input.setAttribute('data-touched', 'true');
      });

      feedback.className = 'form-feedback error';
      feedback.textContent = erros.join('\n');
      return;
    }

    // Formulário válido: mostra os dados digitados na própria página.
    feedback.className = 'form-feedback success';
    feedback.textContent =
      'Mensagem enviada com sucesso! Foi isso que recebemos:\n' +
      'Nome: ' + nome + '\n' +
      'E-mail: ' + email + '\n' +
      'Mensagem: ' + mensagem;

    form.reset();
    [nomeInput, emailInput, mensagemInput].forEach(function (input) {
      input.removeAttribute('data-touched');
    });
  });

});
