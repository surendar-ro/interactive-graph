try {
  const dummyData = {
    nodes: [
      { data: { id: 'a', label: 'Agent A', type: 'agent' } },
      { data: { id: 'b', label: 'Tool B', type: 'tool' } },
      { data: { id: 'c', label: 'Tool C', type: 'tool' } },
      { data: { id: 'd', label: 'Tool D', type: 'tool' } },
    ],
    edges: [
      { data: { source: 'a', target: 'b', label: 'uses', type: 'relationship' } },
      { data: { source: 'c', target: 'd', label: 'uses', type: 'relationship' } },
      { data: { source: 'a', target: 'c', label: 'uses', type: 'relationship' } },
      { data: { source: 'a', target: 'd', label: 'uses', type: 'relationship' } },
    ],
  };
  res.status(200).json(dummyData);
} catch (error) {
  console.error('Error generating graph data:', error);
  res.status(500).json({ error: 'Internal Server Error'});
}











// import React, { useEffect, useRef } from 'react';
// import cytoscape from 'cytoscape';

// const Graph = ({ data }) => {
//   const graphRef = useRef(null);

//   useEffect(() => {
//     if (!graphRef.current) {
//       console.error('Graph container is not available. Ensure the DOM is properly rendered.');
//       return;
//     }

//     const cy = cytoscape({
//       container: graphRef.current, // container to render in
//       elements: data || { 
//       nodes: [
//         { data: { id: 'a', label: 'Tool A', type: 'tool' } },
//         { data: { id: 'b', label: 'Agent B', type: 'agent' } },
//         { data: { id: 'c', label: 'Tool C', type: 'tool' } },
//         { data: { id: 'd', label: 'Agent D', type: 'agent' } },
//         { data: { id: 'e', label: 'Tool E', type: 'tool' } },
//         { data: { id: 'f', label: 'Agent F', type: 'agent' } },
//         { data: { id: 'g', label: 'Bridge G', type: 'bridge' } },
//         { data: { id: 'h', label: 'Bridge H', type: 'bridge' } },
//       ],
//       edges: [
//         { data: { source: 'a', target: 'b', label: 'uses', type: 'relationship' } },
//         { data: { source: 'b', target: 'c', label: 'Operates', type: 'relationship' } },
//         { data: { source: 'c', target: 'd', label: 'Connects to', type: 'relationship' } },
//         { data: { source: 'd', target: 'e', label: 'Utilizes', type: 'relationship' } },
//         { data: { source: 'e', target: 'f', label: 'Interacts with', type: 'relationship' } },
//         { data: { source: 'a', target: 'g', label: 'Connects via', type: 'relationship' } },
//         { data: { source: 'g', target: 'c', label: 'Bridges to', type: 'relationship' } },
//         { data: { source: 'd', target: 'h', label: 'Connects via', type: 'relationship' } },
//         { data: { source: 'h', target: 'f', label: 'Bridges to', type: 'relationship' } },
//         { data: { source: 'b', target: 'e', label: 'Indirectly affects', type: 'relationship' } },
//         { data: { source: 'a', target: 'd', label: 'Communicates with', type: 'relationship' } },
//       ],
//     },
//       style: [
//         {
//           selector: 'node',
//           style: {
//             'background-color': '#0074D9',
//             label: 'data(label)',
//           },
//         },
//         {
//           selector: 'edge',
//           style: {
//             'line-color': '#FF4136',
//             'target-arrow-color': '#FF4136',
//             'target-arrow-shape': 'triangle',
//             'curve-style': 'bezier',
//           },
//         },
//       ],
//       layout: {
//         name: 'grid',
//         rows: 4,
//       },
//     });

//     return () => cy.destroy();
//   }, [data]);

//   return <div ref={graphRef} style={{ width: '80%', height: '600px' }} />;
// };

// export default Graph;