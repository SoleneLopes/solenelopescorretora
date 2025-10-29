// components/navbar.js
class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host { all: initial; display:block; }

        /* HEADER */
        nav {
          background: #1e3a8a;
          padding: 0.75rem 1rem;
          display: grid;
          grid-template-columns: auto 1fr auto auto;
          align-items: center;
          gap: 1rem;
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          box-shadow: 0 4px 16px rgba(0,0,0,.15);
        }

        /* LOGO MAIOR */
        .logo img { 
          height: 60px; 
          max-height: 70px; 
          display:block; 
        }
        @media (max-width: 768px){
          .logo img { height: 48px; }
        }

        /* MENU DESKTOP CENTRALIZADO */
        .menu-desktop {
          display:flex; justify-content:center; align-items:center;
        }
        .menu-desktop ul {
          display:flex; gap:2rem; list-style:none; margin:0; padding:0;
        }
        .menu-desktop a {
          color:#fff; text-decoration:none; font: 500 15px/1.2 system-ui, -apple-system, "Inter", sans-serif;
          padding: .5rem 0;
        }
        .menu-desktop a:hover { opacity:.85; }

        /* CTA à direita */
        .cta {
          color:#fff; background:#059669; text-decoration:none;
          padding:.55rem .9rem; border-radius:8px; font:700 14px/1 system-ui, "Inter", sans-serif;
          transition:.2s;
        }
        .cta:hover { filter:brightness(1.05); }

        /* HAMBÚRGUER */
        .hamburger {
          width:32px; height:24px; display:none; cursor:pointer;
          position:relative; justify-self:end;
        }
        .bar {
          position:absolute; left:0; right:0; height:3px; background:#fff; border-radius:2px;
          transition: transform .25s ease, opacity .2s ease, top .25s ease;
        }
        .bar:nth-child(1){ top:0; }
        .bar:nth-child(2){ top:10.5px; }
        .bar:nth-child(3){ top:21px; }
        .hamburger.open .bar:nth-child(1){ top:10.5px; transform:rotate(45deg); }
        .hamburger.open .bar:nth-child(2){ opacity:0; }
        .hamburger.open .bar:nth-child(3){ top:10.5px; transform:rotate(-45deg); }

        /* OVERLAY MOBILE (FULLSCREEN) */
        .overlay {
          position: fixed;
          inset: 56px 0 0 0; /* abaixo do header (aprox 56px) */
          background: linear-gradient(180deg,#1e3a8a 0%, #1e40af 60%, #1d4ed8 100%);
          display:none;
          flex-direction:column;
          padding: 12px 16px 24px;
          overflow:auto;
          z-index: 999; /* logo abaixo do nav */
        }
        .overlay.open { display:flex; }

        .mobile-list { list-style:none; margin:0; padding:8px 0; }
        .mobile-item a{
          display:block;
          color:#fff; text-decoration:none;
          padding:14px 10px;
          font: 500 16px/1.2 system-ui, "Inter", sans-serif;
          border-bottom:1px solid rgba(255,255,255,.08);
        }
        .mobile-cta {
          margin-top:16px;
          align-self:flex-start;
          background:#059669;
          color:#fff; text-decoration:none;
          padding:.75rem 1rem; border-radius:10px; font:700 15px/1 system-ui, "Inter", sans-serif;
        }

        /* RESPONSIVO */
        @media (max-width: 992px){
          .menu-desktop, .cta { display:none; }
          .hamburger { display:block; }
          nav { grid-template-columns: auto 1fr auto; }
        }
      </style>

      <!-- HEADER -->
      <nav>
        <div class="logo">
            <a href="index.html#inicio">
                <img src="assets/logo2.png" alt="Solene Lopes">
            </a>
        </div>


        <div class="menu-desktop">
          <ul>
            <li><a href="index.html#inicio">Início</a></li>
            <li><a href="index.html#beneficios">Benefícios</a></li>
            <li><a href="index.html#planos">Planos</a></li>
            <li><a href="ofertas.html">Ofertas</a></li>
            <li><a href="index.html#contato">Contato</a></li>
          </ul>
        </div>

        <a class="cta" href="https://wa.me/5511962286674" rel="noopener" target="_blank">WhatsApp</a>

        <!-- Botão hamburguer -->
        <div class="hamburger" id="btnHam" aria-label="Abrir menu" aria-expanded="false" role="button">
          <span class="bar"></span><span class="bar"></span><span class="bar"></span>
        </div>
      </nav>

      <!-- OVERLAY MOBILE -->
      <div class="overlay" id="overlay">
        <ul class="mobile-list">
          <li class="mobile-item"><a href="index.html#inicio">Início</a></li>
          <li class="mobile-item"><a href="index.html#beneficios">Benefícios</a></li>
          <li class="mobile-item"><a href="index.html#planos">Planos</a></li>
          <li class="mobile-item"><a href="ofertas.html">Ofertas</a></li>
          <li class="mobile-item"><a href="index.html#contato">Contato</a></li>
        </ul>
        <a class="mobile-cta" href="https://wa.me/5511962286674" rel="noopener" target="_blank">Falar no WhatsApp</a>
      </div>
    `;

    // JS – toggle do menu + trava scroll da página
    const btn = this.shadowRoot.getElementById('btnHam');
    const overlay = this.shadowRoot.getElementById('overlay');

    const toggleMenu = (open) => {
      if (open) {
        btn.classList.add('open');
        overlay.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        document.documentElement.style.overflow = 'hidden'; // trava scroll
      } else {
        btn.classList.remove('open');
        overlay.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        document.documentElement.style.overflow = ''; // libera scroll
      }
    };

    btn.addEventListener('click', () => {
      const isOpen = btn.classList.contains('open');
      toggleMenu(!isOpen);
    });

    // Fecha ao clicar em qualquer link do overlay
    this.shadowRoot.querySelectorAll('.mobile-item a').forEach((a) => {
      a.addEventListener('click', () => toggleMenu(false));
    });
  }
}
customElements.define('custom-navbar', CustomNavbar);
