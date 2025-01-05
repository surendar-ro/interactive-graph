export default function handler(req, res) {
  try {
    const dummyData = {
      nodes: [
        { data: { id: 'a', label: 'Agent A', type: 'agent' } },
        { data: { id: 'b', label: 'Tool B', type: 'tool' } },
        { data: { id: 'c', label: 'Tool c', type: 'tool' } },
        { data: { id: 'd', label: 'Tool D', type: 'tool' } },
      ],
      edges: [
        { data: { source: 'a', target: 'b', label: 'uses', type: 'relationship' } },
      ],
    };

    // Additional metadata for nodes/edges can be added here

    res.status(200).json(dummyData);
  } catch (error) {
    console.error('Error generating graph data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
