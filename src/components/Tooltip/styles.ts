import styled, { css } from "styled-components";

interface TooltipTargetProps {
  styleMe: boolean;
  highlightOnHover: boolean;
  showOnFocus: boolean;
}

interface TooltipBoxProps {
  positionX: number;
  positionY: number;
}

export const TooltipTarget = styled.button<TooltipTargetProps>`
  border: none;
  background: none;
  height: 100%;
  width: 100%;
  padding: 5px;
  margin: -1px;
  font-size: inherit;
  justify-content: center;
  align-items: center
    ${({ styleMe, highlightOnHover }) =>
      styleMe &&
      css`
        border: ${highlightOnHover ? css`1px solid #393e46` : css``};
        padding: 15px;
        margin: 1px;
        border-radius: 5px;
        font-size: 2rem;
      `};

  color: inherit;
  cursor: inherit;
  display: flex;
  ${({ showOnFocus }) =>
    !showOnFocus &&
    css`
      outline: none;
    `};
`;

export const TooltipBox = styled.span<TooltipBoxProps>`
  position: fixed;
  display: flex;
  color: #fff;
  text-align: center;
  top: ${({ positionY }) => positionY + 20}px;
  left: ${({ positionX }) => positionX + 20}px;
  border-radius: 5px;
  padding: 10px 8px;
  font-size: 1.25rem;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.2);
`;
