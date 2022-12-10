import React, { useState} from "react";

export default function About(props) {

    {/*const [myStyle, setMystyle] = useState({
    
    color: 'white',
    backgroundColor: 'black'
  }) */}
  let myStyle = {
    //color: props.mode ==='dark'?'white':'#042743',
   // backgroundColor: props.mode ==='dark'?'#042743':'white',
    
   // boderColor: props.mode ==='dark'?'white':'#042743'
    color: 'white',
    backgroundColor: '#042743',
    
    boderColor: 'white'
  }
  
  return (
    <>
      <div className="container" style={myStyle}>
        <h1 className="my-3">About Us</h1>
        <div className="accordion" id="accordionExample" style={myStyle}>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                style={myStyle}
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Analyze Your text
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>Textutils gives you a way to analyze your text quickly and efficiently. be it Anything</strong> I
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                style={myStyle}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Free to use
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong> TextUtils is a free character counter tool that provides instant character count & word count statstics for a given text. TextUtils reports the number of words and characters. thus it is suitable for writing text with word/ character limit. </strong>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                style={myStyle}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Browser Compatible
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body"  style={myStyle}>
                <strong>This word counter software works in any web browser such as Chrome, Firefox, Internet, Internet Explorer,Safari, Opera. It suits to count characters in facebook,blog,excel document,pdf document,essays, etc.</strong>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                style={myStyle}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Developer
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body"  style={myStyle}>
                <strong>This website is developed by Eli Shane (Niraj Tiwari )</strong>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container my-3">
        <button type="button" onClick={toggleStyle} className="btn btn-primary">{BtnText}</button>
        </div> */}
      </div>
    </>
  );
}
