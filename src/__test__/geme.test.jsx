import React from "react";
// import Game from "./../components/Game";
// import ShallowRenderer from "react-test-renderer/shallow";
// import { render } from "@testing-library/react";

let realUseContext;
// let useContextMock;
// Setup mock
beforeEach(() => {
  realUseContext = React.useContext;
//   useContextMock = React.useContext = jest.fn();
});
// Cleanup mock
afterEach(() => {
  React.useContext = realUseContext;
});

describe("<Game>", () => {
  it("should show Startup page at the begining", async () => {});

  it("should show result box, when game finished", () => {});

  it("should show Finished when game finished", async () => {});

  it("should show board when user start game", async () => {});

  it("should show move history", async () =>{});

  it("should start a new game when use click start new game", async () =>{});

  it("shold show which user have to move", async () =>{});

});
