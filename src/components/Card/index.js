import './index.less';

function Card(props) {
    const { children } = props
    return <div className="gif-qrcode-card">
        <div className="gif-qrcode-card-tools">
            <div className="gif-qrcode-card-circle">
                <span className="gif-qrcode-card-red gif-qrcode-card-box"></span>
            </div>
            <div className="gif-qrcode-card-circle">
                <span className="gif-qrcode-card-yellow gif-qrcode-card-box"></span>
            </div>
            <div className="gif-qrcode-card-circle">
                <span className="gif-qrcode-card-green gif-qrcode-card-box"></span>
            </div>
        </div>
        <div className="gif-qrcode-card-content">
            {children}
        </div>
    </div>
}

export default Card
