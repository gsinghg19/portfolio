import Particles from "react-tsparticles";

const ParticleBackground = () => {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        
          "background": {
            "color": {
              "value": "#ffffff"
            },
            "position": "50% 50%",
            "repeat": "no-repeat",
            "size": "cover"
          },
          "backgroundMask": {
            "cover": {
              "color": {
                "value": "#146ef5c7"
              }
            },
            "enable": true
          },
          "fullScreen": {
            "zIndex": 1
          },
          "detectRetina": false,
          "interactivity": {
            "events": {
              "onClick": {
                "mode": "push"
              },
              "onDiv": {
                "selectors": "#repulse-div",
                "mode": "repulse"
              },
              "onHover": {
                "enable": true,
                "mode": "bubble"
              }
            },
            "modes": {
              "bubble": {
                "distance": 40,
                "duration": 2,
                "opacity": 8,
                "size": 6
              },
              "grab": {
                "distance": 400
              },
              "slow": {
                "factor": 1,
                "radius": 0
              }
            }
          },
          "particles": {
            "color": {
              "value": "#ffffff"
            },
            "links": {
              "color": {
                "value": "#ffffff"
              },
              "distance": 30,
              "enable": true,
              "opacity": 0.4
            },
            "move": {
              "attract": {
                "rotate": {
                  "x": 600,
                  "y": 1200
                }
              },
              "enable": true,
              "path": {},
              "outModes": {
                "default": "bounce",
                "bottom": "bounce",
                "left": "bounce",
                "right": "bounce",
                "top": "bounce"
              },
              "speed": 1,
              "spin": {}
            },
            "number": {
              "density": {
                "area": 2000
              },
              "value": 200
            },
            "opacity": {
              "value": {
                "min": 0.05,
                "max": 0.4
              },
              "animation": {
                "enable": true,
                "minimumValue": 0.05
              }
            },
            "size": {
              "random": {
                "enable": true
              },
              "value": 1,
              "animation": {
                "speed": 40,
                "minimumValue": 0.1
              }
            }
          },
          "polygon": {
            "draw": {
              "enable": true,
              "stroke": {
                "color": {
                  "value": "rgba(255,255,255,0.2)"
                },
                "width": 0.5,
                "opacity": 0.2
              }
            },
            "enable": true,
            "inline": {
              "arrangement": "equidistant"
            },
            "move": {
              "radius": 20,
              "type": "path"
            },
            "scale": 0.5,
            "type": "inline",
            "url": "https://particles.js.org/images/smalldeer.svg"
          }
        
        }}/>
  );
};

export default ParticleBackground;

