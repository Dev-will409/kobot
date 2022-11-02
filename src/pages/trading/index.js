import React, {useEffect, useState} from "react";
import {Button, Card, Col, Row, Table} from "reactstrap";

const trading = () => {
    return(
        <div style={{margin:"30px", height:"100%", width:"100%"}}>
            <Row style={{margin:"10px", height:"50%"}}>
                <Col md={2}>
                    <Row>
                        <Col>
                            <Card style={{height : "100%"}}>
                                sdfsdf
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card style={{height : "100%"}}>
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
                        </Col>
                    </Row>
                </Col>
                <Col md={7}>
                    <Card style={{height : "100%"}}>
                        dsfds
                    </Card>
                </Col>
                <Col md={3}>
                    <Card style={{height : "100%"}}>
                        <Table style={{padding:"10px"}}>
                            <tbody>
                            <tr>
                                <td>28,000,000</td>
                                <td>2.00</td>
                                <td>2.00</td>
                                <td>28,000,000</td>
                            </tr>
                            <tr>
                                <td>28,000,000</td>
                                <td>2.00</td>
                                <td>2.00</td>
                                <td>28,000,000</td>
                            </tr>
                            <tr>
                                <td>28,000,000</td>
                                <td>2.00</td>
                                <td>2.00</td>
                                <td>28,000,000</td>
                            </tr>
                            <tr>
                                <td>28,000,000</td>
                                <td>2.00</td>
                                <td>2.00</td>
                                <td>28,000,000</td>
                            </tr>
                            <tr>
                                <td>28,000,000</td>
                                <td>2.00</td>
                                <td>2.00</td>
                                <td>28,000,000</td>
                            </tr>
                            </tbody>
                        </Table>
                    </Card>
                </Col>
            </Row>
            <Row style={{margin:"10px", height:"50%"}}>
                <Col md={2}>
                    <Card style={{height : "100%"}}>
                        <Table style={{padding:"10px"}}>
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
                            <Button>수정</Button>
                        </Table>
                    </Card>
                </Col>
                <Col md={7}>
                    <Card style={{height : "100%"}}>
                        <Table style={{padding:"10px"}}>
                            <thead>
                            <th>종목</th>
                            <th>거래 시간</th>
                            <th>포지션</th>
                            <th>수량</th>
                            <th>가격</th>
                            <th>수수료</th>
                            </thead>
                            <tbody>
                            <tr>
                                <td>#####</td>
                                <td>##.##.##</td>
                                <td>buy</td>
                                <td>########</td>
                                <td>########</td>
                                <td>########</td>
                            </tr>
                            <tr>
                                <td>#####</td>
                                <td>##.##.##</td>
                                <td>buy</td>
                                <td>########</td>
                                <td>########</td>
                                <td>########</td>
                            </tr>
                            <tr>
                                <td>#####</td>
                                <td>##.##.##</td>
                                <td>buy</td>
                                <td>########</td>
                                <td>########</td>
                                <td>########</td>
                            </tr>
                            <tr>
                                <td>#####</td>
                                <td>##.##.##</td>
                                <td>buy</td>
                                <td>########</td>
                                <td>########</td>
                                <td>########</td>
                            </tr>
                            <tr>
                                <td>#####</td>
                                <td>##.##.##</td>
                                <td>buy</td>
                                <td>########</td>
                                <td>########</td>
                                <td>########</td>
                            </tr>
                            </tbody>
                        </Table>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card style={{height : "100%"}}>

                    </Card>
                </Col>
            </Row>

        </div>
    )
};

export default trading;
