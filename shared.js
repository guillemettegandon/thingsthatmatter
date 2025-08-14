export function renderHeader(active = ""){
  return `
  <header class="header">
    <div class="container">
      <nav class="nav">
        <a class="logo" href="index.html">
          <span class="logo-badge"></span>
          <span class="brand serif">What Matters To You</span>
        </a>
        <div class="menu">
          <a href="index.html" ${active==='home'?'class="active"':''}>Home</a>
          <a href="about.html" ${active==='about'?'class="active"':''}>About</a>
          <a href="articles.html" ${active==='articles'?'class="active"':''}>Articles</a>
          <a href="contact.html" ${active==='contact'?'class="active"':''}>Contact</a>
          <a href="submit.html" class="cta" ${active==='submit'?'':''}>What matters to you?</a>
        </div>
      </nav>
    </div>
  </header>`;
}

export function renderFooter(){
  const year = new Date().getFullYear();
  return `
  <footer class="footer">
    <div class="container" style="display:grid;grid-template-columns:2fr 1fr 1fr;gap:1.5rem">
      <div>
        <div class="brand serif">What Matters To You</div>
        <p>Independent journalism on climate, justice, and the stories that bind us.</p>
      </div>
      <div>
        <strong>Sections</strong>
        <ul style="list-style:none;padding:0;margin:.5rem 0">
          <li><a href="articles.html?category=Environment">Environment</a></li>
          <li><a href="articles.html?category=Justice">Justice</a></li>
          <li><a href="articles.html?category=Stories">Stories</a></li>
          <li><a href="articles.html?category=Opinion">Opinion</a></li>
        </ul>
      </div>
      <div>
        <strong>Follow</strong>
        <ul style="list-style:none;padding:0;margin:.5rem 0">
          <li><a href="mailto:hello@example.com">Email</a></li>
          <li><a href="https://github.com/" target="_blank" rel="noopener">GitHub</a></li>
        </ul>
        <div style="margin-top:.6rem;font-size:.9rem;color:#64748b">© ${year} What Matters To You</div>
      </div>
    </div>
  </footer>`;
}
