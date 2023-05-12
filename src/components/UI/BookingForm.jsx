import React from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";

const BookingForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Form onSubmit={submitHandler}>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="Nombre" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="Apellido" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="email" placeholder="Email" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="number" placeholder="Telefono" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="Automovil" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="Modelo" />
      </FormGroup>

      

      <FormGroup>
        <textarea
          rows={5}
          type="textarea"
          className="textarea"
          placeholder="Comentarios"
        ></textarea>
      </FormGroup>
    </Form>
  );
};

export default BookingForm;
