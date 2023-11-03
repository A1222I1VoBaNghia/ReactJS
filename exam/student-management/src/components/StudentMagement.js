import "../App.css";
import React,{Component} from 'react';
class StudentManagement extends Component{
    constructor(props){
        super(props);
        this.state = {
            studentList: [
                {
                    name: "Nguyễn Văn A",
                    phone: "012312123213",
                    email: "abc@gmail.com"
                },
                {
                    name: "Nguyễn Văn B",
                    phone: "012312123213",
                    email: "zxa@gmail.com"
                },
                {
                    name: "Nguyễn Văn C",
                    phone: "012312123213",
                    email: "sdas@gmail.com"
                }
            ],
            form: { name: '', phone: '', email: '' },
            isValid: false,
            indexSelected: -1
    }
    };
    handleChange = (event) => {
        this.setState((state) => {
          const form = state.form
          form[event.target.name] = event.target.value
          return { form }
        }, () => this.checkInvalidForm())
    };
    handleSelect = (studentSelected, index) => {
        this.setState({...this.state,
            form: {...studentSelected},
            indexSelected: index
        })
    };
    checkInvalidForm = () => {
        const { name, phone, email } = this.state.form
        const value = name && phone && email
        this.setState({
          isValid: value
        })
    };
    handleSubmit = () => {
        if(this.state.isValid){
          const newList = [...this.state.studentList]
          if (this.state.indexSelected > -1) {
            newList.splice(this.state.indexSelected,1,this.state.form)
          } else {
            newList.push(this.state.form)
          }
          this.setState({...this.state, studentList: [...newList]})
        }
        this.setState({form:{ name: '', phone: '', email: '' }});
    };
    handleDelete = (index) => {
       const list = this.state.studentList;
       list.splice(index,1);
       this.setState({studentList:list});
    };
    render () {
        return (
          <div>
            <div>
                <h1>Student List</h1>
                <div>
                  <label>Name: </label>
                  <input name="name" value={this.state.form.name}  onChange={(evt) => this.handleChange(evt)} />
                </div>
                <div>
                  <label>Phone: </label>
                  <input type="number" name="phone" value={this.state.form.phone}  onChange={(evt) => this.handleChange(evt)} />
                </div>
                <div>
                  <label>Email: </label>
                  <input name="email" value={this.state.form.email}  onChange={(evt) => this.handleChange(evt)} />
                </div>
                <button onClick={this.handleSubmit}>Submit</button>
                <table>
                  <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                        this.state.studentList.map((values, index) => {
                            return (
                                <tr key={index}>
                                    <td>{values.name}</td>
                                    <td>{values.phone}</td>
                                    <td>{values.email}</td>
                                    <td>
                                        <button onClick={()=>this.handleSelect(values,index)}>Edit</button>
                                    </td>
                                    <td>
                                        <button onClick={()=>this.handleDelete(index)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                  </tbody>
                </table>
            </div>
          </div>
        )
    }
    
}
export default StudentManagement;
