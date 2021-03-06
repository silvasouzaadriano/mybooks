import styled from 'styled-components';
import { shade } from 'polished';

export const Categories = styled.div`
  max-width: 65vw;
  display: flex;
  align-items: center;
  margin-top: 50px;

  select {
    appearance: none;
    background: #04d361;
    border-radius: 8px;
    border: none;
    color: #fff;
    font-weight: 700;
    padding: 10px;
    margin-right: 16px;
    transition: background-color 0.2s;

    &:focus {
      outline: none;
    }

    &:hover {
      cursor: pointer;
      background: ${shade(0.2, '#04d361')};
    }

    @media (max-width: 425px) {
      width: 100px;
      height: 30px;
      font-size: 1.2vh;
    }
  }

  button {
    width: 95px;
    height: 35px;
    background: #04d361;
    border-radius: 8px;
    border: 0;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    flex-wrap: wrap;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }

    @media (max-width: 425px) {
      width: 40px;
      height: 30px;
      font-size: 1.2vh;
    }
  }
`;

export const Container = styled.div`
  max-width: 65vw;
  margin-top: 50px;
  a {
    display: block;
    text-decoration: none;
    transition: transform 0.2s;
    &:hover {
      transform: translateX(10px);
    }
  }
`;

export const Book = styled.div`
  margin-top: 10px;
  display: block;
  overflow: hidden;
  word-break: break-all;
  max-height: 100px;
  background-color: #fff;
  border-radius: 5px;
  padding: 10px;

  main {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 1.5vw;
      color: #3d3d4d;
      margin-right: 10px;
    }

    span {
      color: #a8a8b3;
    }
  }

  aside {
    margin-top: 5px;
    display: flex;
    justify-content: space-between;

    p {
      align-items: left;
      font-size: 1.2vw;
      color: #a8a8b3;
      margin-top: 5px;
    }
    svg {
      margin-left: auto;
      margin-right: -10px;
      color: #cdcdb6;
      font-size-adjust: 20px;
    }
  }
`;
