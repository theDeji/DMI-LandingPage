import styled from "styled-components";

export const FContainer = styled.div`
  background: #ff4d4d;
  padding-top: 20px;
  h2 {
    text-align: center;
    color: white;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 1120px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 540px) {
    display: flex;
    flex-direction: column;
  }
`;

export const FPackages = styled.div`
  height: 400px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-item: center;
  padding: 0 30px;

  @media screen and (max-width: 1120px) {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 540px) {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const FeatureBtn = styled.div`
  width: 120px;
  padding: 5px;
  height: 40px;
  background-color: #b33636;
  border-radius: 10px;
  margin-top: 20px;
  color: white;
  text-align: center;
  transition: all 0.5s ease;

  &:hover {
    background-color: white;
    transform: translateX(5px);
    color: #ff4d4d;
    cursor: pointer;
  }
`;

export const Packages = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1120px) {
    flex-direction: rows;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 540px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ImageContainer = styled.div`
  img {
    width: 250px;
    height: 300px;
    border-radius: 10px;
    box-shadow: 1px 1px 10px 2px white;
  }

  @media screen and (max-width: 1120px) {
    img {
      width: 200px;
      height: 200px;
    }
  }

  @media screen and (max-width: 540px) {
    img {
      width: 150px;
      height: 150px;
      border-radius: 10px;
      box-shadow: 1px 1px 10px 2px white;
      margin: 40px 30px;
    }
  }
`;
export const PackDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  padding: 20px;
  margin-left: 10px;
  line-height: 30px;

  h3 {
    color: black;
    margin-bottom: 10px;
    opacity: 0.7;
  }

  h4 {
    font-weight: bold;
    font-size: 13px;
    color: white;
  }

  @media screen and (max-width: 540px) {
    width: 80%;
    padding: 5px;
    margin-left: 10px;
    margin-bottom: 30px;

    h3 {
      text-align: center;
      color: black;
      margin-bottom: 10px;
      opacity: 0.7;
    }

    h4 {
      font-size: 13px;
      color: white;
      font-weight: bold !important;
    }
  }
`;
