import React, { useState, useEffect } from "react";
import { axiosAuth } from "../auth/axiosAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  
  useEffect(() => {
    axiosAuth()
    .get("http://localhost:5000/api/colors")
    .then(data => {
      setColorList(data);
    });
  }, []);

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
