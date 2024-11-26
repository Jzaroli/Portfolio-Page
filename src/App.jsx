import { Outlet } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

const styles = {
  body: {
    margin: 0,
    padding: 0,
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    flex: 1,
    marginTop: '1vh',
  }
}

function App() {
  return (
    <>
      <div style={styles.body}>
        <Header />
          <main style={styles.main} className="mx-3">
            <Outlet />
          </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
