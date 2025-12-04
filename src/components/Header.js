export function Header() {
    return `
    <header style="padding: 20px 0; border-bottom: 1px solid var(--border);">
      <div class="container" style="display: flex; justify-content: space-between; align-items: center;">
        <a href="#/" style="font-size: 1.5rem; font-weight: 700; font-family: var(--font-heading);">Deepu Kumar</a>
        <nav>
          <ul style="display: flex; gap: 20px;">
            <li><a href="#/" class="nav-link">Home</a></li>
            <li><a href="#/portfolio" class="nav-link">Portfolio</a></li>
            <li><a href="#/resume" class="nav-link">Resume</a></li>
            <li><a href="#/contact" class="nav-link">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `;
}
