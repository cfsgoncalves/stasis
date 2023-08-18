import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';



function LoginComponent() {
  return  (
    <>
    <form className="row g-3">
    <div className="col-md-4"> </div>
    <div className="d-grid gap-2 col-md-4">
    <InputGroup>
      <InputGroup.Text id="email-login">@</InputGroup.Text>
      <Form.Control
        placeholder="Email"
        aria-label="Email"
        aria-describedby="email-login"
      />
    </InputGroup>
    <InputGroup className="mb-3">
        <Form.Control
          type="password"
          placeholder="Password"
          aria-label="Password"
          aria-describedby="password-login"
        />
        <InputGroup.Text id="password-login">Secret</InputGroup.Text>
    </InputGroup>
    <Button variant="outline-success">Login</Button>
    <Button variant="outline-primary">Forgot Password?</Button>
    </div>
    <div className="col-md-4"> </div>
    </ form>
    </>
  );
}

export default LoginComponent;
