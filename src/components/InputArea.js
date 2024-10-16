import React from 'react';
import FeedbackForm from '../FeedbackForm';

function InputArea({
    input,
    setInput,
    handleSendMessage,
    handleFeedbackModal,
    setShowFeedbackModal,
    showFeedbackModal,
    rating,
    comment,
    setRating,
    setComment,
    saveFeedback,
}) {

    return (
        <div className="input-area">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleSendMessage}>
                Ask
            </button>
            <button onClick={handleFeedbackModal}>
                Save
            </button>

            {showFeedbackModal && (
                <FeedbackForm
                    setOpen={setShowFeedbackModal}
                    open={showFeedbackModal}
                    rating={rating}
                    comment={comment}
                    setRating={setRating}
                    setComment={setComment}
                    saveFeedback={saveFeedback}
                />
            )}
        </div>
    );
};

export default InputArea;
