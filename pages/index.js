import React, { useState, useEffect } from "react";
import Head from "next/head";
import "../styles/index.scss";
import mjml from "mjml";
import Iframe from "../components/Iframe";

const initialSrc = `<mjml>
<mj-body>
  <mj-section background-color="#f0f0f0">
    <mj-column>
      <mj-text font-style="italic" font-size="20px" color="#626262">
        My Company
      </mj-text>
    </mj-column>
  </mj-section>

  <mj-section background-url="//1.bp.blogspot.com/-TPrfhxbYpDY/Uh3Refzk02I/AAAAAAAALw8/5sUJ0UUGYuw/s1600/New+York+in+The+1960's+-+70's+(2).jpg" background-size="cover" background-repeat="no-repeat">
    <mj-column>
      <mj-text align="center" color="#fff" font-size="40px" font-family="Helvetica Neue">Slogan here</mj-text>
      <mj-button background-color="#F63A4D" href="#">
        Promotion
      </mj-button>
    </mj-column>
  </mj-section>

  <mj-section background-color="#fafafa">
    <mj-column width="400px">
      <mj-text font-style="italic" font-size="20px" font-family="Helvetica Neue" color="#626262">My Awesome Text</mj-text>
      <mj-text color="#525252">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum enim eget magna efficitur, eu semper augue semper. Aliquam erat volutpat. Cras id dui lectus. Vestibulum sed finibus lectus, sit amet suscipit nibh. Proin nec commodo purus. Sed eget
        nulla elit. Nulla aliquet mollis faucibus.
      </mj-text>
      <mj-button background-color="#F45E43" href="#">Learn more</mj-button>
    </mj-column>
  </mj-section>

  <mj-section background-color="white">
    <mj-column>
      <mj-image width="200px" src="https://designspell.files.wordpress.com/2012/01/sciolino-paris-bw.jpg" />
    </mj-column>
    <mj-column>
      <mj-text font-style="italic" font-size="20px" font-family="Helvetica Neue" color="#626262">
        Find amazing places
      </mj-text>
      <mj-text color="#525252">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum enim eget magna efficitur, eu semper augue semper. Aliquam erat volutpat. Cras id dui lectus. Vestibulum sed finibus lectus.</mj-text>
    </mj-column>
  </mj-section>

  <mj-section background-color="#fbfbfb">
    <mj-column>
      <mj-image width="100px" src="//191n.mj.am/img/191n/3s/x0l.png" />
    </mj-column>
    <mj-column>
      <mj-image width="100px" src="//191n.mj.am/img/191n/3s/x01.png" />
    </mj-column>
    <mj-column>
      <mj-image width="100px" src="//191n.mj.am/img/191n/3s/x0s.png" />
    </mj-column>
  </mj-section>

  <mj-section background-color="#e7e7e7">
    <mj-column>
      <mj-button href="#">Hello There!</mj-button>
      <mj-social font-size="15px" icon-size="30px" mode="horizontal">
        <mj-social-element name="facebook" href="https://mjml.io/">
          Facebook
        </mj-social-element>
        <mj-social-element name="google" href="https://mjml.io/">
          Google
        </mj-social-element>
        <mj-social-element name="twitter" href="https://mjml.io/">
          Twitter
        </mj-social-element>
      </mj-social>
    </mj-column>
  </mj-section>
</mj-body>
</mjml>`;

const mjml2html = src => {
  let result;

  try {
    result = mjml(src);
  } catch (err) {
    result = {
      errors: [err.message],
      html: null
    };
  }

  return result;
};

const Home = () => {
  const [src, setSrc] = useState(initialSrc || "");
  const [res, setRes] = useState(mjml2html(initialSrc || "").html || "");
  const [errors, setErrors] = useState([]);

  const onChange = e => {
    let source = e.target.value;
    let result = mjml2html(source);

    setSrc(source || "");
    setRes(result.html || "");
    setErrors(result.errors || []);
  };

  // {errors.map(e => (
  // <p key={e}>{e}</p>
  // ))}

  return (
    <div className="columns">
      <Head>
        <title>Home</title>
      </Head>

      <div className="column">
        <textarea
          value={src}
          style={{ width: "100%" }}
          onChange={onChange}
        ></textarea>
      </div>
      <div className="column">
        <textarea value={res} style={{ width: "100%" }} readOnly></textarea>
      </div>
      <div className="column">
        <Iframe html={res} />
      </div>
    </div>
  );
};

export default Home;
