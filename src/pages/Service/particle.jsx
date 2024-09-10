import React, { useEffect } from 'react';
import Stats from 'stats.js'; // Eğer stats.js kullanıyorsanız bunu npm ile kurmanız gerekebilir
import "particles.js";


const ParticleComponent = () => {
  useEffect(() => {
    // particles.js konfigürasyonu
    window.particlesJS('particles-js', {
      particles: {
        number: {
          value: 380,
          density: {
            enable: true,
            value_area: 1500,
          },
        },
        color: {
          value: '#ffffff',
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000',
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            src: 'img/github.svg',
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 100,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#ffffff',
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 6,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'grab',
          },
          onclick: {
            enable: true,
            mode: 'push',
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    });

    // stats.js konfigürasyonu
    const stats = new Stats();
    stats.setMode(0); // 0: fps, 1: ms
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);

    const countParticles = document.querySelector('.js-count-particles');
    const update = () => {
      stats.begin();
      stats.end();
      if (
        window.pJSDom[0].pJS.particles &&
        window.pJSDom[0].pJS.particles.array
      ) {
        countParticles.innerText = window.pJSDom[0].pJS.particles.array.length;
      }
      requestAnimationFrame(update);
    };
    requestAnimationFrame(update);

    return () => {
      // Cleanup için gerekli olabilir
      stats.domElement.remove();
    };
  }, []);

  return (
    <div>
      <div id="particles-js" style={particlesStyle}></div>
      <div className="count-particles">
        <span className="js-count-particles"></span> Particles
      </div>
    </div>
  );
};

const particlesStyle = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  backgroundColor: 'black',
  backgroundImage: 'url("")',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: '50% 50%',
};

export default ParticleComponent;
