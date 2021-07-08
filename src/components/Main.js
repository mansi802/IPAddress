import React, { useState } from "react";
// import "./Main.css";
import styled from "styled-components";
import { useStateValue } from "../StateProvider";

function Main({ data }) {
  const [ip, setIp] = useState();
  const [{ IP }, dispatch] = useStateValue();

  const EachData = ({ span, className, data }) => {
    return (
      <div className={className}>
        <span>{span}</span>
        <h4>{data}</h4>
      </div>
    );
  };

  return (
    <Container img="/images/pattern-bg.png">
      <h1>IP Address Tracker</h1>
      <div className="input">
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          onChange={(e) => setIp(e.target.value)}
          value={ip}
        />
        <div
          onClick={() => {
            dispatch({ type: "SET_IP", payload: ip });
            setIp("");
          }}
        >
          <img src="/images/icon-arrow.svg" alt="" />
        </div>
      </div>
      <MainData>
        <EachData span="IP ADDRESS" className="eachData" data={data.ip} />
        <EachData
          span="LOCATION"
          className="eachData"
          data={`${data.location.region},${data.location.country} ${data.location.geonameId}`}
        />
        <EachData
          span="TIMEZONE"
          className="eachData"
          data={`UTC ${data.location.timezone}`}
        />
        <EachData span="ISP" className="eachData" data={data.isp} />
      </MainData>
    </Container>
  );
}

export default Main;

const Container = styled.div`
  margin: 0;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  height: 40vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  position: relative;

  h1 {
    margin-top: 20px;
    font-weight: 500;
  }

  .input {
    width: 45vw;
    /* min-width: 500px; */
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    height: 50px;

    @media (max-width: 768px) {
      width: 90vw;
    }

    input {
      flex: 1;
      height: 100%;
      padding: 15px;
      border: none;
      border-radius: 10px 0 0 10px;
      font-weight: 500;
      font-size: 0.95rem;
      color: gray;
      outline: none;
    }

    div {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 50px;
      background-color: black;
      border-radius: 0px 10px 10px 0px;
      cursor: pointer;
    }
  }
`;

const MainData = styled.div`
  position: absolute;
  width: 80vw;
  min-height: 150px;
  background-color: white;
  border: none;
  border-radius: 10px;
  bottom: -65px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 5px;
  z-index: 100;

  @media (max-width: 768px) {
    width: 90vw;
    flex-direction: column;
    text-align: center;
    bottom: -165px;
  }

  .eachData {
    text-align: left;

    @media (max-width: 768px) {
      text-align: center;
    }

    span {
      color: gray;
      font-size: 0.8rem;
      font-weight: 600;
    }

    h4 {
      margin-top: 20px;
      color: black;
      @media (max-width: 768px) {
        margin-top: 10px;
      }
    }
  }
`;
