import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Recommendations({ token }) {
    const [tracks, setTracks] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 4;

    useEffect(() => {
        if (token) fetchRecommendations();
    }, [token]);

    const fetchRecommendations = async () => {
        try {
            const response = await axios.get(
                'https://api.spotify.com/v1/recommendations?seed_genres=pop',
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setTracks(response.data.tracks);
        } catch (error) {
            console.error('Erro ao buscar recomendações:', error);
        }
    };

    const handlePageChange = (offset) => {
        setCurrentPage((prev) => prev + offset);
    };

    const renderTracks = () => {
        const start = currentPage * itemsPerPage;
        const visibleTracks = tracks.slice(start, start + itemsPerPage);

        return visibleTracks.map((track) => (
            <div key={track.id} className="recommendations b-blue" style={{ backgroundImage: `url(${track.album.images[0]?.url || './assets/default-album.png'})` }}>
                <div className="recommendations__description">
                    <div className="recommendations__description--title">
                        <h3>{track.name}</h3>
                        <p>{track.artists.length} artistas</p>
                    </div>
                    <img src="./assets/icon/player-1.png" alt="" />
                </div>
            </div>
        ));
    };

    return (
        <section id="recommendations">
            <div className="section__header">
                <h2>Recomendações</h2>
                <div className="navigation"></div>
            </div>
            <div className="recommendations__container">
                <button disabled={currentPage === 0} onClick={() => handlePageChange(-1)}>◀</button>
                <div className="section__content">{renderTracks()}</div>
                <button disabled={(currentPage + 1) * itemsPerPage >= tracks.length} onClick={() => handlePageChange(1)}>▶</button>
            </div>
        </section>
    );
};
