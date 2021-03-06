import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;

  a {
    display: flex;
    align-items: center;

    color: #3a3a3a;
    text-decoration: none;
    margin-right: 16px;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#04d361')};
    }
  }

  svg {
    margin-right: 16px;
    color: #04d361;
  }
`;

export const BookContainer = styled.div`
  margin-top: 20px;
  overflow: hidden;
  word-break: break-all;

  span {
    font-size: 1.6vw;
    font-weight: 700;
  }

  p {
    margin-top: 5px;
    margin-bottom: 20px;
    font-size: 1.2vw;
    font-weight: 100;
  }

  .buttons {
    display: flex;
    align-items: center;

    button {
      width: 120px;
      height: 35px;
      background-color: #04d361;
      font-size: 14px;
      font-weight: bold;
      text-align: center;
      margin-right: 15px;

      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#04d361')};
      }

      @media (max-width: 425px) {
        width: 65px;
        height: 15px;
        font-size: 5px;
      }
    }
  }

  .head {
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const BookDetailModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  padding: 20px;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ebf8ff;

  select {
    margin-right: 8px;
  }

  button {
    background-color: #04d361;
    font-size: 12px;
    width: 50px;
    height: 20px;
    font-weight: bold;
    text-align: center;
    margin-left: 6px;
    padding: 2px;

    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;
