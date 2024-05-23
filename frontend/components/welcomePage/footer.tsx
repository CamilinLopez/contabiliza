import React from 'react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#232f3e', color: 'white', padding: '10px 20px', fontFamily: 'Amazon Ember, Helvetica Neue, Roboto, Arial, sans-serif', position: 'fixed', left: 0, bottom: 0, width: '100%', zIndex: 999 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}> {/* Flexbox container */}
        <div> {/* Left side content */}
          <p style={{  fontSize: '12px' }}><a href="#" style={{ color: 'white' }}>Comentarios</a></p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}> {/* Right side content */}
          <div style={{ marginRight: '10px' }}>
            <a href="#" style={{ fontSize: '12px', color: 'white' }}>Privacidad</a><br />
          </div>
          <div style={{ marginRight: '10px' }}>
            <a href="#" style={{ fontSize: '12px', color: 'white' }}>Términos</a><br />
          </div>
          <div style={{ marginRight: '10px' }}>
            <a href="#" style={{ fontSize: '12px', color: 'white' }}>Preferencias de cookies</a><br />
          </div>

          <div style={{ position: 'relative', textAlign: 'center' }}> {/* Copyright section with background gradient */}
            <p style={{ fontSize: '10px', marginRight: '10px' }}>&#169; Protoly Lab</p>
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '5px', /* Adjust height for desired line thickness */
              background: 'linear-gradient(to bottom, rgba(41, 41, 41, 0) 0%, rgba(41, 41, 41, 1) 100%)'
            }} />
          </div>
        </div>
      </div>
    </footer>
  );
}

