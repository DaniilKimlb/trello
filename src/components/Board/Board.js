import s from './Board.module.css'
import React, {useState} from "react";
import Todo from "./Todo/Todo";

export default function Board({
                                  board,
                                  handlerChange,
                                  changeText,
                                  setBoard,
                                  id,
                                  text,
                                  changeListeners,
                                  changeBoard,
                                  listen,
                                  setActive,
                                  deleteTodo,
                                  setCurrentItem,
                                  currentItems,
                                  deleteElement,
                                  setCurrentOrder,
                                  currentOrder
                              }) {
    const [isAdding, setIsAdding] = useState(false)
    const [disable, setDisable] = useState(false)

    function handlerKeyDown(e) {
        const {code} = e
        if (text.trim()) {
            if (code === 'Enter') {
                changeBoard({
                    id,
                    index: setBoard.length + 1,
                    title: text
                })
                CreatingBoardToFalse()

            } else if (code === 'Escape') {
                CreatingBoardToFalse()
            }
        } else {
            setDisable(true)
        }
    }

    const list = setBoard.filter(b => b.id === id)

    function CreatingBoardToFalse() {
        setDisable(false)
        setIsAdding(false)
        changeText('')
    }

    return (board.map((b, i) => {
        return <div key={i} className={s.board}>
            <div className={s.title}>{b.title}</div>
            <div className={s.trello}>
                {list.map((t, i) => {
                        return <Todo t={t} listen={listen} setActive={setActive} changeListeners={changeListeners}
                                     deleteTodo={deleteTodo} key ={i} setCurrentItem = {setCurrentItem} currentItems={currentItems} deleteElement={deleteElement} setCurrentOrders={setCurrentOrder}
                                     currentOrder={currentOrder}/>
                    }
                )
                }
                {!isAdding
                    ? <div className={s.add} onClick={() => setIsAdding(true)}>Add a list...</div>
                    : <div className={s.adding}>
                        <i className="material-icons" onClick={CreatingBoardToFalse}>cancel</i>
                        <input autoFocus={'on'} type="text" onKeyDown={handlerKeyDown}
                               onChange={(e) => handlerChange(e, changeText, setDisable)} placeholder='Add a list...'/>
                        {disable && <div className={s.error}>This field is required!</div>}
                    </div>
                }
            </div>
        </div>
    }))
}
