import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';

export function App() {
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'info') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast((current) => (current?.message === message ? null : current));
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-[#f8f7f4] text-slate-900 antialiased selection:bg-slate-900 selection:text-white flex flex-col justify-between">
      <div>
        <Navbar showToast={showToast} />
        <main>
          <Hero showToast={showToast} />
          <About />
          <Skills showToast={showToast} />
          <Projects showToast={showToast} />
          <Experience />
          <Contact showToast={showToast} />
        </main>
      </div>

      <Footer />
      <Toast toast={toast} onClose={() => setToast(null)} />
    </div>
  );
}

export default App;
