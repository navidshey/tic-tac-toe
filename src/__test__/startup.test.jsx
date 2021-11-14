import React from "react";
// import StartUp from "./../components/StartUp";
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

describe("<StartUp>", () => {
  it("should validation truely when data entered", async () => {});

  it("should show errors on invelidation", () => {});

  it("should show submit function when data are valid", async () => {});

});
