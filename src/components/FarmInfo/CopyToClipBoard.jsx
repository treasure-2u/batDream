import React from 'react';

const CopyToClipboard = ({ text, children }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    alert('복사되었습니다!');
  };

  return (
    <p className="copy" onClick={handleCopy}>
      {children}
    </p>
  );
};

export default CopyToClipboard;
