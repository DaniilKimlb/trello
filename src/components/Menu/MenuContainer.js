import Menu from "./Menu";
import {connect} from "react-redux";
import boardReducer, {createBoard, changeText} from '../../redux/BoardReducer'



function MenuContainer({...props}) {
    return <Menu {...props}/>
}

function mapStateToProps(state) {
    return {
        board: state.board,
        text: state.currentText
    }
}

export default connect(mapStateToProps, {createBoard, changeText})(MenuContainer)
