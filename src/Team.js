import React from "react";
import Matches from "./Matches";
import "./Team.css"
function Team(props){
    const getPlayers = ()=>{
        const players=[]
        for (let i = 0; i < props.players.length; i+=2) {
            players.push({player1:props.players[i],player2:props.players[i+1]})
        }
        return players;
    }
    return(
        <div className={"Team"}>

            <label className={"Title"}>Team Data: {props.getTeamName()}</label>
            <div id={"team-upper-content-container"}>
                <div className={"Glass"} id={"team-players-container"}>
                    <label className={"Label"}>Players:</label>
                    <table>
                        {getPlayers().map((player) => {
                            return (
                                <tr>
                                    <td> {player.player1.firstName}
                                        {player.player1.lastName}
                                        {player.player1.captain && <label>Captain</label>}
                                    </td>
                                    <td> {player.player2.firstName}
                                        {player.player2.lastName}
                                        {player.player2.captain && <label>Captain</label>}
                                    </td>
                                </tr>
                            );
                        })
                        }
                    </table>
                </div>
                <div className={"Glass"} id={"team-stats-container"}>
                    <label className={"Label"}>Stats:</label>
                    <div>Goals: {props.firstHalfVSsecondHalf()}</div>
                    <div>{props.minAndMaxGoal()}</div>
                    <div>{props.minAndMaxCycle()}</div>

                </div>
            </div>
            <div id={"team-lower-content-container"}>
                <div className={"Glass"} id={"team-matches-container"}>
                    <Matches matches={props.matches} setGoals={props.setGoals} answer={"no"} tableSize={800}/>
                </div>


            </div>


        </div>
    )
}

export default Team;