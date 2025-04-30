import { useState } from 'react';
import Head from 'next/head';

export default function Process() {
  const [image, setImage] = useState('');
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch('/api/replicate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ image, prompt })
    });

    const data = await response.json();
    setResult(data);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Head>
        <title>AI Image Processing | Lovable</title>
        <meta name="description" content="testa e testa" />
      </Head>

      {/* Header */}
      <header className="px-6 py-4 flex justify-between items-center border-b border-gray-100">
        <div className="flex items-center space-x-8">
          <h1 className="text-xl font-semibold text-gray-900">lovable</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">Support</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Launched</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Learn</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-900">Sign in</a>
          <a href="#" className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">Sign up</a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 py-12 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Idea to image in seconds</h2>
        <p className="text-xl text-gray-600 mb-12">Transform your images with AI-powered magic</p>

        <div className="w-full max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex space-x-4">
              <button type="button" className="flex-1 py-3 border border-gray-200 rounded-md hover:bg-gray-50">
                Attach
              </button>
              <button type="button" className="flex-1 py-3 border border-gray-200 rounded-md hover:bg-gray-50">
                Import
              </button>
            </div>

            <input 
              type="url" 
              placeholder="Paste image URL here" 
              value={image} 
              onChange={(e) => setImage(e.target.value)} 
              required 
              className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />

            <textarea 
              placeholder="Describe what you want to achieve with this image..." 
              value={prompt} 
              onChange={(e) => setPrompt(e.target.value)} 
              required 
              rows="3"
              className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-black text-white py-4 rounded-md font-medium hover:bg-gray-800 transition-colors"
            >
              {loading ? 'Processing...' : 'Transform Image'}
            </button>
          </form>
        </div>

        {result && (
          <div className="mt-16 w-full">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Transformed Image</h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <pre className="text-sm font-mono text-gray-800 overflow-auto max-h-96">
                {JSON.stringify(result, null, 2)}
              </pre>
            </div>
          </div>
        )}
      </main>

      {/* Templates Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Popular templates</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {['Personal website', 'Markdown editor', 'Crypto portfolio tracker', 'Developer portfolio'].map((item) => (
              <div key={item} className="bg-white p-4 rounded-md border border-gray-200 hover:border-black transition-colors cursor-pointer">
                <p className="text-gray-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}