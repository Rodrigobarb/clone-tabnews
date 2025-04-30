import Link from 'next/link';
function Home() {
  return <h1>Teste</h1>;
}
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

function teste() {
  console.log("Teste");
}

function teste2(){
  console.log("indentação errada")
}
export default Home;
