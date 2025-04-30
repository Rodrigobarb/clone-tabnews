import Link from 'next/link';

export default function Home() {
  return (  
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Replicate API Integration</h1>
      <Link href="/process">
        <button>Go to Processing Page</button>
      </Link>
    </div>
  );
}
