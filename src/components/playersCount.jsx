import players from "../constants/players";

function PlayersCount () {
    return ( <>
        <div>Total players count: {players.length}</div>
        </>
    )
}

export default PlayersCount