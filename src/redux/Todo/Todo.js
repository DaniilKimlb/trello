import s from "../../components/Board/Board.module.css";
import cn from "classnames";
import React, {useState} from "react";

export default function Todo({t, listen, setActive, changeListeners, deleteTodo}){
    const [textTusk, setTextTusk] = useState('')

    function handlerChangeTask (index){
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
        return function (e) {
            const {code} = e
            const value = textTusk
            if (value.trim()) {
                if (code === 'Enter') {
                    changeListeners(
                        index,
                        value,
                        {
                            value,
                        }
                    )
                    setTextTusk('')
                }
            }
        }
    }

    return <div className={s.todo}>
        <i className="material-icons" onClick={()=> deleteTodo(t.index)}>cancel</i>
        <div className={s.title}>
            {t.title}
        </div>
        <div className={s.input}>
            <input autoFocus={'on'}  value={listen[t.index]?.value || ''} onChange={handlerChangeTask(t.index)} onKeyDown={handlerKeyDownTusk(t.index)}
                   type="text"/>
        </div>
        {Object.keys(listen).map((ta)=> {
            const task = listen[ta]
            {if (+ta === t.index) {
                return task.tuck.map((el, i) => (
                    <div className={cn({[s.tasks]: el.isActive, [s.tasksDel]: !el.isActive})} key={i}>
                        <span>{el.value}</span>
                        <i onClick={() => setActive({
                            index: t.index,
                            id: i,
                            isActive: !el.isActive
                        })} className="material-icons">
                            check
                        </i>
                    </div>
                ))
            }
            }
        })}
    </div>
}
