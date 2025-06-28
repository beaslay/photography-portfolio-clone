// src/App.tsx
import { useState } from 'react';
import Header from './components/Header';

/* pages */
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PublicGalleryPage from './pages/PublicGalleryPage';
import PrivateGalleryPage from './pages/PrivateGalleryPage';
import ContactPage from './pages/ContactPage';

type Page = 'home' | 'about' | 'services' | 'pub' | 'priv' | 'contact';

export default function App() {
  const [page, setPage] = useState<Page>('home');

  const render = () => {
    switch (page) {
      case 'about':    return <AboutPage />;
      case 'services': return <ServicesPage />;
      case 'pub':      return <PublicGalleryPage />;
      case 'priv':     return <PrivateGalleryPage />;
      case 'contact':  return <ContactPage />;
      default:         return <HomePage />;
    }
  };

  return (
    <>
      <Header page={page} setPage={setPage} />
      {render()}
    </>
  );
}
