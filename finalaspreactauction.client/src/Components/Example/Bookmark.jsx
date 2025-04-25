import { useState, useEffect } from 'react';
import axios from 'axios';

const BookmarkToggle = ({ userId, carId }) => {
    const [isFavorite, setIsFavorite] = useState(false); // Favori durumu
    const [loading, setLoading] = useState(true); // API durumu

    // Favori durumunu API'den al
    useEffect(() => {
        const fetchFavoriteStatus = async () => {
            try {
                const response = await axios.get(`https://localhost:7038/api/Favorite/IsFavorite?userId=${userId}&carId=${carId}`);
                setIsFavorite(response.data.isFavorite); // Favori durumu
            } catch (error) {
                console.error('Error fetching favorite status:', error);
            } finally {
                setLoading(false); // Yükleme tamamlandýðýnda
            }
        };

        fetchFavoriteStatus();
    }, [userId, carId]);

    // Favori durumu deðiþtir
    const handleToggle = async () => {
        try {
            if (isFavorite) {
                // Favorilerden çýkar
                await axios.delete(`https://localhost:7038/api/Favorite?userId=${userId}&carId=${carId}`);
            } else {
                // Favorilere ekle
                await axios.post('https://localhost:7038/api/Favorite/Add', { userId, carId });
            }
            setIsFavorite(!isFavorite); // Durumu deðiþtir
        } catch (error) {
            console.error('Error updating favorite:', error);
        }
    };

    // Yükleniyor durumu varsa, yükleme göstergesi render et
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <label className="ui-bookmark">
            <input type="checkbox" checked={isFavorite} onChange={handleToggle} />
            <div className="bookmark">
                <svg viewBox="0 0 32 32">
                    <g>
                        <path d="M27 4v27a1 1 0 0 1-1.625.781L16 24.281l-9.375 7.5A1 1 0 0 1 5 31V4a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4z"></path>
                    </g>
                </svg>
            </div>
        </label>
    );
};

export default BookmarkToggle;
