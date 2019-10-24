import React from 'react';
import Classes from "../../assets/Styles/DisplayTasks.css";

const Checkbox = (props) => {
    return(
        <div className={Classes.righttDiv}>
            <input type="checkbox" id={props.data.id} checked={props.data.completed ? "checked" : null} onChange={props.checkBoxChecked}></input>
        </div>
    )
}
export default Checkbox;