import { projects } from '../data.js';

export function Portfolio() {
  return `
    <section class="container fade-in" style="padding: 60px 20px;">
      <h2 class="section-title">My Projects</h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
        ${projects.map(project => `
          <div class="project-card" style="background-color: var(--card-bg); padding: 30px; border-radius: 12px; border: 1px solid var(--border); transition: transform 0.3s ease;">
            <img src="${project.image}" alt="${project.name}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 15px;">
            <h3 style="margin-bottom: 15px; font-size: 1.5rem; overflow-wrap: anywhere; word-break: break-word; line-height: 1.4;">${project.name}</h3>
            <p style="color: var(--text-secondary); margin-bottom: 20px; min-height: 80px;">${project.description || 'No description available.'}</p>
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-size: 0.9rem; color: var(--accent);">${project.language || 'Code'}</span>
              <a href="${project.url}" target="_blank" class="btn" style="padding: 8px 16px; font-size: 0.9rem;">View Code</a>
            </div>
          </div>
        `).join('')}
      </div>
    </section>
  `;
}
