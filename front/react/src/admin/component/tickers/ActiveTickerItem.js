import React from 'react';

const ActiveTickerItem = ({ ticker, onDelete }) => {
    return (
        <div>
            <span>{ticker.tickerType}: {ticker.tickerName}</span>
            <button onClick={() => onDelete(ticker.tickerName)}>Delete</button>
        </div>
    );
};

export default ActiveTickerItem;
