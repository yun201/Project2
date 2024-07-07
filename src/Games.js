import { useState } from "react";
import IMG from './IMG.png';

const Games = () => {
    const filter = (game, data) => {
        if (!game) {
            return data;
        }
        return data.filter(item => item.title.includes(game));
    }

    const [game, setGame] = useState('');
    const [reviews, setReviews] = useState([]);

    const data = [{ title: 'A game', id: 1 }, { title: 'B game', id: 2 }, { title: 'C game', id: 3 }];

    const result = filter(game, data);

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        const newReview = {
            game: e.target.game.value,
            rating: e.target.rating.value,
            comment: e.target.comment.value,
        };
        setReviews([...reviews, newReview]);
        e.target.reset();
    }

    return (
        <div className="games">
            <h1 style={{ display: 'flex', justifyContent: 'center' }}>Games</h1>
            <label htmlFor="search">Search</label>
            <input id="search" type="text" placeholder="Enter a Name" onChange={e => setGame(e.target.value)} />

            <ul>
                {result.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>

            <h1 style={{ display: 'flex', justifyContent: 'center', margin: '50px'}}>Recommend</h1>
            <div className='titleImage'>
                <img src={IMG} alt="img" />
            </div>
            <h3 style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </h3>

            <h1 style={{ display: 'flex', justifyContent: 'center', margin: '50px'}}>Rate and Review</h1>
            <form onSubmit={handleReviewSubmit}>
                <label htmlFor="game">Game</label>
                <input id="game" type="text" required />
                <label htmlFor="rating">Rating</label>
                <input id="rating" type="number" min="1" max="5" required />
                <label htmlFor="comment">Comment</label>
                <textarea id="comment" rows="4" required></textarea>
                <button type="submit">Submit Review</button>
            </form>

            <h2 style={{ display: 'flex', justifyContent: 'center', margin: '50px'}}>User Reviews</h2>
            <ul>
                {reviews.map((review, index) => (
                    <li key={index}>
                        <h3>{review.game}</h3>
                        <p>Rating: {review.rating}</p>
                        <p>{review.comment}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Games;

