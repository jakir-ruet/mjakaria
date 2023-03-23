import React from 'react';
import Topbar from './components/hoc/website/topbar/Topbar';
import Navbar from './components/hoc/website/navbar/components/EachNavbar';
import Footer from './components/hoc/website/footer/Footer';

function App() {
  return (
    <React.Fragment>
      <Topbar />
      <Navbar />
      <h1 className="text-3xl font-bold underline bg-red-500">hello react</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <Footer />
    </React.Fragment>
  );
}

export default App;
