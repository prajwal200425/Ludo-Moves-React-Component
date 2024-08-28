import { useState } from "react"
function LudoBoard() {
    const [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });

    function updateBlue(){
        setMoves({...moves, blue: moves.blue+1});
    }

    function updateYellow(){
        setMoves({...moves, yellow: moves.yellow+1});
    }

    function updateGreen(){
        setMoves({...moves, green: moves.green+1});
    }

    function updateRed(){
        setMoves({...moves, red: moves.red+1});
    }
    return (
        <div>
            <p>Game begains !</p>
            <div className="Board">
                <p>Blue Moves  = {moves.blue}</p>
                <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>

                <p>Yellow Moves  = {moves.yellow}</p>
                <button style={{backgroundColor:"yellow"}} onClick={updateYellow}>+1</button>

                <p>Green Moves  = {moves.green}</p>
                <button style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>

                <p>Red Moves  = {moves.red}</p>
                <button style={{backgroundColor:"red"}} onClick={updateRed}>+1</button>

            </div>
        </div>
    )
}

export default LudoBoard