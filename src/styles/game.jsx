import styled from "@emotion/styled";

const blue = "#61ccff";
const grey = "#ddd";
const green = "#4CAF50";
const white = "white";
const black = "black";

const calculateresponsive = (column) => {
  switch (column) {
    case 10:
      return "1340px";
    case 9:
      return "1280px";
    case 8:
      return "1220px";
    case 7:
      return "1160px";
    case 6:
      return "1100px";
    case 5:
      return "1020px";
    case 4:
      return "960px";
    case 3:
      return "900px";
    default:
      return "900px";
  }
};

//board
export const Square = styled.button`
  background: ${(props) => (props.current ? blue : grey)};
  border: 3px solid ${grey};
  float: left;
  font-size: 34px;
  font-weight: bold;
  line-height: 34px;
  height: 60px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  border-radius: 14px;
  color: rgb(10, 10, 10);
  text-align: center;
  width: 60px;
  margin: 3px;

  &:focus {
    outline: none;
    background: ${grey};
  }

  &:hover {
    background: ${blue};
  }
`;

export const Board = styled.div`
  min-width: max-content;
  margin: 25px 0;
`;

export const BoardRow = styled.div`
  &:after {
    clear: both;
    content: "";
    display: table;
  }
`;

//game
export const Game = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: center;
  margin-top: 100px;
  height: auto;
  min-width: max-content;

  ${(props) => `@media (max-width: ${calculateresponsive(+props.columns)}) {
        flex-direction: column;
        align-items: center;
        margin-top: 20px;   
      }`}
`;

export const GameInfo = styled.div`
  margin-left: 20px;
  min-width: 220px;
`;

export const Header = styled.div`
  font-weight: bold;
  font-size: 26px;
  text-align: center;
`;

export const StartNew = styled.div`
  min-width: 220px;
  border: 2px solid ${(props) => (props.show ? green : white)} !important;
  padding: 20px 0px 10px 0px;
  text-align: center;
  margin-right: 19px;
  margin-top: 29px;
`;

//General
export const Btn = styled.button`
  background-color: ${(props) => (props.start == "true" ? green : grey)};
  border: none;
  color: ${black};
  padding: 8px 8px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
  font-weight: ${(props) => (props.start == "true" ? "bold" : "none")};
  margin: ${(props) => (props.start == "true" ? "46px 0px" : "2px")};
  height: ${(props) => (props.start == "true" ? "70px" : "55px")};
  color: ${(props) => (props.start == "true" ? white : black)};
  transition-duration: 0.4s;
  border: 2px solid ${green};
  min-width: 165px;
  cursor: pointer;

  &:hover {
    background-color: ${white};
    color: ${(props) => (props.start == "true" ? green : black)};
  }
`;

//Startup
export const InputText = styled.input`
  ${(props) =>
    props.type == "text"
      ? `width: 100%; 
  padding: 12px;  
  border: 1px solid #ccc; 
  border-radius: 4px; 
  box-sizing: border-box; 
  margin-top: 6px; 
  margin-bottom: 16px; 
  resize: vertical;`
      : props.type == "submit"
      ? ` background-color: #04AA6D;
  color: ${white};
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover{
      background-color: #45a049;
  }`
      : ""}
`;

export const Container = styled.form`
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 40px 60px;
  display: flex;
  flex-direction: column;
  width: 250px;
  margin: auto;
  margin-top: 100px;
`;

export const TableCell = styled.td`
  padding: 0 5px;
`;

export const TableHeader = styled.th`
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: ${green};
  color: ${white};
  text-align: center;
  min-width: 180px;
`;
