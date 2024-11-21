import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Artists({ token }) {
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        if (token) fetchTopArtists();
    }, [token]);

    const fetchTopArtists = async () => {
        try {
            const response = await axios.get('https://api.spotify.com/v1/me/top/artists', {
                headers: { Authorization: `Bearer ${token}` },
            });
            setArtists(response.data.items);
        } catch (error) {
            console.error('Erro ao buscar artistas populares:', error);
        }
    };

    return (
        <section id="artists">
            <div className="section__header">
                <h2>Artistas populares</h2>
            </div>
            <div className="section__content">
                {artists.map((artist) => (
                    <div key={artist.id} className="artist">
                        <div className="artist__img" style={{ backgroundImage: `url(${artist.images[0]?.url || './assets/default-artist.png'})` }}></div>
                        <p className="artist__name">{artist.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
