import React from 'react';
import Download from './components/Download';
import  Upload  from './components/Upload';
import  Parameter  from './components/Parameter';
import './App.less';

function App() {

  return (
    <div className="gif-qrcode">
      <Parameter />
      <div className='gif-qrcode-content'>
        <div className='gif-qrcode-content-input'><input /></div>
        <div className='gif-qrcode-content-qr'>123</div>
        <Upload />
        <Download />
      </div>
    </div>
  );
}

export default App;
