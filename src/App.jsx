import { Outlet } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

const styles = {
  marginTop: '2vh', 
}

function App() {
  return (
    <>
      <Header />
      <main style={styles} className="mx-3">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
