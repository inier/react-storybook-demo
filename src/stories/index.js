import React, { Fragment } from "react";
import styled from "styled-components";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";
import { Image, Waypoint } from "../components";
import { localPointer } from "../assets";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf("Image", module)
  .add("base", () => {
    const ImageStyle = styled.div`
      img {
        margin: 10px;
      }
    `;
    return (
      <ImageStyle>
        <Image src={localPointer} width="10px" />
        <Image src={localPointer} width="30px" />
        <Image src={localPointer} width="50px" />
        <Image src={localPointer} width="70px" />
        <Image src={localPointer} width="90px" />
      </ImageStyle>
    );
  })
  .add("mix", () => {
    const ImageStyle = styled.div`
      img {
        margin: 10px;
      }
    `;
    return (
      <ImageStyle>
        <Image
          src={localPointer}
          width="60px"
          colors={{
            saturate: 40,
            mix: {
              color: "mistyrose",
              amount: 20
            }
          }}
        />
        <Image
          src={localPointer}
          width="60px"
          colors={{
            brighten: 50
          }}
        />
        <Image
          src={localPointer}
          width="60px"
          colors={{
            mix: {
              color: "mistyrose",
              amount: 20
            }
          }}
        />
      </ImageStyle>
    );
  });

storiesOf("Waypoint", module)
  .add("Enter/Leave", () => (
    <Waypoint
      onEnter={e => {
        console.log("onEnter：", e);
      }}
      onLeave={e => {
        console.log("onLeave：", e);
      }}
    />
  ))
  .add("Enter/Leave with Children", () => (
    <Waypoint
      onEnter={e => {
        console.log("onEnter：", e);
      }}
      onLeave={e => {
        console.log("onLeave：", e);
      }}
    >
      <div style={{ height: "3000px" }}>Some content here</div>
    </Waypoint>
  ))
  .add("PositionChange", () => (
    <Waypoint
      onPositionChange={e => {
        console.log("onPositionChange：", e);
      }}
    />
  ));
