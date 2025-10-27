class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: #1e3a8a;
          color: white;
          text-align: center;
          padding: 2rem;
        }
        a {
          color: #93c5fd;
          margin: 0 0.5rem;
          text-decoration: none;
        }
        a:hover { color: white; }
      </style>
      <footer>
        <p>&copy; 2025 Solene Lopes - Corretora de Saúde e Odonto. Todos os direitos reservados.</p>
        <p>
          <a href="https://wa.me/5511962286674">WhatsApp</a> | 
          <a href="mailto:solene@corretora.com">E-mail</a>
        </p>
      </footer>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);
