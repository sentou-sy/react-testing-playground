import React from "react";
import { render, cleanup } from "@testing-library/react";
import UserList from "./../UserList";

afterEach(cleanup);

test("<UserList /> can render correct amount of li elements", () => {
    const handleRenderData = jest.fn();
    const coll = [{name: "Max"}, {name: "Moritz"}];

    const { container } = render(
        <UserList
            coll={coll} 
            renderData={handleRenderData}
        />
    );

    // assert 2 because it should render 2 li's because we have 2 objects in the collection
    expect(container.querySelectorAll("li").length).toBe(2);
});