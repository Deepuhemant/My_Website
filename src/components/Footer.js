import { Personal_data } from '../data.js';

export function Footer() {
  return `
    <footer style="padding: 40px 0; text-align: center; border-top: 1px solid var(--border); margin-top: 40px; color: var(--text-secondary);">
      <div class="container">
        <p>&copy; ${new Date().getFullYear()} Deepu Kumar. All rights reserved.</p>
        <div style="margin-top: 10px; display: flex; justify-content: center; gap: 20px;">
          <a href="https://github.com/Deepuhemant" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/deepu-kumar-45884220b/" target="_blank">LinkedIn</a>
          <a href="mailto:${Personal_data.personal.email}">Email</a>
        </div>
      </div>
    </footer>
  `;
}
