import React, { useEffect, useState } from "react";
import axios from "axios";
import CytoscapeComponent from "react-cytoscapejs";

const Graph = () => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    axios.get("/api/graph").then((response) => {
      const data = response.data;

      const nodes = [];
      const edges = [];

      data.forEach((entry) => {
        entry.agents.forEach((agent) => {
          nodes.push({ data: { id: agent.idx, label: agent.name } });

          agent.tools.forEach((tool) => {
            nodes.push({ data: { id: tool.idx, label: tool.name } });
            edges.push({
              data: { source: agent.idx, target: tool.idx, label: "uses" },
            });
          });
        });
      });

      setElements([...nodes, ...edges]);
    });
  }, []);

  return (
    <CytoscapeComponent
      elements={elements}
      style={{ width: "100%", height: "600px" }}
      layout={{ name: "cose" }}
      stylesheet={[
        { selector: "node", style: { label: "data(label)" } },
        { selector: "edge", style: { label: "data(label)" } },
      ]}
    />
  );
};

export default Graph;
