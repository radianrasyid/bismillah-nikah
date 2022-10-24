import React from 'react'
import { ReactFlow, Controls, Backgronud, Background } from 'reactflow';
import "reactflow/dist/style.css"

export default function EmployeeNode() {

    const edges = [{ id: '1-2', source: '1', target: '2' }];

    const nodes = [
        {
          id: '1',
          position: { x: 10, y: 10 },
          data: { label: 'Hello' },
          type: 'input',
        },
        {
          id: '2',
          position: { x: 100, y: 100 },
          data: { label: 'World' },
        },
      ];

  return (
    <div style={{ height: "50rem", width: "50rem" }}>
        <ReactFlow nodes={nodes} edges={edges}>
            <Background/>
            <Controls/>
        </ReactFlow>
    </div>
  )
}
