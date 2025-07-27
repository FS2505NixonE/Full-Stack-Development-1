// src/public/contact.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#contact-form');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const payload = {
      full_name: document.querySelector('#full_name').value,
      email: document.querySelector('#email').value,
      phone: document.querySelector('#phone')?.value || '',
      company_name: document.querySelector('#company_name')?.value || '',
      project_name: document.querySelector('#project_name')?.value || '',
      project_desc: document.querySelector('#project_desc')?.value || '',
      department: document.querySelector('#department')?.value || '',
      message: document.querySelector('#message').value,
      file: null // If you’re not handling file uploads yet, keep this null
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || 'Unknown error');

      alert('Thanks! Your message was saved.');
      form.reset();
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please try again.');
    }
  });
});

// Optional: Show section if a hash is present in the URL
const _hash = window.location.hash;
if (_hash) jQuery(_hash).show();
