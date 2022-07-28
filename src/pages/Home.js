import React from "react";
import Questions from "../components/Questions";
import { Typography } from "antd/lib";
import { ToastContainer } from "react-toastify";

const { Title } = Typography;

const Home = ({ data }) => {
  return (
    <>
      <Typography>
        <Title
          type="secondary"
          style={{ fontSize: "35px", textAlign: "center", margin: 15 }}
        >
          Quiz ReactJs
        </Title>
      </Typography>
      <div className="questions-section">
        <Questions data={data} />
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;
