import React from "react";
import { Waypoint } from "react-waypoint";

export default ({children, ...restProps}) => {
  return <Waypoint scrollableAncestor={window} {...restProps}>{children}</Waypoint>;
};
