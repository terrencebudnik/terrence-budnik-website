import React, { useState } from 'react';
import * as emailjs from 'emailjs-com';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../css/contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    
    emailjs.init('xGGN7CeusjoOtyIKP'); 
    
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
      
        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        };
      
        emailjs
          .send(
            'service_zd1ca1x', 
            'template_50mjo7w', 
            templateParams
          )
          .then(
            (result) => {
              console.log(result.text);
              alert('Message sent successfully');
              setFormData({ name: '', email: '', message: '' });
            },
            (error) => {
              console.log(error.text);
              alert('Failed to send message');
            }
          );
      };
      

    return (
        <Container className="contact-custom">
            <Row>
                <Col md={6} className="mx-auto">
                    <h2>Contact Me</h2>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="name">Your Name</Label>
                            <Input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Your Email</Label>
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="message">Your Message</Label>
                            <Input
                                type="textarea"
                                name="message"
                                id="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                        <Button className="submit-btn" type="submit">Send Message</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;
