import players from "../constants/players";

function mostGoalsScored() {
    let maxGoals = 0;
    let mostGoals = ""

    players.forEach(item => {
        if (item.totalGoals > maxGoals) {
            maxGoals = item.totalGoals;
            mostGoals = item.playerName;
        }
    });

    return mostGoals;
}

function mostGamesPlayed() {
    let mostGames = 0;
    let mostGamesPlayedPlayer = "";

    players.forEach(item => {
        if (item.totalMatches > mostGames) {
            mostGames = item.totalMatches;
            mostGamesPlayedPlayer = item.playerName;
        }
    });

    return mostGamesPlayedPlayer;
}
function MostGoals() {

    return (
        <>
            <div>Most goals scored: {mostGoalsScored()}!</div>
            <div>Most games played: {mostGamesPlayed()}!</div>
        </>
    );
}

export default MostGoals;