import players from "../constants/players";
import {useState} from "react";

function Players() {
    const [isLiked, setIsLiked] = useState(false)
    const handleLike = () => {
        setIsLiked(!isLiked)
    }
    return (
        <>
        <div className="headingDiv"><h1>Real Madrid 2024</h1></div>
        <div className="cardsBackground">
            {players.map((item) => (
                <div className="playersCard">
                    <div className="goalsAndMatches">
                        <div className="position">{item.position}</div>
                        <div className="totalMatches">{item.totalMatches}</div>
                        <div className="totalGoals">{item.totalGoals}</div>
                        <div className="shirtNumber">{item.shirtNumber}</div>
                        <div className={item.isLiked ? 'like' : 'dislike'} onClick={handleLike}></div>
                        <img
                            className="playerPicture"
                            src={item.imageUrl}
                            alt={item.playerName}
                        />
                    </div>
                    <div className="playerInfo">
                        <div>{item.playerName}</div>
                        <div> {`Age: ${item.age}`} </div>
                        <img className="flag"
                             src={item.nationality}
                             alt="Nationality"
                        />

                    </div>
                </div>
            ))}
        </div>
            </>
    );
}

export default Players
