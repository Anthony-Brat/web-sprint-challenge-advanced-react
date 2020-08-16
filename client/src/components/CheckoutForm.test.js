import React from "react";
import { render, fireEvent, getByLabelText, findAllByText } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
const {getByText} = render(<CheckoutForm/>);
getByText(/checkout form/i)
});

test("form shows success message on submit with form details", () => {
const {getByLabelText, getByTestId, FindAllByText} = render(<CheckoutForm/>)

fireEvent.change(getByLabelText(/first name/i),{target:{value:"Tony"}})
fireEvent.change(getByLabelText(/last name/i),{target:{value:"Bratcher"}})
fireEvent.change(getByLabelText(/address/i),{target:{value:"43025 Charlton Ave"}})
fireEvent.change(getByLabelText(/city/i),{target:{value:"Hemet"}})
fireEvent.change(getByLabelText(/state/i),{target:{value:"California"}})
fireEvent.change(getByLabelText(/zip/i),{target:{value:"92544"}})


const checkoutButton = getByTestId("checkout")
fireEvent.click(checkoutButton)

findAllByText(/Tony/i);

expect(getByTestId("successMessage")).toBeInTheDocument()

});
