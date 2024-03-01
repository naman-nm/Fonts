import React from 'react';
import { Footer } from '../src/Component/Footer/Footer';
import { Header } from '../src/Component/Header/Header';
import { Mainstyle } from '../src/Component/MainSection/MainSection';

function App() {
  return (
    <div>

      {/* Header component */}
      <Header />

      {/* Mainstyle component */}
      <Mainstyle />

      {/* Footer component */}
      <Footer />
    </div>
  );
}

export default App;