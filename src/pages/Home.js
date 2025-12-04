import { Personal_data } from '../data.js';
import profileImg from '../assets/profile.jpg';

export function Home() {
  return `
    <section class="fade-in" style="min-height: 80vh; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 40px 20px;">
      <div style="margin-bottom: 30px;">
        <img src="${profileImg}" alt="${Personal_data.personal.name}" style="width: 200px; height: 200px; border-radius: 50%; object-fit: cover; border: 4px solid var(--accent); box-shadow: 0 0 20px rgba(56, 189, 248, 0.3);">
      </div>
      <h1 style="font-size: 4rem; margin-bottom: 20px; background: linear-gradient(to right, #38bdf8, #818cf8); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
        ${Personal_data.personal.name}
      </h1>
      <h2 style="font-size: 2rem; color: var(--text-secondary); margin-bottom: 40px;">
        ${Personal_data.personal.role}
      </h2>
      <p style="max-width: 800px; font-size: 1.2rem; margin-bottom: 40px; color: var(--text-secondary);">
        ${Personal_data.personal.summary}
      </p>
      <div style="display: flex; gap: 20px;">
        <a href="#/portfolio" class="btn">View Portfolio</a>
        <a href="#/contact" class="btn" style="background-color: transparent; border: 2px solid var(--accent); color: var(--accent);">Contact Me</a>
      </div>
    </section>
  `;
}
