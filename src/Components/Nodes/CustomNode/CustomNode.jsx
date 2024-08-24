import React from 'react';
// import { Handle, Position } from '@xyflow/react';
import { Handle } from 'reactflow';

const CustomNode = ({ data }) => {
  return (
    <div className='border rounded p-2 px-3 bg-white d-flex'>
   
   {data.icon && <div className='pr-2'>{data.icon}</div>}
    <div>{data.label}</div>
 
 
 
 

      {/* <Handle type="target" position="top" style={{ borderRadius: 0 }} />
      <Handle type="source" position="bottom" style={{ borderRadius: 0 }} />
      <Handle type="source" position="right" id="right" style={{ borderRadius: 0 }} />
      <Handle type="target" position="left" id="left" style={{ borderRadius: 0 }} /> */}
    </div>
  );
};

export default CustomNode;
