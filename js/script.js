
async function loadSection(containerId, filePath) {
  try {
    const response = await fetch(filePath);
    if (!response.ok) throw new Error(`Failed to load ${filePath}`);
    const html = await response.text();
    document.getElementById(containerId).innerHTML = html;
  } catch (error) {
    console.error(error);
    document.getElementById(containerId).innerHTML = `<p class="text-danger">Error loading section.</p>`;
  }
}

window.addEventListener('DOMContentLoaded', async () => {
  await loadSection('navbar-container', 'sections/navbar.html');
  await loadSection('hero-container', 'sections/hero.html');
  await loadSection('about-container', 'sections/about.html');
  await loadSection('skills-container', 'sections/skills.html');
  await loadSection('projects-container', 'sections/projects.html');
  await loadSection('experience-container', 'sections/experience.html');
  await loadSection('contact-container', 'sections/contact.html');
  initEventListeners();
});

function initEventListeners() {
  
  const downloadBtn = document.getElementById('downloadResumeBtn');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();

      doc.setFontSize(22);
      doc.setTextColor(102, 126, 234);
      doc.text('Varshini V', 20, 20);
      doc.setFontSize(12);
      doc.setTextColor(0, 0, 0);
      doc.text('varshini22123@gmail.com | +91 8904708819', 20, 30);
      doc.text('github.com/VARSHINI-V22 | linkedin.com/in/varshini-v-7662a7277', 20, 37);

      doc.setFontSize(14);
      doc.setTextColor(102, 126, 234);
      doc.text('Profile', 20, 50);
      doc.setFontSize(11);
      doc.setTextColor(80, 80, 80);
      doc.text('Aspiring Software Developer with strong programming, problem-solving, and database skills.', 20, 58);

      doc.setFontSize(14);
      doc.setTextColor(102, 126, 234);
      doc.text('Education', 20, 75);
      doc.setFontSize(11);
      doc.setTextColor(0, 0, 0);
      doc.text('• MCA, Manipal University Jaipur (2025–present)', 20, 83);
      doc.text('• BCA, Seshadripuram College, Tumkur (2022–2025)', 20, 90);

      doc.setFontSize(14);
      doc.setTextColor(102, 126, 234);
      doc.text('Technical Skills', 20, 107);
      doc.setFontSize(11);
      doc.setTextColor(0, 0, 0);
      doc.text('Python, Java, C#, MERN, HTML/CSS, JavaScript, React, .NET, MSSQL, MongoDB, Git, Networking', 20, 115);

      doc.setFontSize(14);
      doc.setTextColor(102, 126, 234);
      doc.text('Internships', 20, 132);
      doc.setFontSize(11);
      doc.text('• JavaScript Developer Intern @ Pacewisdom (current)', 20, 140);
      doc.text('• Front-End Intern @ S SPIDERS', 20, 147);
      doc.text('• Full Stack Intern @ Brington Technology', 20, 154);

      doc.setFontSize(14);
      doc.setTextColor(102, 126, 234);
      doc.text('Projects', 20, 171);
      doc.setFontSize(11);
      doc.text('• Database Connectivity with GUI (C#, .NET, MSSQL)', 20, 179);
      doc.text('• Wonderland Play Listen Explore (Scratch)', 20, 186);
      doc.text('• AGRITRADE (MERN)', 20, 193);
      doc.text('• Personal Portfolio (Wix)', 20, 200);
      doc.text('• Dynamic UI Animations (MERN)', 20, 207);
      doc.text('• BENZAMODS (MERN + Three.js)', 20, 214);

      doc.setFontSize(14);
      doc.setTextColor(102, 126, 234);
      doc.text('Achievements', 20, 231);
      doc.setFontSize(11);
      doc.text('• Open AI Day presenter', 20, 239);
      doc.text('• 1st Prize in Multimedia Animation', 20, 246);
      doc.text('• Best animator award', 20, 253);
      doc.text('• Conducted DB workshop', 20, 260);

      doc.save('Varshini_V_Resume.pdf');
    });
  }
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      if (this.getAttribute('href') !== '#') {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}