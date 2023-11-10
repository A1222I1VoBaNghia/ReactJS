import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import {useEffect,useState} from "react";
export default function FormContact() {
    const [form, setForm] = useState();
    const formContact = {
        name: "",
        email: "",
        phone: "",
        message:""
    };
    const handleChange = (e)=>{
        setForm((prve)=>{
            return [...prve,form]
        })
    }
    const formContactValidate = {
        name: Yup.string()
            .required("Required")
            .matches(/^[A-Za-z ]{3,100}$/, "Tên không đúng định dang. Example: Võ Bá Nghĩa"),
        email: Yup.string()
            .required("Required")
            .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,"Email không đúng định dạng. Example: abc@xyz.opm"),
        phone: Yup.string()
        .required("Required")
        .matches(/^0[0-9]{9}$/, "Tên không đúng định dang. Example: 036xzadsas"),
    }
    useEffect(() => {
        return () => {
            alert("Điền thông tin thành công!")
        }
    });
    return(
        <>
            <Formik  initialValues={
                    formContact
                }
            onSubmit={(values) => {
                    console.log(values)
                }}
            validationSchema={
                    Yup.object(formContactValidate)
                }>
            <div>
                <Form>
                    <h1>Contact Form</h1>
                    <div>
                        <lable>Name</lable>
                        <Field type = "text" name="name"></Field>
                        <ErrorMessage name="name" component="p"></ErrorMessage>
                    </div>
                    <div>
                        <lable>Email</lable>
                        <Field type = "text" name="email"></Field>
                        <ErrorMessage name="email" component="p"></ErrorMessage>
                    </div>
                    <div>
                        <lable>Phone</lable>
                        <Field type = "text" name="phone"></Field>
                        <ErrorMessage name="phone" component="p"></ErrorMessage>
                    </div>
                    <div>
                        <lable>Message</lable>
                        <Field type = "text" name="message"></Field>
                    </div>
                    <button type="submit">Submit</button>
                </Form>
            </div>
            </Formik>
        </>
    )

}