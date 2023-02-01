import { React, useState } from "react";

var move = 0;

var game_over = false;

var render = true;

var eles = {"1":" ","2":" ","3":" ","4":" ","5":" ","6":" ","7":" ","8":" ","9":" "};

function Grid(prop) {
    const [name, Change] = useState(undefined);

    function setVal() {
        if(game_over == false){
            if (name == undefined){
                move++;
                var val = "X";
                if (move % 2 == 0) {
                    val = "0";
                }
                Change(val);
                eles[prop.id] = val;
                var x = prop.check(eles, move, game_over);
                if(x[0] == true || x[1] == "None"){
                    game_over = true;
                    console.log(x);
                }
            }
        }
        if(game_over == true && render == true){
            render = false;
            prop.rend();
        }
    }

    return (
        <div className={prop.cname} id={prop.id} onClick={() => setVal()}>
            {name}
        </div>
    );
}

export default Grid;
