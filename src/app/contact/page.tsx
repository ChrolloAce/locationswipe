import React from 'react';

export default function ContactPage() {
  return (
    <main style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #ff7eb3 0%, #65d6ff 100%)', color: '#222' }}>
      <img src="/logo.png" alt="PerfectSpot Logo" style={{ width: 80, marginBottom: 24 }} />
      <h1>Contact Us</h1>
      <form style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 320, background: 'rgba(255,255,255,0.9)', padding: 24, borderRadius: 12 }}>
        <input type="text" placeholder="Your Name" required style={{ padding: 8, borderRadius: 6, border: '1px solid #ccc' }} />
        <input type="email" placeholder="Your Email" required style={{ padding: 8, borderRadius: 6, border: '1px solid #ccc' }} />
        <textarea placeholder="Your Message" required rows={4} style={{ padding: 8, borderRadius: 6, border: '1px solid #ccc' }} />
        <button type="submit" style={{ background: '#7f5af0', color: '#fff', border: 'none', borderRadius: 6, padding: '10px 0', fontWeight: 600, cursor: 'pointer' }}>Send</button>
      </form>
    </main>
  );
} 