import Navbar from '../components/Navbar.jsx';
import Recommendations from '../components/Recommendations.jsx';
import Artists from '../components/Artists.jsx';
import Playlists from '../components/Playlists.jsx';
import '../styles/Home.css';
import Header from '../components/Header.jsx';

export default function Home() {
  const token = localStorage.getItem('spotifyToken'); // Substituir pela lógica de autenticação real
  return (
    <>
      <main id="home">
        <Navbar />
        <Header />
        <div className="container">
          <div className="content">
            <div className="content__column">
              <Recommendations token={token} />
              <Artists token={token} />
              <Playlists token={token} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
