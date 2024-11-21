import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Playlists({ token }) {
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        if (token) fetchPlaylists();
    }, [token]);

    const fetchPlaylists = async () => {
        try {
            const response = await axios.get('https://api.spotify.com/v1/me/playlists', {
                headers: { Authorization: `Bearer ${token}` },
            });
            setPlaylists(response.data.items);
        } catch (error) {
            console.error('Erro ao buscar playlists:', error);
        }
    };

    return (
        <section id="playlists">
            <div className="section__header">
                <h2>Playlists</h2>
            </div>
            <div className="section__content">
                {playlists.map((playlist) => (
                    <div key={playlist.id} className="playlist">
                        <div className="playlist__img">
                            <img src={playlist.images[0]?.url || './assets/default-playlist.png'} alt={playlist.name} />
                        </div>
                        <p className="artist__name">{playlist.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
