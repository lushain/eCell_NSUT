import { Outlet, ScrollRestoration } from 'react-router-dom'
import { useEffect, useState } from 'react';
import IntroAnimation from './components/IntroAnimation/IntroAnimation.jsx';

const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  // Lock scrolling while intro is playing
  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showIntro]);

  return (
    <>
      {showIntro && <IntroAnimation onComplete={() => setShowIntro(false)} />}
      <ScrollRestoration />
      <Outlet />
    </>
  );
};

export default App;

