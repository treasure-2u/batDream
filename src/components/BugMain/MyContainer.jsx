import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/BugMain/bugmain.scss';

function MyContainer(props) {
  return (
    <div className="my-container">
      {props.data.map((item) => (
        <Link
          to={`/BugInfo/${item.id}`}
          key={item.id}
          className="api-container"
        >
          <div className="api-item">{item.id}</div>
          <div className="api-item">{item.crop}</div>
          <div className="api-item">{item.name}</div>
          <div className="api-item">{item.english_name}</div>
          <div className="api-item">
            <img src={item.image_url} alt={item.name} />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default MyContainer;
