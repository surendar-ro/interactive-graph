import React, { useEffect, useState } from 'react';
import Graph from '../components/Graph';

const Home = () => {
  const [graphData, setGraphData] = useState({ nodes: [], edges: [] });

  useEffect(() => {
    const fetchGraphData = async () => {
      const response = await fetch('/api/graph');
      const data = await response.json();
      setGraphData(data);
    };

    fetchGraphData();
  }, []);

  return (
    <div>
      <h1>Interactive Attack Graph</h1>
      <Graph data={graphData} />
    </div>
  );
};

export default Home;
