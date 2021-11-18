import React from "react";
// import { render } from "@testing-library/react";
import Board from "./../components/Board";
import ShallowRenderer from "react-test-renderer/shallow";

let realUseContext;
let useContextMock;
// Setup mock
beforeEach(() => {
  realUseContext = React.useContext;
  useContextMock = React.useContext = jest.fn();
});
// Cleanup mock
afterEach(() => {
  React.useContext = realUseContext;
});
describe("<Board>", () => {
  it("should create 3 rows in board", async () => {
    useContextMock.mockReturnValue({ boardRow: 3, boardColumn: 3 });
    const renderer = new ShallowRenderer().render(<Board />);
    expect(renderer.props.children.length).toBe(3);
  });

  it("should create 9 cells in board", () => {
       useContextMock.mockReturnValue({ boardRow: 3, boardColumn: 3 });
    const renderer = new ShallowRenderer().render(<Board />);
    let count = 0;
    renderer.props.children.forEach((child) => { count += child.props.children.length;})
   expect(count).toBe(9);
  });

  it("should highlight cell on clicked and hover cell", async () => {});

  it("should highlight winner's cell clicks", async () => {});
});
