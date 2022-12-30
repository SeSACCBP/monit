import React from "react";
import { Link } from "react-router-dom";

const HistoryMenu = () => {
  return (
    <div>
      <Link to="/">2022</Link>
      <br />
      <Link to="/2021">2021</Link>
      <br />
      <Link to="/2020">2020</Link>
      <br />
      <Link to="/2019">2019</Link>
      <br />
    </div>
  );
};

export default HistoryMenu;
