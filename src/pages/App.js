import React from 'react';
import './App.less';

function App() {

  return (
    <div className="gif-qrcode">
      <div className='gif-qrcode-parameter'>
        <div className='gif-qrcode-parameter-title'>Parameter</div>
        <div className='gif-qrcode-parameter-item'>
          <div className='gif-qrcode-parameter-label'>123</div>
          <div className='gif-qrcode-parameter-value'><input /></div>
        </div>
        <div className='gif-qrcode-parameter-item'>
          <div className='gif-qrcode-parameter-label'>123</div>
          <div className='gif-qrcode-parameter-value'><input /></div>
        </div>
      </div>
      <div className='gif-qrcode-content'>
        <div className='gif-qrcode-content-input'><input /></div>
        <div className='gif-qrcode-content-qr'>123</div>
        <div className='gif-qrcode-content-upload'>Upload</div>
        <div className='gif-qrcode-content-download'>Download</div>
      </div>
    </div>
  );
}

export default App;
