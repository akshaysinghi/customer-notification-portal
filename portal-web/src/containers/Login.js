import React, {useCallback} from "react";
import {useNavigate} from "react-router-dom"
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";
import { testUsernames } from "../utils/constants";

const Login = (props) => {
    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate('/home', {replace: true}), [navigate]);
    return (
    <Container className="bg-light" fluid="md">
      <Row className="justify-content-center">
        {testUsernames.map((data, key) => {
          return (
            <Col key={key} sm="6">
              <Card body>
                <CardTitle tag="h5">{data.name}</CardTitle>
                <CardText>
                  View all notification of associated with <strong>{data.username}</strong>
                </CardText>
                <Button onClick={() => {handleOnClick(); props.loginWithUsername(data.username);}} color="success">Login with @{data.username}</Button>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Login;
