import { useEffect, useState } from 'react';
import '../styles/musicasCurtidas.css';
import settingIcon from '../assets/icon/setting-2.png';
import notificationIcon from '../assets/icon/notification.png';
import Navbar from '../components/Navbar';
import Header from '../components/Header';

export default function MusicasCurtidas() {
    const [likedSongs, setLikedSongs] = useState([]);

    useEffect(() => {
        const usuario = JSON.parse(localStorage.getItem("loggedUser"));
        if (usuario) {
            setLikedSongs(usuario.musicasCurtidas || []);
        }
    }, []);

    return (
        <main id='musicasCurtidas'>
            <Navbar />
            <Header />
            <div className='container'>
                <section>
                    <h2>Músicas Curtidas</h2>
                    {likedSongs.length > 0 ? (
                        likedSongs.map((song, index) => <p key={index}>{song}</p>)
                    ) : (
                        <p>Você ainda não curtiu nenhuma música.</p>
                    )}
                </section>
            </div>
        </main>
    );
};
