import React from 'react';

const SourceNode = ({ data }) => {
  return (
    <div className='border rounded p-2 px-3 bg-white d-flex'>
      {data.icon && <div className='pr-2'>{data.icon}</div>}
      <div>{data.label}</div>

    </div>
  );
};

export default SourceNode;
