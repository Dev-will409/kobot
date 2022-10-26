import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Input} from "reactstrap";
import {Link} from "react-router-dom";
import styled from 'styled-components';

const LoginTemplate = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


const logIn = () => {
    return(
        <div>
            <LoginTemplate>
                <Card
                    body
                    style={{
                        width: "360px",
                        height: "300px",
                        padding: "20px",
                    }}
                >
                    <CardBody>
                        <CardTitle tag="h1">
                            Kobot
                        </CardTitle>
                        <CardSubtitle
                            tag="h6"
                        >
                            Login
                        </CardSubtitle>
                        <CardText>
                            <Input placeholder={"ID"}/>
                            <Input placeholder={"PASSWORD"}/>
                        </CardText>
                        <Button>
                            <Link to={'/trading'}>login</Link>
                        </Button>
                    </CardBody>
                </Card>
            </LoginTemplate>
        </div>
    )
};

export default logIn;
