import React from 'react';
import './AsSeenOn.css';
import forbeslogo from '../../assets/forbeslogo.png';
import wsjlogo from '../../assets/wsjlogo.jpeg';
import bloomberglogo from '../../assets/bloomberglogo.png';
import cnnlogo from '../../assets/cnnlogo.jpeg';
import ftlogo from '../../assets/ftlogo.png';

const outlets = [
  { name: "Forbes", logo: forbeslogo, },
  { name: "The Wall Street Journal", logo: wsjlogo, },
  { name: "Bloomberg", logo: bloomberglogo, },
  { name: "CNN Business", logo: cnnlogo,  },
  { name: "Financial Times", logo: ftlogo, },
];

const AsSeenOn = () => {
  return (
    <section className="as-seen-on">
      <h2>As Seen On</h2>
      <div className="outlets-slider">
        <div className="outlets-container">
          {/* First instance of logos */}
          {outlets.map((outlet, index) => (
            <a
              href={outlet.url}
              key={index}
              className="outlet"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={outlet.logo} alt={outlet.name} className="outlet-logo" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AsSeenOn;
