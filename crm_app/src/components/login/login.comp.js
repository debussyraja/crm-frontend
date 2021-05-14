import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";


import { Button,Col, Container, Row , Form} from 'react-bootstrap'

export const LoginForm =({handleOnchange,formSwitcher,email, pass}) => {
    return(
       <Container>
           <Row>
               <Col>
               <h1 className="text-info text-center" > Login </h1>
               <hr />
               <Form>
               <Form.Group>
							<Form.Label>Email Address</Form.Label>
							<Form.Control
								type="email"
								name="email"
                                value={email}
                                onChange={handleOnchange}
							
								placeholder="Enter Email"
								required
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								name="password"
                                value={pass}
								onChange={handleOnchange}
							
							
								placeholder="password"
								required
							/>
						</Form.Group>
                        <Button type="submit">Login</Button>

               </Form>
               </Col>
            
           </Row>

           <Row>
				<Col>
					<a href="#!" onClick={() => formSwitcher('reset')}>Forget Password?</a>
				</Col>
			</Row>
       </Container> 
    )

}
LoginForm.propTypes = {
	handleOnchange:PropTypes.func.isRequired,
	formSwitcher:PropTypes.func.isRequired, 
	email: PropTypes.string.isRequired,
	pass: PropTypes.string.isRequired,
};