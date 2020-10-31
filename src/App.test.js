import React from 'react';
import App from './App';
import {render, fireEvent} from "@testing-library/react";

it("Renders correctly", () => {
    const {queryByTestId, queryByPlaceholderText} = render(<App/>);
    // console.log(render(<App/>).debug());
    expect(queryByTestId("AppComponent")).toBeTruthy();
})