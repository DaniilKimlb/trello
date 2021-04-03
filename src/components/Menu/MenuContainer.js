import Menu from "./Menu";
import {connect} from "react-redux";
import {createBoard, changeText} from '../../redux/BoardReducer'

function MenuContainer({board, createBoard, text, changeText}) {
    return <Menu createBoard={createBoard} board={board} text = {text} changeText={changeText}/>
}


function mapStateToProps(state) {
    return {
        board: state.rootReducer.board,
        text: state.rootReducer.currentText
    }
}

export default connect(mapStateToProps, {createBoard, changeText})(MenuContainer)
