class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
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
        ul {
          display: flex;
          gap: 2rem;
          list-style: none;
        }
        a {
          color: white;
          text-decoration: none;
          font-weight: 500;
        }
        a:hover { opacity: 0.8; }
      </style>
      <nav>
        <div class="logo text-white font-bold text-lg">Solene Lopes</div>
        <ul>
          <li><a href="#inicio">Início</a></li>
          <li><a href="#beneficios">Benefícios</a></li>
          <li><a href="#planos">Planos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);
