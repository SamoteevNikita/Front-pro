import { useState } from 'react';
import Header from './components/header/Header';
import Card from './components/card/Card';
import './App.css';

function App() {
  const [cards, setCards] = useState([
    { id: 1, description: 'Смайлик 1', img: '/smile.jpg', votes: 0 },
    { id: 2, description: 'Смайлик 2', img: '/second.jpg', votes: 0 },
    { id: 3, description: 'Смайлик 3', img: '/third.png', votes: 0 },
  ]);

  const [winner, setWinner] = useState(null); 

  const handleVote = (id) => {
    const updated = cards.map((card) =>
      card.id === id ? { ...card, votes: card.votes + 1 } : card
    );
    setCards(updated);
  };

  const handleShowResult = () => {
    if (cards.length === 0) return;

    const maxVotes = Math.max(...cards.map((card) => card.votes));
    const topCard = cards.find((card) => card.votes === maxVotes);
    setWinner(topCard);
  };

  return (
    <>
      <Header />
      <div className="container mt-4">
        <div className="row">
          {cards.map((card) => (
            <div className="col-md-4" key={card.id}>
              <Card
                id={card.id}
                description={card.description}
                img={card.img}
                votes={card.votes}
                onVote={handleVote}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <button className="btn btn-success" onClick={handleShowResult}>
            Result
          </button>
        </div>

        {winner && (
          <div className="mt-4 text-center">
            <h3>Переможець:</h3>
            <img src={winner.img} alt="Winner" style={{ width: '150px' }} />
            <p>{winner.description}</p>
            <p>Голосів: {winner.votes}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
