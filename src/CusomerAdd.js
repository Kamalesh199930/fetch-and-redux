import React, { useState } from "react";
import CustomerView from "./CustomerView";
import { addCustomer as addCustomerAction } from "./slices/customerSlice";
import { useDispatch } from "react-redux";

export default function CustomerAdd() {
    const dispatch = useDispatch();
    const [input, setInput] = useState("");
    // const [customers, setCustomers] = useState([]);
    function addCustomer() {
        if (input) {
            // setCustomers((previousState) => [...previousState, input]);
            dispatch(addCustomerAction(input));

            setInput("");
        }
    }

    return (
        <>
            <div>
                <h3>Add new Customer</h3>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={addCustomer}>Add</button>
            </div>
        </>
    );
}
