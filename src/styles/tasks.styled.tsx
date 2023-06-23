import styled from "@emotion/styled";
import { fadeIn } from ".";
import { Chip, MenuItem } from "@mui/material";
import { getFontColorFromHex } from "../utils";

interface TaskContainerProps {
  backgroundColor: string;
  clr: string;
  done: boolean;
  glow: boolean | string;
}

export const TaskContainer = styled.div<TaskContainerProps>`
  display: flex;
  align-items: center;
  margin-top: 16px;
  transition: 0.3s all;
  background-color: ${(props) => props.backgroundColor};
  opacity: ${(props) => (props.done ? 0.7 : 1)};
  color: ${(props) => props.clr};
  border-left: ${(props) =>
    props.done ? "6px solid #00ff0d" : "6px solid transparent"};
  /* box-shadow: 0 0 128px -32px ${(props) => props.backgroundColor}; */
  box-shadow: ${(props) =>
    props.glow ? `0 0 100px -32px ${props.backgroundColor}` : "none"};
  padding: 16px;
  border-radius: 20px;
  animation: ${fadeIn} 0.5s ease-in;
`;

export const EmojiContainer = styled.span<{ clr: string }>`
  text-decoration: none;
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.clr === "#1A1A1A" ? "#4b4b4b6e" : "#dddddd9d"};
  font-size: 32px;
  padding: 12px;
  width: 42px;
  height: 42px;
  border-radius: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TaskInfo = styled.div<{ done: boolean }>`
  text-decoration: ${(props) => (props.done ? "line-through" : "none")};
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const TaskName = styled.h3`
  margin: 0;
  display: flex;
  align-items: center;
  font-size: 20px;
  /* @media (max-width: 600px) {
      flex-direction: column;
      align-items: flex-start;
    } */
`;

export const TaskDate = styled.p`
  margin: 0 6px;
  text-align: right;
  margin-left: auto;
  font-size: 14px;
  font-style: italic;
  font-weight: 300;
  opacity: 0.9;
  /* @media (max-width: 600px) {
      margin-left: 0;
      margin-top: 4px;
      text-align: left;
    } */
`;

export const TaskDescription = styled.p`
  margin: 0;
  font-size: 18px;
  /* white-space: pre-line;
  line-height: 1em; */
`;

export const NoTasks = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100vw;
  opacity: 0.9;
  font-size: 18px;
  /* @media (max-width: 1024px) {
      font-size: 16px;
    } */
`;

export const TasksContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 700px;
  margin: 0 auto;
  flex-direction: column;
`;

export const TimeLeft = styled.span<{ timeUp: boolean; done: boolean }>`
  color: ${(props) => props.timeUp && !props.done && "#ff2a23d5"};
  text-shadow: ${(props) =>
    props.timeUp && !props.done ? "0 0 8px #ff2a23d5" : "none"};
  transition: 0.3s all;
  font-size: 14px;
  margin: 6px 0;
  font-weight: 500;
  font-style: italic;
  display: flex;
  opacity: ${(props) => (props.timeUp ? 1 : 0.9)};
`;

export const Pinned = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  opacity: 0.8;
  font-size: 16px;
`;
export const StyledMenuItem = styled(MenuItem)`
  margin: 6px;
  padding: 10px;
  border-radius: 12px;
  box-shadow: none;

  &:hover {
    background-color: #f0f0f0;
  }
`;

interface CategoryChipProps {
  backgroundclr: string;
  borderclr?: string;
  glow: boolean;
  list?: boolean;
}

export const CategoryChip = styled(Chip)<CategoryChipProps>`
  color: ${(props) => getFontColorFromHex(props.backgroundclr)};
  background-color: ${(props) => props.backgroundclr};
  box-shadow: ${(props) =>
    props.glow ? `0 0 8px 0 ${props.backgroundclr}` : "none"};
  border: ${(props) =>
    props.borderclr ? `2px solid ${props.borderclr}` : "none"};
  font-weight: bold;
  font-size: 14px;
  margin: 6px 0 0 0;
  padding: 8px;
  transition: 0.3s all;
  opacity: ${(props) => (props.list ? 1 : 0.9)};
  animation: ${fadeIn} 0.5s ease-in;
  &:hover,
  &:focus,
  &:focus-visible {
    background-color: ${(props) => props.backgroundclr};
    box-shadow: ${(props) =>
      props.list && `0 0 8px 0px ${props.backgroundclr}`};
    opacity: ${(props) => props.list && 0.8};
  }
  & .MuiChip-deleteIcon {
    color: ${(props) => getFontColorFromHex(props.backgroundclr)};
    transition: 0.3s all;
    width: 22px;
    height: 22px;
    stroke: transparent;
    @media (max-width: 1024px) {
      width: 26px;
      height: 26px;
    }
    &:hover {
      /* color: #ff0000e5;
      stroke: ${(props) => getFontColorFromHex(props.backgroundclr)}; */
      color: ${(props) => getFontColorFromHex(props.backgroundclr)};
      opacity: 0.8;
    }
  }
`;

export const CategoriesListContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: left;
  gap: 8px;
  overflow-x: auto;
  padding: 0 0 6px 0;
  margin: 8px 0;

  /* Custom Scrollbar Styles */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: #ffffff15;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #ffffff30;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #ffffff50;
  }

  ::-webkit-scrollbar-track {
    border-radius: 4px;
    background-color: #ffffff15;
  }
`;
