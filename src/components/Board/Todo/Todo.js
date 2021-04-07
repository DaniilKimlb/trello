import s from "../Board.module.css";
import cn from "classnames";
import React, {useEffect, useRef, useState} from "react";

export default function Todo({
                                 t,
                                 listen,
                                 setActive,
                                 changeListeners,
                                 deleteTodo,
                                 setCurrentItem,
                                 currentItems,
                                 deleteElement,

                             }) {
    const [textTusk, setTextTusk] = useState('')
    const [order, setOrder] = useState(0)
    const [date, setDate] = useState(Date.now().toString())
    const timeStyle = useRef(() => {
    })
    useEffect(() => {
        timeStyle.current = (e) => setTimeout(() => e.target.style.display = 'none', 0)
    }, [currentItems])

    function handlerChangeTask(index) {
        return function (e) {
            setTextTusk(e.target.value)
            const value = e.target.value
            changeListeners(
                index,
                value,
            )
        }
    }

    function handlerKeyDownTusk(index) {
        return (e) => {
            const {code} = e
            const value = textTusk
            const id = getData()
            if (value.trim()) {
                if (code === 'Enter') {
                    setOrder(prevState => prevState + 1)
                    changeListeners(
                        index,
                        value,
                        {
                            order: order,
                            value,
                            id
                        }
                    )
                    setTextTusk('')
                }
            }
        }
    }


    function handlerMouseDown(el, index) {
        return (e) => {
            setCurrentItem({...el, index})

        }
    }

    function handlerDragOver(e) {

        e.preventDefault()

    }

    function handlerDragStart(e) {
        timeStyle.current(e)
    }

    function handlerDrop(indexD) {
        return (e) => {
            const value = currentItems.value
            const index = indexD
            const id = getData()
            deleteElement({id: currentItems.id, index: currentItems.index})
            changeListeners(
                index,
                '',
                {
                    order: order,
                    value,
                    id
                }
            )
        }
    }

    function handlerDragEnd() {
        return function (e) {
            e.target.style.display = 'flex'
        }
    }

    function getData() {
        setDate(Date.now().toString())
        return date
    }

    return <div className={s.todo} onDragOver={handlerDragOver} onDrop={handlerDrop(t.index)}
    >
        <i className="material-icons" onClick={() => deleteTodo(t.index)}>cancel</i>
        <div className={s.title}>
            {t.title}
        </div>
        <div className={s.input}>
            <input autoFocus={'on'} value={listen[t.index]?.value || ''} onChange={handlerChangeTask(t.index)}
                   onKeyDown={handlerKeyDownTusk(t.index)}
                   type="text"/>
        </div>

        {Object.keys(listen).map((elem) => {
            if (t.index !== +elem) return
            return listen[elem]?.tuck.sort((a, b) => {
                return a.order - b.order
            }).map((el, i) => {
                return (
                    <div className={cn({[s.tasks]: el.isActive, [s.tasksDel]: !el.isActive})} key={i}
                         draggable={"true"} onMouseDown={handlerMouseDown(el, t.index)}
                         onDragStart={handlerDragStart}
                         onDragEnd={handlerDragEnd(t.index)}
                    >
                        <span>{el.value}</span>
                        <i onClick={() => setActive({
                            index: t.index,
                            id: i,
                            isActive: !el.isActive
                        })} className="material-icons">
                            check
                        </i>
                    </div>
                )
            })

        })}

    </div>
}
