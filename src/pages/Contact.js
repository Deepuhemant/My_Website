import { Personal_data } from '../data.js';

export function Contact() {
  return `
    <section class="container fade-in" style="padding: 60px 20px; max-width: 800px;">
      <h2 class="section-title">Contact Me</h2>
      <div style="background-color: var(--card-bg); padding: 40px; border-radius: 12px; border: 1px solid var(--border);">
        <p style="text-align: center; margin-bottom: 30px; color: var(--text-secondary); font-size: 1.1rem;">
          I am actively seeking full-time opportunities in Data Science and AI. If you're looking for a dedicated professional to build scalable ML and AI solutions, let's connect!
        </p>
        
        <div style="display: grid; gap: 20px; margin-bottom: 40px;">
          <div style="display: flex; align-items: center; gap: 15px; color: var(--text-primary);">
            <span style="color: var(--accent);">📧</span>
            <a href="mailto:${Personal_data.personal.email}" style="font-size: 1.1rem;">${Personal_data.personal.email}</a>
          </div>
          <div style="display: flex; align-items: center; gap: 15px; color: var(--text-primary);">
            <span style="color: var(--accent);">📱</span>
            <span>${Personal_data.personal.phone}</span>
          </div>
          <div style="display: flex; align-items: center; gap: 15px; color: var(--text-primary);">
            <span style="color: var(--accent);">📍</span>
            <span>${Personal_data.personal.location}</span>
          </div>
        </div>

        <form action="https://formspree.io/f/xanrbekj" method="POST" style="display: grid; gap: 20px;">
          <div style="display: grid; gap: 8px;">
            <label for="name" style="font-weight: 500;">Name</label>
            <input type="text" id="name" name="name" required style="padding: 12px; border-radius: 8px; border: 1px solid var(--border); background-color: var(--bg-color); color: var(--text-primary);">
          </div>
          <div style="display: grid; gap: 8px;">
            <label for="email" style="font-weight: 500;">Email</label>
            <input type="email" id="email" name="email" required style="padding: 12px; border-radius: 8px; border: 1px solid var(--border); background-color: var(--bg-color); color: var(--text-primary);">
          </div>
          <div style="display: grid; gap: 8px;">
            <label for="message" style="font-weight: 500;">Message</label>
            <textarea id="message" name="message" rows="5" required style="padding: 12px; border-radius: 8px; border: 1px solid var(--border); background-color: var(--bg-color); color: var(--text-primary); resize: vertical;"></textarea>
          </div>
          <button type="submit" class="btn" style="border: none; cursor: pointer; font-size: 1rem;">Send Message</button>
        </form>
      </div>
    </section>
  `;
}
