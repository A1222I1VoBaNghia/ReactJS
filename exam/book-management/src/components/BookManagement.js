import {useState} from "react";
import * as Yup from "yup";
import {Formik, Form, Field, ErrorMessage} from "formik";
export function BookManagement(){
    const [books, setBooks] = useState([]);
    const [form, setForm] = useState({});
    const [indexSelected, setIndexSelected] = useState(-1);
    const bookInit = {
        title: "",
        number: 0
    };
    
    const handleValidate={
        title: Yup.string()
        .required("Required"),
        number: Yup.string()
        .required("Required")
        .matches(/^[0-9]/, "Chỉ được nhập số")
    }
    const handleSelected = (book,index)=>{
        setForm(book);
        setIndexSelected(index);
    }
    const deleteBook = (book,index)=>{


    };
    const editBook = (book,index)=>{

    };
    
    return(
        <>
        <Formik
            initialValues={bookInit}
            onSubmit={(values) => {
                console.log(values)
                setBooks((prev)=>{
                    return [...prev,values]
                })
            }}
            validationSchema={Yup.object(handleValidate)}
        >
        <div className='container'>
            <h1>Library</h1>
            <Form>
            <div className="mb-3">
              <label htmlFor="bookTitle" className="form-label">Title</label>
              <Field type="text" className="form-control" name="title" id="bookTitle"/>
              <ErrorMessage name="title" component="span" className="form-err"></ErrorMessage>
            </div>
            <div className="mb-3">
              <label htmlFor="bookQuantity" className="form-label">Number</label>
              <Field type="number" className="form-control" name="number" id="bookQuantity"/>
              <ErrorMessage sage name="number" component="span" className="form-err"></ErrorMessage>
            </div>
            <br></br>
            <button className='btn btn-primary' type='submit'>Submit</button>
            </Form>
            <table>
                <thead>
                    <th>Title</th>
                    <th>Number</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {
                        books.map((values, index) => {
                            return (
                                <tr key={index}>
                                    <td>{values.title}</td>
                                    <td>{values.number}</td>
                                    <td>
                                        <button type="button" onClick={deleteBook}>Delete</button>
                                        <button type="button" onClick={editBook}>Edit</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
        </Formik>
        </>
    )
}