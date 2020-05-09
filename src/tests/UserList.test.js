import React from "react";
import { render, cleanup } from "@testing-library/react";
import UserList from "./../UserList";

let utils, coll, handleRenderData;
beforeEach(() => {
    handleRenderData = jest.fn();
    coll = [{name: "Max"}, {name: "Moritz"}];
    // render App
    utils = render(
        <UserList
            coll={coll} 
            renderData={handleRenderData}
        />
    );
});
afterEach(cleanup);

describe("<UserList />", () => {
    it("can render correct amount of li elements", () => {
        // assert 2 because it should render 2 li's because we have 2 objects in the collection
        expect(utils.getAllByRole("listitem").length).toBe(2);
    });
});