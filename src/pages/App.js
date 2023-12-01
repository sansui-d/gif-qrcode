import React from 'react';
import Card from '@components/Card'
import Download from './components/Download';
import UploadGif from './components/UploadGif';
import Parameter from './components/Parameter';
import QRContent from './components/QRContent';
import Build from './components/Build';
import './App.less';

function App() {
    return (
        <div className="gif-qrcode">
            <div className="gif-qrcode-drawer">
                <Card title='Qr code parameters'>
                    <Parameter />
                </Card>
            </div>
            <div className="gif-qrcode-content">
                <div className="gif-qrcode-content-top">
                    <div className="gif-qrcode-content-top-left">
                        <Card title='Qr code'>
                            <QRContent />
                        </Card>
                    </div>
                    <div className="gif-qrcode-content-top-right">
                        <Card title='GIF'>
                            <UploadGif />
                        </Card>
                    </div>
                </div>
                <div className="gif-qrcode-content-input">
                    <Build />
                </div>
                <div className="gif-qrcode-content-bottom">
                    <Card title='Qr code with gif'>
                        <Download />
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default App;
