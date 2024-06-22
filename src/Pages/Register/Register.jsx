import React from 'react'
import './Register.css'
import { Field, Form, Formik } from 'formik';
import { registerUser } from '../../Redux/store/users';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default function Register() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    return (
        <div className="container mx-auto flex items-center justify-center mt-10">
            <div className={`p-5 mx-10 max-w-xl rounded-md transition-all flex items-center justify-center bg-white`}>
                <div className={`flex flex-col gap-5`}>
                    <h3 className="text-2xl text-[#666666] font-bold">Register</h3>
                    <Formik
                        initialValues={{ title: '', userName: '', email: '', password: '' }}
                        validate={values => {
                            const errors = {};
                            if (values.title.length < 2) {
                                errors.title = ' Minimum Need Three Chars!';
                            } else if (values.userName.length < 5) {
                                errors.userName = ' Minimum Need Five Chars!'
                            } else if (values.password.length < 8) {
                                errors.password = ' Minimum Need Eight Chars!'
                            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                                errors.email = ' InValide'
                            } else if (values.email.length < 11) {
                                errors.email = ' Minimum Need Eight Chars!'
                            }
                            return errors;
                        }}
                        onSubmit={(values, { resetForm }) => {
                            console.log(values);
                            dispatch(registerUser(values))
                            navigate('/users')
                            resetForm()
                        }}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            /* and other goodies */
                        }) => (
                            <Form onSubmit={handleSubmit} className="flex flex-wrap items-center justify-center gap-4">
                                <div className="flex flex-col gap-1 text-[#666666]">
                                    <label className="text-xs font-bold" htmlFor="name">Name: {errors.title && touched.title && errors.title}</label>
                                    <Field
                                        type="text"
                                        name="title"
                                        className="bg-[#e6e8ed] p-2 rounded-md outline-none border-none"
                                        placeholder="Name"
                                        value={values.count}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                                <div className="flex flex-col gap-1 text-[#666666]">
                                    <label className="text-xs font-bold" htmlFor="name">Username: {errors.userName && touched.userName && errors.userName}</label>
                                    <Field
                                        type="text"
                                        name="userName"
                                        className="bg-[#e6e8ed] p-2 rounded-md outline-none border-none"
                                        placeholder="Username"
                                        value={values.count}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                                <div className="flex flex-col gap-1 text-[#666666]">
                                    <label className="text-xs font-bold" htmlFor="name">Email: {errors.email && touched.email && errors.email}</label>
                                    <Field
                                        type="email"
                                        name="email"
                                        className="bg-[#e6e8ed] p-2 rounded-md outline-none border-none"
                                        placeholder="Email"
                                        value={values.count}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                                <div className="flex flex-col gap-1 text-[#666666]">
                                    <label className="text-xs font-bold" htmlFor="password">Password : {errors.password && touched.password && errors.password}</label>
                                    <Field
                                        type="password"
                                        name="password"
                                        className="bg-[#e6e8ed] p-2 rounded-md outline-none border-none"
                                        placeholder="Password"
                                        value={values.count}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                                <div className="flex items-center justify-center w-full">
                                    <button type="submit" className="rounded-md bg-[#21232d] text-[#9799ab] w-full flex items-center justify-center py-2 hover:bg-slate-700 transition-all">Register</button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>

    )
}
