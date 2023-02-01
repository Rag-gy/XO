import Box from "./components/box";

var winners = [null, null, null];

function getwinners(wins){
    winners = wins;
}

function App(prop) {
    var ele = [
        { id: "1", name:" ", bclass:"box"},
        { id: "2", name:" ", bclass:"box"},
        { id: "3", name:" ", bclass:"box"},
        { id: "4", name:" ", bclass:"box"},
        { id: "5", name:" ", bclass:"box"},
        { id: "6", name:" ", bclass:"box"},
        { id: "7", name:" ", bclass:"box"},
        { id: "8", name:" ", bclass:"box"},
        { id: "9", name:" ", bclass:"box"},
    ];

    for(var i = 0; i<ele.length; i++){
        if(winners.includes(ele[i].id)){
            ele[i].bclass += " won";
        }
    }

    return <Box ids={ele} call = {prop.func} giveWinners = {getwinners}/>;
}

export default App;
