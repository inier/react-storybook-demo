import React, { useState } from "react";
import ProcessImage from "react-imgpro";
import "./Image.scss";

const Image = ({ src = "", width = "auto", height = "auto", ...restProps }) => {
  let [tSrc, setSrc] = useState(src);
  let [err, setErr] = useState(null);
  return (
    <ProcessImage
      image={src}
      resize={{ width, height }}
      processedImage={(src, err) => {
        src && console.log(src) && setSrc(src);
        err && console.log(err) && setErr(err);
      }}
      {...restProps}
    />
  );
};

export default Image;
