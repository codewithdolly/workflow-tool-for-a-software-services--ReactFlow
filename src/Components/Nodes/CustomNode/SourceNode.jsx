import React from 'react';

const SourceNode = ({ data }) => {
  return (
    <div style={{ padding: 10, border: '1px solid #ddd', borderRadius: 5, background: '#fff', display: 'flex', alignItems: 'center' }}>
      {data.icon && <span style={{ marginRight: 5 }}>{data.icon}</span>}
      <span>{data.label}</span>

    </div>
  );
};

export default SourceNode;
