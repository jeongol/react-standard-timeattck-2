import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigator = useNavigate();

  return (
    <>
      <div>포켓몬 도감 시작 페이지</div>
      <button onClick={() => navigator("/Dex")}>포켓몬 도감 시작하기</button>
    </>
  );
};

export default Home;
