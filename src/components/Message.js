
import { useMediaQuery } from '@mui/system';
import React, { useState } from 'react';
import ThumbsRating from './ThumbsRating';

const Message = ({ sender, text, time, pastConvo }) => {

    const [hovered, setHovered] = useState(false);
    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };


    return (
        <div
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
            className='message-bubble'
        >
            <div>
                <img src={sender === 'user' ? '/images/user-img.svg' : 'images/ai-img.svg'} alt="img" style={{ width: useMediaQuery('(max-width:590px)') ? '45px' : '65px' }} />
            </div>

            <div className='message-bubble-text' style={{ flex: 1 }}>
                <div >
                    <p className='name'>{sender === 'user' ? 'You' : 'Bot AI'}</p>
                    <p className='info'>{text}</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <p className='time'>{time}</p>
                    {!pastConvo && <ThumbsRating hovered={hovered} />}
                </div>

            </div>

        </div>
    );
};

export default Message;
