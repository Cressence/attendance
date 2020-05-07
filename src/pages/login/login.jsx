import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import './login.css';

const Login = () => {
    return (
        <div>
            <Row>
                <Col md={{ span: 4, offset: 4 }}>
                    <Card className="p-3 login-container">
                        <div className="vertical-section">
                            <img alt="logo" src={require('./../../assets/images/logo.png')} className="logo-login" />
                            <h4>LOGIN</h4>
                        </div>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email:</Form.Label>
                                <Form.Control size="sm" type="email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password:</Form.Label>
                                <Form.Control size="sm" type="password" />
                            </Form.Group>
                            <Button type="submit">
                                Submit
                            </Button>
                        </Form>
                        <footer className="blockquote-footer">
                            <small className="text-muted">Safe Solutions</small>
                        </footer>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Login;
