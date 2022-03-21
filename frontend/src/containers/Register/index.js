import React, { useEffect } from 'react'
import { Formik, Form } from 'formik';
import Button from '../../components/common/button';
import { Col, Row } from 'react-bootstrap';
import * as Yup from "yup"
import { TextField } from '../../components/common/input';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from "../Login/actions"

const yup = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
        .email('Email is invalid')
        .required('Email is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 charaters')
        .required('Password is required'),
    confirm_password: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
})
const Register = (props) => {
    const redirect = props.location.search ? props.location.search.split('=')[1] : '/'
    useEffect(() => {
        if (props.user) {
            props.history.push(redirect)
        }

    }, [props.history, redirect, props.user])
    return (
        <div className="flex-col w-100">
            <h1>Register</h1>
            <Row className="flex-col w-100" style={{ padding: 0 }}>
                <Col xl={4} className="w-100">
                    <Formik
                        className="flex-col w-100"
                        initialValues={{
                            name: '',
                            email: '',
                            password: '',
                            confirm_password: ''
                        }}
                        validationSchema={yup}
                        onSubmit={(values, action) => {
                            props.RegisterDispatch(values.name, values.email, values.password)
                            action.resetForm()
                            props.history.push(redirect)
                        }}
                    >
                        {
                            ({ handleSubmit, resetForm }) => (
                                <Form>
                                    <TextField label="Name" name="name" type="text" placeholder="Name" />
                                    <TextField label="Email" name="email" type="email" placeholder="Email" />
                                    <TextField label="Password" name="password" type="password" placeholder="Password" />
                                    <TextField label="Confirm password" name="confirm_password" type="password" placeholder="Confirm password" />
                                    <div className="flex-row w-100">
                                        <Button type="submit" text="Submit" onClick={handleSubmit} />
                                        <Button type="reset" text="Cancel" onClick={resetForm} />
                                    </div>
                                </Form>
                            )
                        }
                    </Formik>
                </Col>
            </Row>
            <Row>
                <Col>
                    Already a customer ? <Link to='/login' >Login</Link>
                </Col>
            </Row>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.login.userInfo,
    }
}
const dispatchStateToProps = (dispatch) => {
    return {
        RegisterDispatch: (name, email, password) => dispatch(register(name, email, password))
    }
}

export default connect(mapStateToProps, dispatchStateToProps)(Register)
