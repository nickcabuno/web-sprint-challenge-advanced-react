import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>);
    const header = screen.queryByText(/checkout form/i);
    expect(header).toBeInTheDocument();
});


test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>);
    const validName = "Moderna"
    const validZip = "44444"
    const firstNameInput = screen.getByLabelText(/first name:/i);
    userEvent.type(firstNameInput, validName);
    const lastNameInput = screen.getByLabelText(/last name:/i);
    userEvent.type(lastNameInput, validName);
    const addyInput = screen.getByLabelText(/address:/i);
    userEvent.type(addyInput, validName);
    const cityInput = screen.getByLabelText(/city:/i);
    userEvent.type(cityInput, validName);
    const stateInput = screen.getByLabelText(/state:/i);
    userEvent.type(stateInput, validName);
    const zipInput = screen.getByLabelText(/zip:/i);
    userEvent.type(zipInput, validZip);
    const button = screen.getByRole("button");
    userEvent.click(button);
    const success = screen.queryByText(/you have ordered some plants/i);
    expect(success).toBeInTheDocument();
});
