import React from 'react';
import Topbar from './components/hoc/website/topbar/Topbar';
import Footer from './components/hoc/website/footer/Footer';

function App() {
  return (
    <>
      <Topbar />
      <h1 className="text-3xl font-bold underline bg-red-500">hello react</h1>
      <Footer />
    </>
  );
}

export default App;
