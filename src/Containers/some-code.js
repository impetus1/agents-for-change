import React from "react";
import { render } from "react-dom";
import { Parallax } from "react-parallax";
import Hello from "./Hello";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};
const insideStyles = {
  background:"#dedede",
  padding: 10,
  position: "absolute",
  top: "90%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};
const insideStyles2 = {
    text:"100px",
    padding: 10,
    position: "absolute",
    top: "90%",
    left: "50%",
    transform: "translate(-50%,-50%)"
  };
const image1 =
  "../Images/mid section.png";
const image2 =
  "../Images/logo_black_bkgd.png";
const image3 =
  "../Images/a-f-c-s.png";
const image4 =
  "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";

const Bleh = () => (
    <div style={styles}>
      <Parallax bgImage={image3} >
        <div style={{ height: 525 }}>
        <a href="#" class="btn btn-secondary btn-lg active" role="button" style={insideStyles2} aria-pressed="true">Learn More</a>
        </div>
      </Parallax>
      <Parallax bgImage={image1} blur={{ min: -3, max: 5 }}>
        <div style={{ height: 250, width: "100%" }}>
          <div style={insideStyles}>Some blur, more work needed</div>
        </div>
      </Parallax>
      <Hello name="but it's coming along" />
      <Parallax bgImage={image2} strength={-100}>
        <div style={{ height: 500 }}>
          <div style={insideStyles}><h2>Some more text!</h2></div>
        </div>
      </Parallax>
      {/*<Parallax
        bgImage={image4}
        strength={200}
        renderLayer={percentage => (
          <div>
            <div
              style={{
                position: "absolute",
                background: `rgba(255, 125, 0, ${percentage * 1})`,
                left: "50%",
                top: "50%",
                borderRadius: "50%",
                transform: "translate(-50%,-50%)",
                width: percentage * 500,
                height: percentage * 500
              }}
            />
          </div>
        )}
      >
        <div style={{ height: 500 }}>
        <div style={insideStyles}><h2>Some more text!</h2></div>
        </div>
    </Parallax>*/}
      <div style={{ height: 200 }} />
      <h2>{"\u23f6"}</h2>
    </div>
  );
export default Bleh;