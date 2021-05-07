import React from 'react';


const LightMode = (props) => {
  const toggleMode = e => {
    e.preventDefault();
    props.setLightMode(!props.lightMode);
  };

  

  return (
      <div>
        <div
          onClick={toggleMode}
          className={props.lightMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
  );
};

export default LightMode;
