import React, { useState } from 'react';
import './App.css';
var DetectLanguage = require("detectlanguage");
var detectlanguage = new DetectLanguage("d34714de22ee59bb7a43e7a239d8a6aa");

function App() {
  // // var text = "Hello! How are you?";

  // detectlanguage.detect(text).then(function (result: any) {
  //   console.log(JSON.stringify(result));
  // });
  const [textinput, setTextinput] = useState("");
  const detectLanguage = (text: any) => {
    detectlanguage.detect(text).then( function (result: any){
      if (result.length < 1){
        alert("chiu");
      }
      else {
        let detectLang = result.filter((lan: { isReliable: any; }) => lan.isReliable)[0];
        alert(detectLang.language);
      }
    })
  }
  return (
    <div className="App">
      <textarea
        value={textinput}
        onChange={(e) => setTextinput(e.target.value)}
      ></textarea>
      <button onClick={() => detectLanguage(textinput)}>Detect Language</button>
    </div>
  );
}

export default App;
