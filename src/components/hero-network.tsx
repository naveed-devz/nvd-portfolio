"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";

type StarNode = {
  id: string;
  x: number;
  y: number;
  radius: number;
  depth: number;
  color: string;
};

type StarLink = {
  source: string;
  target: string;
};

type DustParticle = {
  id: string;
  x: number;
  y: number;
  radius: number;
  drift: number;
};

type DropletParticle = {
  id: string;
  x: number;
  y: number;
  radius: number;
  speed: number;
};

const coreNodes: StarNode[] = [
  { id: "n1", x: 96, y: 180, radius: 5.2, depth: 0.55, color: "#5f7f90" },
  { id: "n2", x: 132, y: 102, radius: 6.2, depth: 0.7, color: "#3558b2" },
  { id: "n3", x: 188, y: 144, radius: 7.8, depth: 1, color: "#3558b2" },
  { id: "n4", x: 236, y: 92, radius: 5.6, depth: 0.66, color: "#7aa6b8" },
  { id: "n5", x: 286, y: 154, radius: 6.8, depth: 0.82, color: "#d5aa8d" },
  { id: "n6", x: 324, y: 122, radius: 5, depth: 0.52, color: "#5f7f90" },
  { id: "n7", x: 258, y: 218, radius: 5.8, depth: 0.62, color: "#3558b2" },
  { id: "n8", x: 150, y: 236, radius: 4.8, depth: 0.45, color: "#7aa6b8" },
];

const links: StarLink[] = [
  { source: "n1", target: "n2" },
  { source: "n2", target: "n3" },
  { source: "n3", target: "n4" },
  { source: "n4", target: "n6" },
  { source: "n3", target: "n5" },
  { source: "n5", target: "n6" },
  { source: "n3", target: "n7" },
  { source: "n7", target: "n8" },
  { source: "n8", target: "n1" },
];

const dust: DustParticle[] = d3.range(38).map((index: number) => ({
  id: `dust-${index}`,
  x: 32 + ((index * 41) % 360),
  y: 24 + ((index * 67) % 250),
  radius: 1.2 + (index % 3) * 0.8,
  drift: 0.25 + (index % 7) * 0.08,
}));

const droplets: DropletParticle[] = d3.range(10).map((index: number) => ({
  id: `drop-${index}`,
  x: 52 + ((index * 37) % 310),
  y: -18 - index * 22,
  radius: 2.2 + (index % 3) * 0.85,
  speed: 0.75 + (index % 4) * 0.18,
}));

export function HeroNetwork({ mode = "panel" }: { mode?: "panel" | "ambient" }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) {
      return;
    }

    const width = mode === "ambient" ? 1440 : 420;
    const height = mode === "ambient" ? 980 : 320;
    const pointer = { x: width / 2, y: height / 2 };

    root.innerHTML = "";

    const svg = d3
      .select(root)
      .append("svg")
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("class", "network-svg");

    const defs = svg.append("defs");

    const glow = defs
      .append("filter")
      .attr("id", "portfolioGlow")
      .attr("x", "-50%")
      .attr("y", "-50%")
      .attr("width", "200%")
      .attr("height", "200%");

    glow.append("feGaussianBlur").attr("stdDeviation", 9).attr("result", "blur");
    glow
      .append("feColorMatrix")
      .attr("in", "blur")
      .attr("type", "matrix")
      .attr(
        "values",
        "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 16 -7",
      );

    svg
      .append("circle")
      .attr("cx", width * 0.5)
      .attr("cy", height * 0.38)
      .attr("r", mode === "ambient" ? 250 : 126)
      .attr("fill", "url(#heroHalo)");

    const halo = defs
      .append("radialGradient")
      .attr("id", "heroHalo");

    halo.append("stop").attr("offset", "0%").attr("stop-color", "#A5C8D6").attr("stop-opacity", mode === "ambient" ? 0.14 : 0.24);
    halo.append("stop").attr("offset", "55%").attr("stop-color", "#A5C8D6").attr("stop-opacity", mode === "ambient" ? 0.05 : 0.08);
    halo.append("stop").attr("offset", "100%").attr("stop-color", "#A5C8D6").attr("stop-opacity", 0);

    const dustGroup = svg.append("g");
    const dropletGroup = svg.append("g");
    const linkGroup = svg.append("g");
    const glowGroup = svg.append("g").attr("filter", "url(#portfolioGlow)");
    const nodeGroup = svg.append("g");

    const dustSelection = dustGroup
      .selectAll("circle")
      .data(dust)
      .enter()
      .append("circle")
      .attr("class", "network-dust")
      .attr("fill", mode === "ambient" ? "rgba(91,102,119,0.18)" : "rgba(91,102,119,0.34)")
      .attr("r", (d: DustParticle) => d.radius);

    const dropletSelection = dropletGroup
      .selectAll("circle")
      .data(droplets)
      .enter()
      .append("circle")
      .attr("class", "network-droplet")
      .attr("fill", mode === "ambient" ? "rgba(53, 88, 178, 0.16)" : "rgba(53, 88, 178, 0.34)")
      .attr("r", (d: DropletParticle) => d.radius);

    const linkSelection = linkGroup
      .selectAll("line")
      .data(links)
      .enter()
      .append("line")
      .attr("class", "network-link");

    const glowSelection = glowGroup
      .selectAll("circle")
      .data(coreNodes)
      .enter()
      .append("circle")
      .attr("fill", (d: StarNode) => d.color)
      .attr("opacity", mode === "ambient" ? 0.1 : 0.2);

    const nodeSelection = nodeGroup
      .selectAll("circle")
      .data(coreNodes)
      .enter()
      .append("circle")
      .attr("class", "network-node")
      .attr("fill", (d: StarNode) => d.color);

    const lookup = new Map(coreNodes.map((node) => [node.id, node]));

    const render = (elapsed: number) => {
      const tick = elapsed / 1200;

      const positions = coreNodes.map((node, index: number) => {
        const orbitX = Math.sin(tick + index * 0.72) * 10 * node.depth;
        const orbitY = Math.cos(tick * 0.92 + index * 0.58) * 12 * node.depth;
        const pointerX = (pointer.x - width / 2) * (mode === "ambient" ? 0.007 : 0.014) * node.depth;
        const pointerY = (pointer.y - height / 2) * (mode === "ambient" ? 0.007 : 0.014) * node.depth;

        return {
          ...node,
          px: node.x + orbitX + pointerX,
          py: node.y + orbitY + pointerY,
          pr: node.radius * (0.94 + Math.sin(tick + index) * 0.05),
        };
      });

      const dynamic = new Map(positions.map((node) => [node.id, node]));

      dustSelection
        .attr("cx", (d: DustParticle, i: number) => d.x + Math.sin(tick * d.drift + i) * 6)
        .attr("cy", (d: DustParticle, i: number) => d.y + Math.cos(tick * d.drift + i * 0.3) * 6)
        .attr("opacity", (_d: DustParticle, i: number) => (mode === "ambient" ? 0.08 : 0.18) + (Math.sin(tick + i) + 1) * (mode === "ambient" ? 0.05 : 0.12));

      dropletSelection
        .attr("cx", (d: DropletParticle, i: number) => d.x + Math.sin(tick * 0.9 + i) * 10)
        .attr("cy", (d: DropletParticle, i: number) => ((d.y + elapsed * 0.04 * d.speed + i * 6) % (height + 40)) - 20)
        .attr("opacity", (_d: DropletParticle, i: number) => (mode === "ambient" ? 0.05 : 0.18) + (Math.sin(tick * 1.4 + i) + 1) * (mode === "ambient" ? 0.08 : 0.18));

      linkSelection
        .attr("x1", (d: StarLink) => dynamic.get(d.source)?.px ?? lookup.get(d.source)?.x ?? 0)
        .attr("y1", (d: StarLink) => dynamic.get(d.source)?.py ?? lookup.get(d.source)?.y ?? 0)
        .attr("x2", (d: StarLink) => dynamic.get(d.target)?.px ?? lookup.get(d.target)?.x ?? 0)
        .attr("y2", (d: StarLink) => dynamic.get(d.target)?.py ?? lookup.get(d.target)?.y ?? 0)
        .attr("opacity", (_d: StarLink, i: number) => (mode === "ambient" ? 0.06 : 0.18) + (Math.sin(tick + i * 0.6) + 1) * (mode === "ambient" ? 0.05 : 0.12));

      nodeSelection
        .attr("cx", (d: StarNode) => dynamic.get(d.id)?.px ?? d.x)
        .attr("cy", (d: StarNode) => dynamic.get(d.id)?.py ?? d.y)
        .attr("r", (d: StarNode) => dynamic.get(d.id)?.pr ?? d.radius);

      glowSelection
        .attr("cx", (d: StarNode) => dynamic.get(d.id)?.px ?? d.x)
        .attr("cy", (d: StarNode) => dynamic.get(d.id)?.py ?? d.y)
        .attr("r", (d: StarNode) => (dynamic.get(d.id)?.pr ?? d.radius) * 3.1);
    };

    const timer = d3.timer((elapsed: number) => {
      render(elapsed);
    });

    const onMove = (event: MouseEvent) => {
      const rect = root.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
    };

    const onLeave = () => {
      pointer.x = width / 2;
      pointer.y = height / 2;
    };

    const target: HTMLElement | Window = mode === "ambient" ? window : root;

    target.addEventListener("mousemove", onMove as EventListener);
    target.addEventListener("mouseleave", onLeave as EventListener);

    return () => {
      timer.stop();
      target.removeEventListener("mousemove", onMove as EventListener);
      target.removeEventListener("mouseleave", onLeave as EventListener);
    };
  }, [mode]);

  if (mode === "ambient") {
    return (
      <div className="network-ambient" aria-hidden="true">
        <div className="network-stage network-stage-ambient" ref={ref} />
      </div>
    );
  }

  return (
    <div className="network-shell">
      <div className="network-stage" ref={ref} />
      <div className="network-caption">
        <span>Portfolio</span>
        <span>Engineering</span>
        <span>Motion</span>
        <span>Systems</span>
      </div>
    </div>
  );
}
