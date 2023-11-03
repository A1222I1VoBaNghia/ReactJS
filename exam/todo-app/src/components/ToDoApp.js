import React,{Component} from "react";
class ToDoApp extends Component{
    constructor(){
        super();
        this.state = {
            list: [],
            item: ''
        }
    };
    handleChange = (props,value) =>{
        this.setState({
            item: {...this.state.item, [props]:value}
        })
    }
    handleAddItem = () => {
        this.setState((prve) => {
            return {
                list: [...prve.list, prve.item]
            }
        })
    }
    render(){
        return(
        <>
        <div style={{
                textAlign: "center",
                padding: "20px",
              }}  >
        <p>To Do List</p>
        <input onChange={(evt)=>this.handleChange("item", evt.target.value)}></input>
        <button type="button" onClick={this.handleAddItem}>Add</button>
        </div>
        <div>
            <table>
                {
                    this.state.list.map((value, index) => {
                        return (
                            <tr key = {index}>
                                <td>{value.item}</td>
                            </tr>
                        )
                    }
                    )
                }
            </table>
        </div>
        </>
    )}
}
export default ToDoApp;