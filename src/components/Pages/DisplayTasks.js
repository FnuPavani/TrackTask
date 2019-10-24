import React, {Component} from 'react';
import Classes from "../../assets/Styles/DisplayTasks.css";
import TaskDetails from "../../assets/RequestData/taskDetails.json";
import Checkbox from "../UI/Checkbox";
const defaultNumberOfTasks = 5;
const increaseBy = 5;

class DisplayTasks extends Component{
    constructor(props){
        super(props);
        this.state={
            taskData: TaskDetails.tasks,
            showData: defaultNumberOfTasks
        }
    }

    showMore(e) {
        let showData = this.state.showData+increaseBy;
        this.setState({showData})
    }

    showLess(e) {
        if(this.state.showData === this.state.taskData.length) {
            let showData = defaultNumberOfTasks;
            let showMore = false;
            this.setState({showData, showMore})
        }
    }

    handleCheckbox(e) {
        let checked = e.target.checked;
        const id = e.target.id;
        const index = this.state.taskData.findIndex(obj => obj.id==id);
        if(checked){
            this.setState(Object.assign(this.state.taskData[index] , {completed:true}));
        } else {
            this.setState(Object.assign(this.state.taskData[index] , {completed:false}));
        }
    }

    render(){
        return(
            <div className={Classes.DisplayDiv}>
                <div className={Classes.leftDiv}>
                {this.state.taskData.map((data,index)=>(
                    (index <= (this.state.showData-1) ?
                    <ul key={index}>
                        <li >{data.details}
                        <Checkbox data={data} checkBoxChecked={e=>this.handleCheckbox(e)} />
                        
                        </li>
                    </ul> : null
                )))}
                <div style={{textAlign:"center"}}>
                    {this.state.showData !== this.state.taskData.length ?  
                            <button className={Classes.Btn} type="button" onClick={e=>this.showMore(e)}>Show more</button>
                        :
                            <button className={Classes.Btn} type="button" onClick={e=>this.showLess(e)}>Show less</button>
                    }
                </div>
                </div>
                <div>
                       <pre>{JSON.stringify(this.state.taskData, 4, 4)}</pre> 
                </div>
               
            </div>
        )
    }
}

export default DisplayTasks;