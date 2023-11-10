import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
export function Email(){
    const [form, setForm] = useState({to: "",
    tilte: "",
    message: "",
    chooseFile: ""});
    const handleValidate={
        tilte: Yup.string()
        .required("Required"),
        to: Yup.string()
        .required("Required")
        .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Invalid email address"),
        message: Yup.string()
        .required("Required")
    };
    

    return(
        <>
            <Formik 
            initialValues={form}
            onSubmit={(values)=>{
                console.log(values);
               
                alert("Sent successfully!!!");
            }}

            validationSchema={Yup.object(handleValidate)}
            >
                <Form>
                    <h1>Mail Form</h1>
                    <div>
                        <label>To</label>
                        <Field type = "email" name = "to"></Field>
                        <ErrorMessage name="to" component="span"></ErrorMessage>
                    </div>
                    <div>
                        <label>Tilte</label>
                        <Field type = "text" name = "tilte"></Field>
                        <ErrorMessage name="tilte" component="span"></ErrorMessage>
                    </div>
                    <div>
                        <label>Message</label>
                        <Field type = "textearea" name = "message"></Field>
                        <ErrorMessage name="mesage" component="span"></ErrorMessage>
                    </div>
                    <div>
                    <Field name="chooseFile">
                        {({ field }) => (
                            <div>
                            <input type="file" {...field} />
                            </div>
                        )}
                    </Field>
                    </div>
                    <button type='submit'>Submit</button>
                </Form>
            </Formik>
        </>
    )

}