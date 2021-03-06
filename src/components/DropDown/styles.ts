import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  display: table-row;
  max-width: 200px;
  max-height: 400px;
  background: rgba(0, 0, 0, 0.4);
  transition: width 2s, height 2s, transform 2s;
  border-radius: 10px;
  margin-top: 12px;
`;

export const OptionDrop = styled.button`
  width: 100%;
  height: 100%;
  color: white;
  font-size: 20px;
  border: none;
  background: none;
  transition: 0.4s;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  padding: 10px 8px 10px 0px;
  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
  &:first-child {
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }
  &:last-child {
    border: none;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }
`;
