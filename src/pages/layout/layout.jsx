import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Table from 'react-bootstrap/Table'


import './layout.css';

const employeeLogs = () => {
    return (
        <Table responsive="md">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                </tr>
            </tbody>
        </Table>
    )
}

const Layout = () => {
    return (
        <div>
            <Row>
                <Col md="3" className="sidebar">
                    <ListGroup defaultActiveKey="#logs">
                        <ListGroup.Item action href="#logs">Daily Log</ListGroup.Item>
                        <ListGroup.Item action href="#somthing">Weekly Report</ListGroup.Item>
                        <ListGroup.Item action href="#test">Morbi leo risus</ListGroup.Item>
                        <ListGroup.Item action href="#test2">Porta ac consectetur ac</ListGroup.Item>
                        <ListGroup.Item action href="#test3">Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md="9">
                    {employeeLogs()}
                </Col>
            </Row>
        </div>
    );
}

export default Layout;
