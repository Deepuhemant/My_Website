import { Personal_data } from '../data.js';

export function Resume() {
  return `
    <section class="container fade-in" style="padding: 60px 20px;">
      <h2 class="section-title">Resume</h2>
      
      <div style="display: grid; gap: 40px;">
        <!-- Experience -->
        <div>
          <h3 style="font-size: 1.8rem; margin-bottom: 20px; color: var(--accent);">Experience</h3>
          <div style="display: flex; flex-direction: column; gap: 30px;">
            ${Personal_data.experience.map(exp => `
              <div style="background-color: var(--card-bg); padding: 25px; border-radius: 12px; border-left: 4px solid var(--accent);">
                <div style="display: flex; justify-content: space-between; flex-wrap: wrap; margin-bottom: 10px;">
                  <h4 style="font-size: 1.4rem;">${exp.role}</h4>
                  <span style="color: var(--text-secondary);">${exp.duration}</span>
                </div>
                <div style="margin-bottom: 15px; font-weight: 600; color: #cbd5e1;">${exp.company} ${exp.location ? `| ${exp.location}` : ''}</div>
                <ul style="list-style-type: disc; padding-left: 20px; color: var(--text-secondary);">
                  ${exp.details.map(detail => `<li style="margin-bottom: 8px;">${detail}</li>`).join('')}
                </ul>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Education -->
        <div>
          <h3 style="font-size: 1.8rem; margin-bottom: 20px; color: var(--accent);">Education</h3>
          ${Personal_data.education.map(edu => `
            <div style="background-color: var(--card-bg); padding: 25px; border-radius: 12px; border-left: 4px solid #818cf8;">
              <div style="display: flex; justify-content: space-between; flex-wrap: wrap; margin-bottom: 10px;">
                <h4 style="font-size: 1.4rem;">${edu.degree}</h4>
                <span style="color: var(--text-secondary);">${edu.duration}</span>
              </div>
              <div style="margin-bottom: 10px; font-weight: 600; color: #cbd5e1;">${edu.institution}</div>
              <div style="color: var(--text-secondary);">${edu.grade}</div>
            </div>
          `).join('')}
        </div>

        <!-- Certifications -->
        <div>
          <h3 style="font-size: 1.8rem; margin-bottom: 20px; color: var(--accent);">Certifications</h3>
          <div style="display: grid; gap: 20px;">
            ${Personal_data.certifications.map(cert => `
              <div style="background-color: var(--card-bg); padding: 25px; border-radius: 12px; border-left: 4px solid #34d399;">
                <div style="display: flex; justify-content: space-between; flex-wrap: wrap; margin-bottom: 10px;">
                  <h4 style="font-size: 1.4rem;">${cert.name}</h4>
                  <span style="color: var(--text-secondary);">${cert.date}</span>
                </div>
                <div style="margin-bottom: 10px; font-weight: 600; color: #cbd5e1;">${cert.issuer}</div>
                ${cert.url ? `<a href="${cert.url}" target="_blank" style="color: var(--accent); text-decoration: none; font-size: 0.9rem;">View Certificate &rarr;</a>` : ''}
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Skills -->
        <div>
          <h3 style="font-size: 1.8rem; margin-bottom: 20px; color: var(--accent);">Skills</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
            ${Object.entries(Personal_data.skills).map(([category, items]) => `
              <div style="background-color: var(--card-bg); padding: 20px; border-radius: 12px;">
                <h4 style="text-transform: capitalize; margin-bottom: 15px; color: #818cf8;">${category}</h4>
                <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                  ${items.map(skill => `
                    <span style="background-color: rgba(56, 189, 248, 0.1); color: var(--accent); padding: 5px 10px; border-radius: 20px; font-size: 0.9rem;">${skill}</span>
                  `).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}
