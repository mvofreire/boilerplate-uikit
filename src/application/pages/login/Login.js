import React, { useState } from "react";
import { Input } from "components";
import { Row, Col, Button } from "@hbsis.uikit/react";
import { doLogin } from "services/login";

const Login = ({ setUserSession, history, session }) => {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  const requestAuthentication = async () => {
    try {
      const data = await doLogin({ login, senha });
      setUserSession(data);
      history.push("/admin/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div>
        <Row>
          <Col xs={12}>
            <Input label="E-mail" onChange={v => setLogin(v)} />
          </Col>
          <Col xs={12}>
            <Input label="Senha" onChange={v => setSenha(v)} />
          </Col>
          <Col xs={12}>
            <Button type="primary" onClick={requestAuthentication}>
              Login
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Login;
