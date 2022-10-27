import React, {useEffect, useState} from "react";
import {Button, Card, Col, Row, Table} from "reactstrap";

const trading = () => {
    return(
        <div>
            <Row>
                <Col md={2}>
                    <Row>
                        <Card>

                        </Card>
                    </Row>
                    <Row>
                        <Card>
                            <Table>
                                <tbody>
                                    <tr>
                                        <th>잔고</th>
                                        <td>1000000</td>
                                    </tr>
                                    <tr>
                                        <th>수익</th>
                                        <td>1000000</td>
                                    </tr>
                                </tbody>
                                <Button>API</Button>
                            </Table>
                        </Card>
                    </Row>
                </Col>
                <Col md={7}>
                    <Card>
                        dsfds
                    </Card>
                </Col>
                <Col md={3}>
                    <Card>

                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md={2}>
                    <Card>
                        <Table>
                            <thead>
                                <th>항목</th>
                                <th>설정값</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>파라미터1</td>
                                    <td>########</td>
                                </tr>
                                <tr>
                                    <td>파라미터2</td>
                                    <td>########</td>
                                </tr>
                                <tr>
                                    <td>파라미터3</td>
                                    <td>########</td>
                                </tr>
                                <tr>
                                    <td>파라미터4</td>
                                    <td>########</td>
                                </tr>
                            </tbody>
                            <Button>API</Button>
                        </Table>
                    </Card>
                </Col>
                <Col md={7}>
                    <Card>

                    </Card>
                </Col>
                <Col md={3}>
                    <Card>

                    </Card>
                </Col>
            </Row>

        </div>
    )
};

export default trading;
