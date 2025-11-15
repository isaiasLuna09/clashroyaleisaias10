import React, { useState } from 'react';
import './BattleGame.css';

type Card = {
  id: number;
  name: string;
  damage: number;
  health: number;
  cost: number;
};

const initialCards: Card[] = [
  { id: 1, name: 'Rey Bárbaro', damage: 6, health: 30, cost: 5 },
  { id: 2, name: 'Arquero', damage: 3, health: 15, cost: 3 },
  { id: 3, name: 'Gigante', damage: 8, health: 50, cost: 7 },
];

export default function BattleGame() {
  const [playerHealth, setPlayerHealth] = useState(100);
  const [enemyHealth, setEnemyHealth] = useState(100);
  const [cards] = useState(initialCards);
  const [message, setMessage] = useState('Elige una carta para atacar');

  function playCard(card: Card) {
    setEnemyHealth((prev) => Math.max(prev - card.damage, 0));
    setMessage(`Has atacado con ${card.name} y causado ${card.damage} daño`);

    if (enemyHealth - card.damage <= 0) {
      setMessage('¡Has ganado la batalla!');
    }
  }

  return (
    <div className="battle-game">
      <h1>Batalla Clash Royale</h1>
      <div className="health-bar">
        <div>Tu salud: {playerHealth}</div>
        <div>Salud enemigo: {enemyHealth}</div>
      </div>
      <div className="cards-container">
        {cards.map((card) => (
          <button key={card.id} className="card" onClick={() => playCard(card)}>
            <h3>{card.name}</h3>
            <p>Daño: {card.damage}</p>
            <p>Vida: {card.health}</p>
            <p>Costo: {card.cost}</p>
          </button>
        ))}
      </div>
      <p className="message">{message}</p>
    </div>
  );
}
