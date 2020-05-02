import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import './login.css';

const Login = () => {
    return (
        <div>
            <Row>
                <Col md={{ span: 4, offset: 4 }}>
                    <Card className="p-3 login-container">
                        <blockquote className="blockquote mb-0 card-body">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                erat a ante.
                            </p>
                            <footer className="blockquote-footer">
                                <small className="text-muted">Safe Solutions</small>
                            </footer>
                        </blockquote>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Login;
