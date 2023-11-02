import React from 'react';
import Download from './components/Download';
import Upload from './components/Upload';
import Parameter from './components/Parameter';
import QRContent from './components/QRContent';
import './App.less';

function App() {

  return (
    <div className="gif-qrcode">
      <Parameter />
      <div className='gif-qrcode-content'>
        <div className='gif-qrcode-content-input'><input /></div>
        <QRContent />
        <Upload />
        <Download />
      </div>
    </div>
  );
}

export default App;
