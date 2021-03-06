import React, { memo } from 'react';
import image from '../Assets/3.png';
let LoginBackground = memo(function LoginBackground(props) {
  return (
    <div>
      <div
        style={{
          width: '100vw',
          height: '100vh',
          position: 'fixed',
          zIndex: '10',
          background: '#020122',
        }}
      ></div>
      <div
        style={{
          position: 'fixed',
          zIndex: '20',
          display: 'flex',
          width: '100vw',
          height: '100vh',
        }}
      >
        <img src={image} width='100%' height='100%' alt='backgroundLogin' />
      </div>
      <div
        style={{
          background: 'RGBA(2,1,34,0.6)',
          width: '100vw',
          height: '100vh',
          position: 'fixed',
          zIndex: '30',
          display: 'none',
        }}
      ></div>
      <div
        style={{
          position: 'fixed',
          zIndex: '40000',
          color: 'white',
          marginLeft: '5vw',
        }}
      >
        <h1 onClick={() => props.handleShow()}>COVID-19</h1>
      </div>
    </div>
  );
});

export default LoginBackground;
