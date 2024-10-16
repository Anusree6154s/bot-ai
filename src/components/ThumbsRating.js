import React, { useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const ThumbsRating = ({ hovered }) => {
    const [selected, setSelected] = useState(null);


    const handleThumbUpClick = () => {
        setSelected(selected === 'up' ? null : 'up');
    };

    const handleThumbDownClick = () => {
        setSelected(selected === 'down' ? null : 'down');
    };

    const isVisible = hovered || selected !== null;

    return (
        <div style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.3s ease' }} >
            <IconButton onClick={handleThumbUpClick} >
                {selected === 'up' ? <ThumbUpIcon color="primary" sx={{ fontSize: '20px' }} /> : <ThumbUpOutlinedIcon sx={{ fontSize: '20px' }} />}
            </IconButton>
            <IconButton onClick={handleThumbDownClick}>
                {selected === 'down' ? <ThumbDownIcon color="primary" sx={{ fontSize: '20px' }} /> : <ThumbDownOutlinedIcon sx={{ fontSize: '20px' }} />}
            </IconButton>
        </div>
    );
};

export default ThumbsRating;
