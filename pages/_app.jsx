import '/styles/globals.css'
import './dist/aos.css'
import AOS from 'aos';
// In your component or _app.js
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set animation duration
    });
  }, []);
return (
    <div className="overflow-x-hidden">
      <Component {...pageProps} />
    </div>
  );
}
