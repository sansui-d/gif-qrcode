import React from "react";
import Download from "./components/Download";
import UploadGif from "./components/UploadGif";
import Parameter from "./components/Parameter";
import QRContent from "./components/QRContent";
import Build from "./components/Build";
import "./App.less";

function App() {
  return (
    <div className="gif-qrcode">
      <Parameter />
      <div className="gif-qrcode-content">
        <div className="gif-qrcode-content-top">
          <div className="gif-qrcode-content-top-left">
            <QRContent />
          </div>
          <div className="gif-qrcode-content-top-right">
            <UploadGif />
          </div>
        </div>
        <div className="gif-qrcode-content-input">
          <Build />
        </div>
        <div className="gif-qrcode-content-bottom">
          <Download />
        </div>
      </div>
    </div>
  );
}

export default App;
