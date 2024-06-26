import { useEffect, useState } from 'react';

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const circles = document.querySelectorAll('.circle');
    const getRandomNumber = () => Math.floor(Math.random() * 10000);
    const image1 = new Image();
    const imgUrl1 = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/409269/valley.jpg?${getRandomNumber()}`;

    const loaderOut = () => {
      setLoading(false); // Hide the loader after the image is loaded
    };

    image1.onload = loaderOut;
    image1.src = imgUrl1;

    const tweenMaxSet = (elements, properties) => {
      elements.forEach(element => {
        Object.assign(element.style, properties);
      });
    };

    tweenMaxSet(circles, { transform: 'scale(0)' });

    const staggerTo = (elements, duration, properties, stagger, delay = 0) => {
      elements.forEach((element, index) => {
        setTimeout(() => {
          Object.assign(element.style, properties);
        }, index * stagger * 1000 + delay * 1000);
      });
    };

    staggerTo(circles, 1, { opacity: 1, transform: 'scale(1)' }, 0.2);

    staggerTo(
      circles,
      0.5,
      {
        transform: 'scale(1.2)',
        boxShadow: '0 25px 25px rgba(0, 0, 0, 0.4)',
        animation: 'pulse 1s infinite ease-in-out',
      },
      0.2,
      -0.4
    );
  }, []);

  return (
    <>
      {loading && (
        <div className="preloader">
          <div className="circle circle1"></div>
          <div className="circle circle2"></div>
          <div className="circle circle3"></div>
        </div>
      )}

      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: scale(1.2);
          }
          50% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.2);
          }
        }
        body {
          padding: 0;
          margin: 0;
          position: fixed; 
          z-index: 9999;
          background-color: #3e3c41;
          font-family: 'Montserrat', sans-serif;
        }
        body,
        html {
          width: 100%;
          height: 100%;
        }
        }
        .preloader {
          width: 100%;
          height: 100%;
          position: fixed; 
          background-color: #d8e3e7;
          z-index: 100;
          position: absolute;
        }
        .circle {
          border-radius: 190px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
          position: absolute;
          top: 50%;
          left: 50%;
          opacity: 0;
        }
        .circle1 {
          background-color: #7752d5;
          width: 240px;
          height: 240px;
          margin-top: -120px;
          margin-left: -120px;
        }
        .circle2 {
          background-color: #8362d9;
          width: 170px;
          height: 170px;
          margin-top: -85px;
          margin-left: -85px;
        }
        .circle3 {
          background-color: #9f88d6;
          width: 100px;
          height: 100px;
          margin-top: -50px;
          margin-left: -50px;
        }
      `}</style>
    </>
  );
};

export default Loader;
