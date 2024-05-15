import React from 'react';

const Copy = ({ text, children }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    alert('복사되었습니다!');
  };

  return (
    <div className="copy" onClick={handleCopy}>
      {children}
    </div>
  );
};

export default Copy;
