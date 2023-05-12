import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import "../styles/contact.css";

const socialLinks = [
  {
    url: "#",
    icon: "ri-facebook-line",
  },
  {
    url: "#",
    icon: "ri-instagram-line",
  },
  {
    url: "#",
    icon: "ri-linkedin-line",
  },
  {
    url: "#",
    icon: "ri-twitter-line",
  },
];

const Contact = () => {
  return (
    <Helmet title="Contact">
      <CommonSection title="Contact" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Comunicate</h6>

              <Form>
                <FormGroup className="contact__form">
                  <Input placeholder="Nombre" type="text" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Email" type="email" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea
                    rows="5"
                    placeholder="Mensaje"
                    className="textarea"
                  ></textarea>
                </FormGroup>

                <button className=" contact__btn" type="submit">
                  Enviar
                </button>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold">Información de Contacto</h6>
                <p className="section__description mb-0">
                Av.Cordoba 234, CABA
                </p>
                <div className=" d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Teléfono:</h6>
                  <p className="section__description mb-0">11-23454567</p>
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section__description mb-0">carseven@seven.com</p>
                </div>

                
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
