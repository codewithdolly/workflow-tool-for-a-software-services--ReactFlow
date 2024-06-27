import ReactFlow, { Handle } from 'reactflow';
// import 'reactflow/dist/style.css';

const CustomNode = ({ data }) => {
  return (
    <div style={{ height: 800 }}>
      <Handle type="target" position="top" />
      {data.icon}
      <div>{data.label}</div>
      <Handle type="source" position="bottom" />
    </div>
  );
};


export default CustomNode;
