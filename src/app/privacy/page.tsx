import Image from 'next/image';

export default function PrivacyPage() {
  return (
    <main style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #ff7eb3 0%, #65d6ff 100%)', color: '#222', padding: 24 }}>
      <div style={{ background: 'rgba(255,255,255,0.97)', borderRadius: 16, maxWidth: 700, width: '100%', boxShadow: '0 4px 32px rgba(127,90,240,0.10)', padding: 36, margin: '32px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
          <Image src="/logo.png" alt="PerfectSpot Logo" width={48} height={48} />
          <h1 style={{ fontSize: 32, fontWeight: 800, margin: 0 }}>Privacy Policy</h1>
        </div>
        <p style={{ fontWeight: 600, marginBottom: 8 }}>Effective Date: March 4, 2025</p>
        <p>PerfectSpot respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and share your information when you use our app.</p>
        <h2>1. Information We Collect</h2>
        <p>We may collect personal and non-personal information, including but not limited to your name, email address, device information, usage data, and your location. Location data is collected solely for app functionality and is never sold or shared for marketing purposes.</p>
        <h2>2. How We Use Your Information</h2>
        <p>Your data is used to improve the app experience, provide customer support, and enhance security. We do not sell your personal information.</p>
        <h2>3. Data Protection</h2>
        <p>We take security measures to protect your information but cannot guarantee complete security. Always protect your login credentials.</p>
        <h2>4. Third-Party Services</h2>
        <p>We may use third-party analytics and advertising services that collect data to improve the app.</p>
        <h2>5. Your Rights</h2>
        <p>You may request access, modification, or deletion of your personal data by contacting us.</p>
        <h2>6. Contact Us</h2>
        <p>If you have any questions or concerns, please contact us at:<br />
        <span style={{ fontWeight: 600 }}>📧 ernesto@maktubtechnologies.com</span></p>
        <p style={{ marginTop: 24 }}>By using PerfectSpot, you agree to this Privacy Policy.</p>
        <a href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 24, color: '#7f5af0', fontWeight: 700, textDecoration: 'none' }}>
          <Image src="/logo.png" alt="PerfectSpot Logo" width={24} height={24} />
          ← Back to Home
        </a>
      </div>
    </main>
  );
} 