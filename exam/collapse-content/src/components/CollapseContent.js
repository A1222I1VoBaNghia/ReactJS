import { Component } from "react";
import Content from "./Content";
class CollapseContent extends Component{
    constructor(){
        super();
        this.state = {
            isExpanded: false,
        };
    }
    handleClick = (isExpand)=>{
        this.setState({isExpanded: !isExpand});
    }
    render(){
        return(
            <>
            <div
              style={{
                backgroundColor: "green",
                textAlign: "center",
                padding: "20px",
              }}
            >
              Conditional Rendering
            </div>
            {
            this.state.isExpanded ? (
          <>
            <button onClick={() => this.handleClick(this.state.isExpanded)}>
              Đóng Giới THiệu
            </button>
            <Content></Content>
          </>
            ) : (
          <>
            <button onClick={() => this.handleClick(this.state.isExpanded)}>
              Mở Giới THiệu
            </button>
          </>
        )}
        </>
        )
    }
}
export default CollapseContent;