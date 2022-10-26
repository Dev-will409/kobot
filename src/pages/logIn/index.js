import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Input} from "reactstrap";

const logIn = () => {
    return(
        <div><Card
            body
            style={{
                width:'30rem',
                display : 'flex',
                textAlign:'center'
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

                    ID : <Input/>
                    Password : <Input/>
                </CardText>
                <Button>
                    login
                </Button>
            </CardBody>
        </Card>
        </div>
    )
};

export default logIn;
