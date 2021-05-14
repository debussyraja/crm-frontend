import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";


import { Button,Col, Container, Row , Form} from 'react-bootstrap'

export const ResetPassword =({handleOnchange,formSwitcher,email}) => {
    return(
       <Container>
           <Row>
               <Col>
               <h1 className="text-info text-center" > Reset Password </h1>
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
						
                        <Button type="submit">Reset Password</Button>

               </Form>
               </Col>
            
           </Row>

           <Row>
				<Col>
					<a href="#!"onClick={()=>formSwitcher('login')}>Login Now</a>
				</Col>
			</Row>
       </Container> 
    )

}
ResetPassword.propTypes = {
	formSwitcher: PropTypes.func.isRequired,
	email: PropTypes.string.isRequired,
	
};