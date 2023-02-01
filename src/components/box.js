import "../App.css";
import Grid from "./grid";

var win = null;
var winners = [null, null, null];

function Box(props) {
    var cclass = "sub";
    var mclass = "main";

    function checker(eles, move, game_over){
        if(move <= 4 || game_over === true){
            return [false]
        }
        if(eles["1"] === eles["2"] && eles["2"] === eles["3"] && eles["1"] !== " "){
            if(eles["1"] === "X"){
                win = "X";
                winners = ["1", "2", "3"];
                props.giveWinners(winners);
                return [true, "X", ["1", "2", "3"]]
            }
            else if(eles["1"] === "0"){
                win = "0";
                winners = ["1", "2", "3"];
                props.giveWinners(winners);
                return [true, "0", ["1", "2", "3"]]
            }
        }
        
        if(eles["4"] === eles["5"] && eles["5"] === eles["6"] && eles["4"] !== " "){
            if(eles["4"] === "X"){
                win = "X";
                winners = ["4", "5", "6"];
                props.giveWinners(winners);
                return [true, "X", ["4", "5", "6"]]
            }
            else if(eles["4"] === "0"){
                win = "0";
                winners = ["4", "5", "6"];
                props.giveWinners(winners);
                return [true, "0", ["4", "5", "6"]]
            }
        }
    
        if(eles["7"] === eles["8"] && eles["8"] === eles["9"] && eles["7"]!==" "){
            if(eles["7"] === "X"){
                win = "X";
                winners = ["7", "8", "9"];
                props.giveWinners(winners);
                return [true, "X", ["7", "8", "9"]]
            }
            else if(eles["7"] === "0"){
                win = "0";
                winners = ["7", "8", "9"];
                props.giveWinners(winners);
                return [true, "0", ["7", "8", "9"]]
            }
        }
    
        if(eles["1"] === eles["4"] && eles["4"] === eles["7"] && eles["1"] !== " "){
            if(eles["4"] === "X"){
                win = "X";
                winners = ["1", "4", "7"];
                props.giveWinners(winners);
                return [true, "X", ["1", "4", "7"]]
            }
            else if(eles["4"] === "0"){
                win = "0";
                winners = ["1", "4", "7"];
                props.giveWinners(winners);
                return [true, "0", ["1", "4", "7"]]
            }
        }
    
        if(eles["2"] === eles["5"] && eles["5"] === eles["8"] && eles["2"] !== " "){
            if(eles["2"] === "X"){
                win = "X";
                winners = ["2", "5", "8"];
                props.giveWinners(winners);
                return [true, "X", ["2", "5", "8"]]
            }
            else if(eles["2"] === "0"){
                win = "0";
                winners = ["2", "5", "8"];
                props.giveWinners(winners);
                return [true, "0", ["2", "5", "8"]]
            }
        }
    
        if(eles["3"] === eles["6"] && eles["6"] === eles["9"] && eles["3"] !== " "){
            if(eles["3"] === "X"){
                win = "X";
                winners = ["3", "6", "9"];
                props.giveWinners(winners);
                return [true, "X", ["3", "6", "9"]]
            }
            else if(eles["3"] === "0"){
                win = "0";
                winners = ["3", "6", "9"];
                props.giveWinners(winners);
                return [true, "0", ["3", "6", "9"]]
            }
        }
    
        if(eles["1"] === eles["5"] && eles["5"] === eles["9"] && eles["1"] !== " "){
            if(eles["1"] === "X"){
                win = "X";
                winners = ["1", "5", "9"];
                props.giveWinners(winners);
                return [true, "X", ["1", "5", "9"]]
            }
            else if(eles["1"] === "0"){
                win = "0";
                winners = ["1", "5", "9"];
                props.giveWinners(winners);
                return [true, "X", ["1", "5", "9"]]
            }
        }
    
        if(eles["3"] === eles["5"] && eles["5"] === eles["7"] && eles["3"] !== " "){
            if(eles["3"] === "X"){
                win = "X";
                winners = ["3", "5", "7"];
                props.giveWinners(winners);
                return [true, "X", ["3", "5", "7"]]
            }
            else if(eles["3"] === "0"){
                win = "0";
                winners = ["3", "5", "7"];
                props.giveWinners(winners);
                return [true, "X", ["3", "5", "7"]]
            }
        }
        if(move === 9){
            win = "None";
            props.giveWinners(["1", "2", "3", "4", "5", "6", "7", "8", "9"]);
            return [false, "None"];
        }
        return [false, ""];
    }

    var result = <div className="result"></div>

    if(win !== null){
        result = <div className="result">{win} has won the game!...</div>
    }


    return (
        <div className={mclass}>
            <div className={cclass}>
                <Grid cname={props.ids[0].bclass} id={props.ids[0].id} name = {props.ids[0].name} check = {checker} rend = {props.call}/>
                <Grid cname={props.ids[1].bclass} id={props.ids[1].id} name = {props.ids[1].name} check = {checker} rend = {props.call}/>
                <Grid cname={props.ids[2].bclass} id={props.ids[2].id} name = {props.ids[2].name} check = {checker} rend = {props.call}/>
            </div>
            <div className={cclass}>
                <Grid cname={props.ids[3].bclass} id={props.ids[3].id} name = {props.ids[3].name} check = {checker} rend = {props.call}/>
                <Grid cname={props.ids[4].bclass} id={props.ids[4].id} name = {props.ids[4].name} check = {checker} rend = {props.call}/>
                <Grid cname={props.ids[5].bclass} id={props.ids[5].id} name = {props.ids[5].name} check = {checker} rend = {props.call}/>
            </div>
            <div className={cclass}>
                <Grid cname={props.ids[6].bclass} id={props.ids[6].id} name = {props.ids[6].name} check = {checker} rend = {props.call}/>
                <Grid cname={props.ids[7].bclass} id={props.ids[7].id} name = {props.ids[7].name} check = {checker} rend = {props.call}/>
                <Grid cname={props.ids[8].bclass} id={props.ids[8].id} name = {props.ids[8].name} check = {checker} rend = {props.call}/>
            </div>
            {result}
        </div>
    );
}

export default Box;
