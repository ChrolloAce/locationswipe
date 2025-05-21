import Image from 'next/image';

export default function TermsPage() {
  return (
    <main style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #ff7eb3 0%, #65d6ff 100%)', color: '#222', padding: 24 }}>
      <div style={{ background: 'rgba(255,255,255,0.97)', borderRadius: 16, maxWidth: 700, width: '100%', boxShadow: '0 4px 32px rgba(127,90,240,0.10)', padding: 36, margin: '32px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
          <Image src="/logo.png" alt="PerfectSpot Logo" width={48} height={48} />
          <h1 style={{ fontSize: 32, fontWeight: 800, margin: 0 }}>Terms of Use & End User License Agreement (EULA)</h1>
        </div>
        <p style={{ fontWeight: 600, marginBottom: 8 }}>Effective Date: March 4, 2025</p>
        <h2>1. License Grant</h2>
        <p>PerfectSpot is licensed, not sold, to you by Maktub Technologies for use strictly under the terms of this agreement.</p>
        <h2>2. User-Generated Content Policy</h2>
        <p>By using PerfectSpot, you agree not to submit content that violates laws, contains explicit material, encourages harm, or violates intellectual property.</p>
        <h2>3. Termination of Access</h2>
        <p>Maktub Technologies reserves the right to immediately suspend or terminate your access if you violate these terms.</p>
        <h2>4. Subscription & Payment Terms</h2>
        <p>Subscription fees auto-renew unless canceled at least 24 hours before the next billing cycle. All purchases are final.</p>
        <h2>5. Privacy & Data Usage</h2>
        <p>PerfectSpot collects personal data, including location data, and anonymized analytics. Data is encrypted but use at your own risk.</p>
        <h2>6. Acceptable Use Policy</h2>
        <p>Users must not misuse the app, attempt security breaches, or engage in harmful behavior.</p>
        <h2>7. Limitation of Liability</h2>
        <p>Maktub Technologies is not responsible for any damages arising from the use of the app.</p>
        <h2>8. Changes to This Agreement</h2>
        <p>These terms may be updated at any time. Continued use constitutes acceptance.</p>
        <h2>9. Governing Law & Dispute Resolution</h2>
        <p>Disputes are subject to binding arbitration in Los Angeles, CA. No class action lawsuits allowed.</p>
        <h2>10. Indemnification</h2>
        <p>Users agree to indemnify Maktub Technologies against any claims arising from misuse.</p>
        <h2>11. Contact Information</h2>
        <p>For questions, contact us at:<br />
        <span style={{ fontWeight: 600 }}>📧 ernesto@maktubtechnologies.com</span></p>
        <p style={{ marginTop: 24 }}>By using PerfectSpot, you agree to these Terms of Use & EULA.</p>
        <a href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 24, color: '#7f5af0', fontWeight: 700, textDecoration: 'none' }}>
          <Image src="/logo.png" alt="PerfectSpot Logo" width={24} height={24} />
          ← Back to Home
        </a>
      </div>
    </main>
  );
} 