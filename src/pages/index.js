// https://www.mailjet.com/
// https://www.mailjet.com/demo/
// https://app.mailjet.com/template/1052975/build
// https://github.com/mjmlio/mjml
// https://mjmlio.github.io/mjml-app/
// https://github.com/artf/grapesjs-mjml
// https://github.com/unlayer/react-email-editor
// http://www.konvey.com/wysiwyg-email-builder/
// https://beefree.io/editor/undefined
// https://github.com/wix-incubator/mjml-react
// https://medium.com/@andrewlaurentiu/best-responsive-email-templates-builder-2018-9dedb6883783

import React, { useState } from "react";
import Head from "next/head";
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

    <mj-section background-url="https://picsum.photos/seed/header/900/340" background-size="cover" background-repeat="no-repeat">
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
        <mj-image width="200px" src="https://picsum.photos/seed/content-image/600/400" />
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
        <mj-image width="100px" src="https://picsum.photos/seed/content-image-1/100/100" />
      </mj-column>
      <mj-column>
        <mj-image width="100px" src="https://picsum.photos/seed/content-image-2/100/100" />
      </mj-column>
      <mj-column>
        <mj-image width="100px" src="https://picsum.photos/seed/content-image-3/100/100" />
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

const mjml2html = (src) => {
  let result;

  try {
    result = mjml(src, {
      filePath: null,
      fonts: {},
      beautify: true,
      minify: false,
    });
  } catch (err) {
    result = {
      errors: [err.message],
      html: null,
    };
  }

  return result;
};

const initialRes = mjml2html(initialSrc || "").html;

export default function Index() {
  const [src, setSrc] = useState(initialSrc || "");
  const [res, setRes] = useState(initialRes || "");
  const [errors, setErrors] = useState([]);

  const onChange = (e) => {
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
}
