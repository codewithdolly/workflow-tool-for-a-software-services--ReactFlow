import React from 'react';
// import { Handle } from 'react-flow-renderer';
const CustomNode = ({ data }) => {
  return (
    <div style={{ padding: 10, border: '1px solid #ddd', borderRadius: 5, background: '#fff', display: 'flex', alignItems: 'center' }}>
      {data.icon && <span style={{ marginRight: 5 }}>{data.icon}</span>}
      <span>{data.label}</span>
      {/* <Handle type="target" position="top" style={{ borderRadius: 0 }} />
      <Handle type="source" position="bottom" style={{ borderRadius: 0 }} />
      <Handle type="source" position="right" id="right" style={{ borderRadius: 0 }} />
      <Handle type="target" position="left" id="left" style={{ borderRadius: 0 }} /> */}
    </div>
  );
};

export default CustomNode;
