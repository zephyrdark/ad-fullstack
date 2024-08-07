import React from 'react';
import PropTypes from 'prop-types';
import NewsItem from "./NewsItem";

const NewsList = ({ news }) => {
    console.log("NewsList props:", news); // Add console log to check the props
    return (
        <div>
            {news.map((article, index) => (
                <NewsItem
                    key={index}
                    title={article.title}
                    url={article.articleUrl}
                    author={article.author}
                />
            ))}
        </div>
    );
};

NewsList.propTypes = {
    news: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            articleUrl: PropTypes.string.isRequired,
            author: PropTypes.string,
        })
    ).isRequired,
};

export default NewsList;