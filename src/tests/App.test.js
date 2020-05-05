import React from "react";
import { render, cleanup, fireEvent, findAllByRole, queryAllByRole } from "@testing-library/react";
import App from "./../App";

// boots up the <App /> so we can share the dom with all tests
let utils, firstName, age, submit;
beforeEach(() => {
    // render App
    utils = render(<App />);
    firstName = utils.getByTestId("firstName")
    age = utils.getByTestId("age");
    submit = utils.getByTestId("submit");
})

afterEach(cleanup);

describe("<App />", () => {

    it("should set value correctlly", () => {
        fireEvent.change(firstName, { target: { value: "Max" } });
        fireEvent.change(age, { target: { value: 18 } });

        expect(firstName.value).toBe("Max");
        expect(age.value).toBe("18");
    });

    // if name and age provided and button clicked it should show that combination
    // {name: "Max", age: 18} => Max: 18 years old
    // li is added to ul
    it("should generate li when provided with firstName and age", async () => {
        fireEvent.change(firstName, { target: { value: "Max" } });
        fireEvent.change(age, { target: { value: 18 } });
        fireEvent.click(submit);

        const liItem = await utils.findByText("Max: 18 years old");
        expect(liItem).toBeDefined(); 
        
        const liItems = await findAllByRole(utils.container, "listitem");
        expect(liItems.length).toBe(1);
    });

    // if name and age NOT provided and button clicked it should show nothing
    // li is not added to the ul
    it("should NOT render li when firstName and age empty", async () => {
        fireEvent.click(submit);

        const liItems = await queryAllByRole(utils.container, "listitem");
        expect(liItems.length).toBe(0);
    });

    // if name is provided and age is NOT and vice versa it should not show
    // li is not added to the ul
    it("should NOT render li when firstName and age empty", async () => {
        fireEvent.change(firstName, { target: { value: "" } });
        fireEvent.change(age, { target: { value: 18 } });
        fireEvent.click(submit);
     
        let liItems = await queryAllByRole(utils.container, "listitem");
        expect(liItems.length).toBe(0);

        fireEvent.change(firstName, { target: { value: "Max" } });
        fireEvent.change(age, { target: { value: "" } });
        fireEvent.click(submit);

        liItems = await queryAllByRole(utils.container, "listitem");
        expect(liItems.length).toBe(0);
    })
});