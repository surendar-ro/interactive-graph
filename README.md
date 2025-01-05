# **Interactive Cybersecurity Attack Graph Visualization**



## **Overview**

This project implements an interactive attack graph visualization for a cybersecurity application using **Next.js**, **Cytoscape.js**, and **WebSockets** for real-time data updates. The visualization represents the flow and connections in a cybersecurity attack graph, where each entity is shown as a node, and their relationships are depicted as edges. Clicking on nodes and edges displays detailed information about each entity.

## **Technologies Used**

- **Frontend:** Next.js (v13.3.0), Cytoscape.js
- **Backend:** Node.js with WebSocket or REST API
- **Graph Library:** Cytoscape.js (for graph rendering)
- **Real-Time Data:** WebSockets or REST API (for real-time updates)
- **Version Control:** Git, GitHub

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

![image](https://github.com/user-attachments/assets/3a2339f3-3dc5-4ce7-a4dc-b793e251d95e)


  ```bash
  npx create-next-app@13.3.0 attack-graph-visualization
  cd attack-graph-visualization
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
