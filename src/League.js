import Matches from "./Matches";
import "./League.css"
import {formToJSON} from "axios";

function League(props){

    const getCycle=(round)=>{
        return  props.history.filter((matches)=> {return matches.round===round});

    }

    const getAllRounds = () => {
        const rounds = props.getMax();
        const roundArray=[]
        if (props.history.length>0){
            for (let i = props.history[0].round; i <= props.history[props.history.length-1].round; i++) {
                roundArray.push(i)
            }
        }

        return roundArray.map(i => (
            <label className={"round-label"} onClick={()=>props.setCycle(i)}>{i }  </label>
        ));
    };
    return(
        <div className={"League"}>
            <label className={"Title"}>League Data - {props.getLeagueName()}</label>

            <div id={"league-content-container"}>
                <div className={"Glass"} id={"league-history-container"}>
                    <h4>Choose League Cycle between 1 to {props.getMax()}:</h4>
                    <div id={"league-filter-container"}>
                        <label>Min:</label>
                        <input className={"Glass"} id={"league-filter-input"} type={"number"} value={props.cycleMin}
                               onChange={(event) => props.setCycleMinValue(event)}/>
                        <label>Max:</label>
                        <input className={"Glass"} id={"league-filter-input"} type={"number"} value={props.cycleMax}
                               onChange={(event) => props.setCycleMaxValue(event)}/>

                    </div>
                    <button className={"Glass"} id={"league-filter-button"}
                            onClick={() => props.filter()}>Filter
                    </button>
                </div>
                <div className={"Glass"} id={"goals-mvp-container"}>
                    <label className={"Label"}>Goals MVP</label>
                    <table id={"goals-mvp-table"}>
                        <tr>
                            <th>Name</th>
                            <th>Goals</th>
                        </tr>
                        {
                            props.goalsMVP.map((soccer) => {
                                return (
                                    <tr>
                                        <td>{soccer.name}</td>
                                        <td>{soccer.goals}</td>
                                    </tr>
                                )
                            })
                        }
                    </table>
                </div>
            </div>
            <div className={"Glass"} id={"league-matches-container"}>
                <Matches rounds={getAllRounds()} matches={getCycle(props.cycle)} setGoals={props.setGoals} answer={"yes"} tableSize={1000}/>
            </div>

        </div>
    )
}

export default League;