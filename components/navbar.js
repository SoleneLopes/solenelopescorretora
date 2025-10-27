class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: #1e3a8a;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
        }
        .logo img {
          height: 45px;
        }
        .menu-desktop {
          flex: 1;
          display: flex;
          justify-content: center;
        }
        ul {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        a {
          color: white;
          text-decoration: none;
          font-weight: 500;
        }
        a:hover { opacity: 0.8; }
        .cta {
          color: white;
          background: #059669;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          font-size: 0.9rem;
          font-weight: bold;
        }
        .mobile-menu-btn {
          display: none;
          cursor: pointer;
          width: 30px;
          height: 24px;
          flex-direction: column;
          justify-content: space-between;
        }
        .mobile-menu-btn span {
          display: block;
          height: 3px;
          background: white;
          border-radius: 2px;
          transition: all 0.3s ease;
        }
        .mobile-nav {
          display: none;
          flex-direction: column;
          gap: 1rem;
          background: #1e40af;
          padding: 1rem;
          position: absolute;
          top: 64px;
          left: 0;
          width: 100%;
        }
        .mobile-nav.active {
          display: flex;
        }
        @media (max-width: 768px) {
          .menu-desktop, .cta { display: none; }
          .mobile-menu-btn { display: flex; }
        }
      </style>

      <nav>
        <div class="logo">
          <img src="assets/logo.png" alt="Solene Lopes Corretora">
        </div>

        <div class="menu-desktop">
          <ul>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#beneficios">Benefícios</a></li>
            <li><a href="#planos">Planos</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>

        <a href="https://wa.me/5511962286674" class="cta">WhatsApp</a>

        <!-- Botão Mobile -->
        <div class="mobile-menu-btn" id="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <!-- Menu Mobile -->
      <div class="mobile-nav" id="mobileNav">
        <a href="#inicio">Início</a>
        <a href="#beneficios">Benefícios</a>
        <a href="#planos">Planos</a>
        <a href="#contato">Contato</a>
        <a href="https://wa.me/5511962286674" class="cta">WhatsApp</a>
      </div>
    `;

    // 🔹 O listener agora é adicionado AQUI (fora do innerHTML)
    const btn = this.shadowRoot.querySelector('#hamburger');
    const mobileNav = this.shadowRoot.querySelector('#mobileNav');

    if (btn) {
      btn.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
      });
    }
  }
}

customElements.define('custom-navbar', CustomNavbar);
