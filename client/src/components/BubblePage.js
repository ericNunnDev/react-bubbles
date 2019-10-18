import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  
  useEffect(() => {
    axios
    .get("http://localhost:5000/api/colors")
    .then(res => 
      res.data.results.map(color => ({

      }))
      )
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
