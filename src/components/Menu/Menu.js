import s from './Menu.module.css'
import {useState} from "react";
import React from "react";
import {NavLink} from "react-router-dom";


function Menu({board, createBoard, text, changeText, handlerChange,}) {
    const [isCreatingBoard, setIsCreatingBoard] = useState(false)
    const [disable, setDisable] = useState(false)

    function handlerClick(e) {
        const title = text
        if (title.trim()) {
            createBoard({
                title,
                id: Date.now().toString()
            })
            CreatingBoardToFalse()
        } else {
            setDisable(true)
        }
    }


    function handlerKeyDown(e) {
        const {code} = e
        if (code === 'Enter') {
            handlerClick()
        } else if (code === 'Escape') {
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
                            <input autoComplete="off" maxLength={20} autoFocus={true}
                                   onChange={(e) => handlerChange(e, changeText, setDisable)}/>
                        </div>
                        {disable && <div className={s.error}>This field is required!</div>}
                        <div className={s.button}>
                            <button type="button" onClick={CreatingBoardToFalse}>Cancel</button>
                            <button type="button" onClick={handlerClick}>Create</button>
                        </div>
                    </div>
                </div>}
            {board.map((b, i) => <NavLink key={i} to={`/b/${b.id}`} onClick={CreatingBoardToFalse}
                                          className={s.board}>{b.title}</NavLink>)}

        </div>
    )
}

export default React.memo(Menu)
