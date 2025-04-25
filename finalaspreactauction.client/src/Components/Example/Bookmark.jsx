import React, { useState, useEffect } from "react";
import { IconButton, Tooltip } from "@mui/material";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import axios from "axios";

const BookmarkToggle = ({ carId, userId }) => {
    const [isFavorited, setIsFavorited] = useState(false);

    useEffect(() => {
        const checkFavoriteStatus = async () => {
            try {
                const response = await axios.get(`https://localhost:7038/api/Favorite?userId=${userId}&carId=${carId}`);

                if (response.data && response.status === 200) {
                    setIsFavorited(true); 
                    console.log(response.data); 
                } else {
                    setIsFavorited(false); 
                    console.log(response)
                }
            } catch (error) {
                setIsFavorited(false); 
                console.error("Error checking favorite status", error);
            }
        };

        checkFavoriteStatus();
    }, [userId, carId]); 

    const addToFavorites = async () => {
        try {
            const response = await axios.post(`https://localhost:7038/api/Favorite?userId=${userId}&carId=${carId}`);
            if (response.status === 200) {
                setIsFavorited(true);
            }
        } catch (error) {
            console.error("Error adding to favorites", error);
        }
    };

    const removeFromFavorites = async () => {
        try {
            const response = await axios.delete(`https://localhost:7038/api/Favorite?userId=${userId}&carId=${carId}`);
            if (response.status === 200) {
                setIsFavorited(false); 
            }
        } catch (error) {
            console.error("Error removing from favorites", error);
        }
    };

    return (
        <div>
            <Tooltip title={isFavorited ? "Remove from Favorites" : "Add to Favorites"}>
                <IconButton onClick={isFavorited ? removeFromFavorites : addToFavorites}>
                    {isFavorited ? (
                        <BookmarkIcon style={{ color: "green" }} />
                    ) : (
                        <BookmarkBorderIcon />
                    )}
                </IconButton>
            </Tooltip>
        </div>
    );
};

export default BookmarkToggle;
