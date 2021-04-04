import Menu from "./Menu";
import {connect} from "react-redux";
import {createBoard, changeText} from '../../redux/actionCreator'



function MenuContainer({...props}) {
    return <Menu {...props} />
}

function mapStateToProps(state) {
    return {
        board: state.board,
        text: state.currentText
    }
}

export default connect(mapStateToProps, {createBoard, changeText})(MenuContainer)
