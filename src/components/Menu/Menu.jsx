import s from './Menu.module.css'
import {useState} from "react";
import React from "react";


function Menu({board, createBoard, text, changeText}) {
    const [isCreatingBoard, setIsCreatingBoard] = useState(false)
    const [disable, setDisable] = useState(false)

    function handlerClick() {
        const title = text
        if (title.trim()) {
            createBoard({
                title
            })
            CreatingBoardToFalse()
        } else {
            setDisable(true)
        }
    }

    function handlerChange(e) {
        const currentText = e.target.value
        changeText(currentText)
        if (e.isTrusted && !currentText.trim()) {
            setDisable(true)
        } else {
            setDisable(false)
        }
    }
    function handlerKeyDown(e){
        const {code} = e
        if(code === 'Enter'){
            handlerClick()
        }
        else if(code ==='Escape'){
            CreatingBoardToFalse()
        }
    }
    function CreatingBoardToFalse() {
        setDisable(false)
        setIsCreatingBoard(false)
        changeText('')
    }

    return (
        <div className={s.menu}>
            {!isCreatingBoard
                ? <div className={s.create} onClick={() => setIsCreatingBoard(true)}>Create new a board...</div>
                : <div className={s.creating} onKeyDown={handlerKeyDown}>
                    <i className="material-icons" onClick={CreatingBoardToFalse}>cancel</i>
                    <div className={s.title}>
                        Creating a board
                    </div>
                    <div className={s.question}>
                        What shall we call the board?
                    </div>
                    <div className={s.field}>
                        <div className={s.input}>
                            <input autoComplete="off" autoFocus={true} onChange={handlerChange}/>
                        </div>
                        {disable && <div className={s.error}>This field is required!</div>}
                        <div className={s.button}>
                            <button type="button" onClick={CreatingBoardToFalse}>Cancel</button>
                            <button type="button"  onClick={handlerClick}>Create</button>
                        </div>
                    </div>
                </div>}
            {board.map((b, i) => <div className={s.board} key={i}>{b.title}</div>)}

        </div>
    )
}

export default React.memo(Menu)
