import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'radial-gradient(ellipse at 60% 20%, #ff7eb3 0%, #65d6ff 60%, #18171c 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: '0 0 48px 0',
    }}>
      <header style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 64 }}>
        <Image src="/logo.png" alt="PerfectSpot Logo" width={120} height={120} style={{ boxShadow: '0 8px 32px rgba(127,90,240,0.18)', borderRadius: 32, background: '#fff' }} />
        <h1 style={{ fontSize: 64, fontWeight: 900, margin: '32px 0 8px 0', background: 'linear-gradient(90deg, #ff7eb3 0%, #65d6ff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: -2 }}>PerfectSpot</h1>
        <h2 style={{ fontSize: 28, fontWeight: 500, color: '#fff', textShadow: '0 2px 16px #7f5af0', marginBottom: 32, maxWidth: 600, textAlign: 'center' }}>
          Instantly swipe, save, and get directions to your favorite places. Discover the world, one spot at a time.
        </h2>
      </header>
      <section style={{ background: 'rgba(255,255,255,0.97)', borderRadius: 24, boxShadow: '0 8px 48px rgba(127,90,240,0.10)', padding: '48px 40px', maxWidth: 540, width: '100%', margin: '0 0 40px 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: 20, color: '#222', fontWeight: 500, lineHeight: 1.7 }}>
          <li style={{ marginBottom: 18, display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 28 }}>📍</span> Swipe through curated locations near you
          </li>
          <li style={{ marginBottom: 18, display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 28 }}>⭐</span> Save your favorite spots for later
          </li>
          <li style={{ marginBottom: 18, display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 28 }}>🗺️</span> Get instant directions with one tap
          </li>
          <li style={{ marginBottom: 18, display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 28 }}>🔒</span> Privacy-first: your location is only used for app features
          </li>
          <li style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 28 }}>✨</span> Fast, beautiful, and easy to use
          </li>
        </ul>
        <a
          href="/contact"
          style={{
            marginTop: 40,
            background: 'linear-gradient(90deg, #7f5af0 0%, #65d6ff 100%)',
            color: '#fff',
            border: 'none',
            borderRadius: 12,
            padding: '18px 48px',
            fontWeight: 800,
            fontSize: 22,
            textDecoration: 'none',
            boxShadow: '0 4px 24px rgba(127,90,240,0.12)',
            transition: 'background 0.2s',
            letterSpacing: 1,
          }}
        >
          Get in Touch
        </a>
      </section>
      <footer style={{ color: '#fff', opacity: 0.92, fontSize: 18, fontWeight: 500, marginTop: 24, textAlign: 'center' }}>
        <div style={{ marginBottom: 8 }}>
          <a href="mailto:ernesto@maktubtechnologies.com" style={{ color: '#fff', textDecoration: 'underline', fontWeight: 700 }}>ernesto@maktubtechnologies.com</a>
        </div>
        <div style={{ fontSize: 16, opacity: 0.8 }}>
          &copy; {new Date().getFullYear()} Maktub Technologies. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
