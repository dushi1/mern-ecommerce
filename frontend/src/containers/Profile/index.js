import React, { useEffect } from 'react'
import { Formik, Form } from 'formik';
import Button from '../../components/common/button';
import { Col, Row } from 'react-bootstrap';
import * as Yup from "yup"
import { TextField } from '../../components/common/input';
import { connect } from 'react-redux';
// import { ProfileAction } from "./action"
// import { Link } from 'react-router-dom';
// import axios from 'axios';

const yup = Yup.object({
    email: Yup.string()
        .email('Email is invalid')
        .required('Email is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 charaters')
        .required('Password is required'),
})
const Profile = (props) => {
    useEffect(() => {
        // axios.get(/api/user / profile)
    }, [])

    return (
        <div className="flex-col w-100">
            <h1>Profile</h1>
            <Row className="flex-col w-100" style={{ padding: 0 }}>
                <Col xl={4} className="w-100">
                    <Formik
                        className="flex-col w-100"
                        initialValues={{
                            email: '',
                            password: ''
                        }}
                        validationSchema={yup}
                        onSubmit={(values, action) => {
                            props.LoginDispatch(values.email, values.password)
                            action.resetForm()
                            // props.history.push(redirect)
                        }}
                    >
                        {
                            ({ handleSubmit, resetForm }) => (
                                <Form>
                                    <TextField label="Email" name="email" type="email" placeholder="Email" />
                                    <TextField label="Password" name="password" type="password" placeholder="Password" />
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
                    {/* New customer ? <Link to={redirect ? `/register?redirect=${redirect}` : '/register'} >Register</Link> */}
                </Col>
            </Row>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.login.userInfo,
        products: state.ProductList
    }
}
const dispatchStateToProps = (dispatch) => {
    return {
        LoginDispatch: (email, password) => { }
    }
}
export default connect(mapStateToProps, dispatchStateToProps)(Profile)
