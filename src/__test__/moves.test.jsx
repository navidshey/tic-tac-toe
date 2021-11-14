import React from "react";
// import Moves from "./../components/Moves";
// import ShallowRenderer from "react-test-renderer/shallow";
// import { render } from "@testing-library/react";

let realUseContext;
// let useContextMock;

beforeEach(() => {
  realUseContext = React.useContext;
//   useContextMock = React.useContext = jest.fn();
});

afterEach(() => {
  React.useContext = realUseContext;
});

describe("<Moves>", () => {
  it("should show empty table at the begining", async () => {});

  it("should show show rows", () => {});

  it("should show run jumbTo function", async () => {});

});
