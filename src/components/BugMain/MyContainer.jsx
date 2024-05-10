import React from 'react';
import '../../styles/BugMain/bugmain.scss';

function MyContainer(props) {
  return (
    <div className="my-container">
      {props.data.map((item) => (
        <div className="api-container" key={item.id}>
          <div className="api-item">{item.id}</div>
          <div className="api-item">{item.crop}</div>
          <div className="api-item">{item.name}</div>
          <div className="api-item">{item.english_name}</div>
          <div className="api-item">
            <img src={item.image_url} alt={item.name} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyContainer;
