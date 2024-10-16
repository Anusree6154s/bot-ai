// src/components/FeedbackForm.js
import { Box, Modal, Backdrop, Rating } from '@mui/material';
import React from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 766,
  height: 335,
  bgcolor: '#FAF7FF',
  border: 'none',
  boxShadow: '-4px 4px 10px 0px #00000040',
  borderRadius: 3,
  p: 4,
};


const FeedbackForm = ({ open, setOpen, rating, setRating, comment, setComment, saveFeedback }) => {

  const handleClose = () => setOpen(false);

  const handleSubmit = () => {
    saveFeedback()
    setRating(0);
    setComment('');
    handleClose()
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="feedback-form"
      slots={{
        backdrop: Backdrop,
      }}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(2px)',
          },
        },
      }}
    >
      <Box sx={style}>
        <div className='feedback-form'>
          <div className='feedback-header'>
            <img src="/images/feedback-logo.svg" alt="logo" className='logo' />
            <span>
              Provide Additional Feedback
            </span>
            <img src="/images/feedback-close-button.svg" alt="close-button" className='close-button'  onClick={handleClose}/>
          </div>
          <div className='feedback-rating'>
            <Rating
              name="simple-controlled"
              value={Number(rating)}
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
            />
          </div>
          <textarea className='feedback-message' value={comment}
            onChange={(e) => setComment(e.target.value)} />
          <div className='feedback-submit'>
            <button onClick={handleSubmit} >Submit</button>
          </div>


        </div>

      </Box>
    </Modal>
  );
};

export default FeedbackForm;
