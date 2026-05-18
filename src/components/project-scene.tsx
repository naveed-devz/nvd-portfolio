"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";

export type SceneVariant = "routeeye" | "kalrav" | "ecai";

type RouteNode = {
  x: number;
  y: number;
  color: string;
};

type ConsumerUser = {
  x: number;
  y: number;
  color: string;
};

type DocNode = {
  x: number;
  y: number;
};

export function ProjectScene({ variant }: { variant: SceneVariant }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) {
      return;
    }

    root.innerHTML = "";

    const width = 360;
    const height = 180;

    const svg = d3
      .select(root)
      .append("svg")
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("class", "project-scene-svg");

    if (variant === "routeeye") {
      renderRouteEye(svg, width, height);
    }

    if (variant === "kalrav") {
      renderKalrav(svg, width, height);
    }

    if (variant === "ecai") {
      renderEcai(svg, width, height);
    }
  }, [variant]);

  return <div className={`project-scene project-scene-${variant}`} ref={ref} />;
}

function renderRouteEye(
  svg: d3.Selection<SVGSVGElement, unknown, null, undefined>,
  width: number,
  height: number,
) {
  const pathData =
    "M136,138 C176,116 214,110 246,90 C276,72 304,54 330,40";

  svg
    .append("rect")
    .attr("x", 18)
    .attr("y", 24)
    .attr("width", width - 36)
    .attr("height", height - 48)
    .attr("rx", 22)
    .attr("fill", "rgba(255,255,255,0.5)");

  const user = svg.append("g").attr("transform", "translate(74,122)");
  user.append("circle").attr("r", 15).attr("cy", -26).attr("fill", "#d56d44");
  user
    .append("path")
    .attr("d", "M-12 12 C-8 -12 8 -12 12 12 L9 34 L-9 34 Z")
    .attr("fill", "#1b2631");

  user
    .append("rect")
    .attr("x", 18)
    .attr("y", -6)
    .attr("width", 22)
    .attr("height", 34)
    .attr("rx", 6)
    .attr("fill", "#3558b2")
    .attr("transform", "rotate(-12 29 11)");

  user
    .append("circle")
    .attr("cx", 29)
    .attr("cy", 2)
    .attr("r", 2.5)
    .attr("fill", "#f0f4f8")
    .attr("opacity", 0.9);

  svg
    .append("path")
    .attr("d", pathData)
    .attr("fill", "none")
    .attr("stroke", "rgba(42, 118, 215, 0.12)")
    .attr("stroke-width", 18)
    .attr("stroke-linecap", "round");

  const route = svg
    .append("path")
    .attr("d", pathData)
    .attr("fill", "none")
    .attr("stroke", "#3568d4")
    .attr("stroke-width", 4)
    .attr("stroke-linecap", "round")
    .attr("stroke-dasharray", "0 14");

  svg
    .selectAll(".route-node")
    .data<RouteNode>([
      { x: 136, y: 138, color: "#3558b2" },
      { x: 246, y: 90, color: "#3558b2" },
      { x: 330, y: 40, color: "#5f9f5b" },
    ])
    .enter()
    .append("circle")
    .attr("cx", (d: RouteNode) => d.x)
    .attr("cy", (d: RouteNode) => d.y)
    .attr("r", 5.5)
    .attr("fill", (d: RouteNode) => d.color)
    .attr("stroke", "#ffffff")
    .attr("stroke-width", 2);

  const vehicle = svg
    .append("g")
    .attr("class", "scene-vehicle")
    .attr("transform", "translate(136,138)");

  vehicle
    .append("rect")
    .attr("x", -11)
    .attr("y", -7)
    .attr("width", 22)
    .attr("height", 14)
    .attr("rx", 5)
    .attr("fill", "#18202d");

  vehicle
    .append("rect")
    .attr("x", -5)
    .attr("y", -10)
    .attr("width", 10)
    .attr("height", 6)
    .attr("rx", 2)
    .attr("fill", "#3558b2");

  vehicle
    .selectAll("circle")
    .data([-7, 7])
    .enter()
    .append("circle")
    .attr("cx", (d: number) => d)
    .attr("cy", 8)
    .attr("r", 2.6)
    .attr("fill", "#d56d44");

  const totalLength = (route.node() as SVGPathElement).getTotalLength();

  function animate() {
    vehicle
      .transition()
      .duration(5200)
        .ease(d3.easeLinear)
        .attrTween("transform", () => {
        return (t: number) => {
          const point = (route.node() as SVGPathElement).getPointAtLength(t * totalLength);
          return `translate(${point.x},${point.y})`;
        };
      })
      .on("end", animate);

    route
      .transition()
      .duration(5200)
      .ease(d3.easeLinear)
      .attrTween("stroke-dasharray", () => {
        return (t: number) => `${Math.max(12, t * totalLength * 0.34)} 14`;
      });
  }

  animate();

  svg
    .append("text")
    .attr("x", width - 18)
    .attr("y", height - 16)
    .attr("text-anchor", "end")
    .attr("class", "scene-label")
    .text("Driver checks route in real time");
}

function renderKalrav(
  svg: d3.Selection<SVGSVGElement, unknown, null, undefined>,
  width: number,
  height: number,
) {
  const uploader = svg.append("g").attr("transform", "translate(54,92)");
  uploader.append("circle").attr("r", 16).attr("cy", -22).attr("fill", "#d56d44");
  uploader
    .append("path")
    .attr("d", "M-12 10 C-8 -10 8 -10 12 10 L10 32 L-10 32 Z")
    .attr("fill", "#3558b2");

  const uploadBox = svg.append("g").attr("transform", "translate(144,38)");
  uploadBox
    .append("rect")
    .attr("width", 86)
    .attr("height", 92)
    .attr("rx", 16)
    .attr("fill", "#ffffff")
    .attr("stroke", "rgba(53, 88, 178, 0.14)");
  uploadBox
    .append("path")
    .attr("d", "M43 66 V28 M43 28 L30 42 M43 28 L56 42")
    .attr("fill", "none")
    .attr("stroke", "#3558b2")
    .attr("stroke-width", 4)
    .attr("stroke-linecap", "round")
    .attr("stroke-linejoin", "round");
  uploadBox
    .append("rect")
    .attr("x", 24)
    .attr("y", 70)
    .attr("width", 38)
    .attr("height", 6)
    .attr("rx", 3)
    .attr("fill", "rgba(53, 88, 178, 0.12)");

  const users: ConsumerUser[] = [
    { x: 282, y: 54, color: "#3558b2" },
    { x: 314, y: 92, color: "#5f9f5b" },
    { x: 280, y: 126, color: "#d56d44" },
  ];

  const consumers = svg.append("g");
  users.forEach((user) => {
    const g = consumers.append("g").attr("transform", `translate(${user.x},${user.y})`);
    g.append("circle").attr("r", 10).attr("cy", -12).attr("fill", user.color);
    g.append("rect").attr("x", -9).attr("y", 0).attr("width", 18).attr("height", 20).attr("rx", 7).attr("fill", user.color);
  });

  const pulseGroup = svg.append("g");

  const forwardDots = pulseGroup
    .selectAll(".forward")
    .data(d3.range(4))
    .enter()
    .append("circle")
    .attr("r", 4.2)
    .attr("fill", "#3558b2");

  const responseDots = pulseGroup
    .selectAll(".response")
    .data(d3.range(6))
    .enter()
    .append("circle")
    .attr("r", 3.8)
    .attr("fill", "#5f9f5b");

  const uploadFlow = d3.path();
  uploadFlow.moveTo(70, 96);
  uploadFlow.bezierCurveTo(96, 96, 118, 88, 144, 84);

  const toUserA = d3.path();
  toUserA.moveTo(230, 84);
  toUserA.bezierCurveTo(250, 70, 260, 60, 272, 54);

  const toUserB = d3.path();
  toUserB.moveTo(230, 86);
  toUserB.bezierCurveTo(252, 92, 276, 94, 304, 92);

  const toUserC = d3.path();
  toUserC.moveTo(230, 88);
  toUserC.bezierCurveTo(250, 106, 258, 118, 270, 124);

  svg
    .append("path")
    .attr("d", uploadFlow.toString())
    .attr("class", "scene-dashed-path");

  [toUserA, toUserB, toUserC].forEach((path) => {
    svg.append("path").attr("d", path.toString()).attr("class", "scene-dashed-path");
  });

  const uploadPath = svg.append("path").attr("d", uploadFlow.toString()).attr("fill", "none").attr("stroke", "transparent");
  const fanOutA = svg.append("path").attr("d", toUserA.toString()).attr("fill", "none").attr("stroke", "transparent");
  const fanOutB = svg.append("path").attr("d", toUserB.toString()).attr("fill", "none").attr("stroke", "transparent");
  const fanOutC = svg.append("path").attr("d", toUserC.toString()).attr("fill", "none").attr("stroke", "transparent");

  const uploadLength = (uploadPath.node() as SVGPathElement).getTotalLength();
  const aLen = (fanOutA.node() as SVGPathElement).getTotalLength();
  const bLen = (fanOutB.node() as SVGPathElement).getTotalLength();
  const cLen = (fanOutC.node() as SVGPathElement).getTotalLength();

  d3.timer((elapsed: number) => {
    forwardDots.attr("opacity", (_d: number, i: number) => ((elapsed / 500 + i) % 4) / 4 + 0.25);
    responseDots.attr("opacity", (_d: number, i: number) => ((elapsed / 620 + i) % 6) / 6 + 0.25);

    forwardDots.attr("cx", (_d: number, i: number) => {
      const point = (uploadPath.node() as SVGPathElement).getPointAtLength((elapsed / 10 + i * 20) % uploadLength);
      return point.x;
    });
    forwardDots.attr("cy", (_d: number, i: number) => {
      const point = (uploadPath.node() as SVGPathElement).getPointAtLength((elapsed / 10 + i * 20) % uploadLength);
      return point.y;
    });

    responseDots.attr("cx", (_d: number, i: number) => {
      const targets = [
        [fanOutA.node() as SVGPathElement, aLen],
        [fanOutB.node() as SVGPathElement, bLen],
        [fanOutC.node() as SVGPathElement, cLen],
      ] as const;
      const [path, len] = targets[i % 3];
      const point = path.getPointAtLength((elapsed / 8 + i * 18) % len);
      return point.x;
    });
    responseDots.attr("cy", (_d: number, i: number) => {
      const targets = [
        [fanOutA.node() as SVGPathElement, aLen],
        [fanOutB.node() as SVGPathElement, bLen],
        [fanOutC.node() as SVGPathElement, cLen],
      ] as const;
      const [path, len] = targets[i % 3];
      const point = path.getPointAtLength((elapsed / 8 + i * 18) % len);
      return point.y;
    });
  });

  svg
    .append("text")
    .attr("x", width - 18)
    .attr("y", height - 16)
    .attr("text-anchor", "end")
    .attr("class", "scene-label")
    .text("Upload once, shared everywhere");
}

function renderEcai(
  svg: d3.Selection<SVGSVGElement, unknown, null, undefined>,
  width: number,
  height: number,
) {
  const frame = svg.append("g").attr("transform", "translate(32,22)");

  frame
    .append("rect")
    .attr("width", 296)
    .attr("height", 132)
    .attr("rx", 18)
    .attr("fill", "#ffffff")
    .attr("stroke", "rgba(53, 88, 178, 0.12)");

  frame
    .append("rect")
    .attr("x", 16)
    .attr("y", 18)
    .attr("width", 88)
    .attr("height", 96)
    .attr("rx", 16)
    .attr("fill", "rgba(53, 88, 178, 0.08)");

  const lock = frame.append("g").attr("transform", "translate(60,67)");
  lock.append("rect").attr("x", -18).attr("y", -2).attr("width", 36).attr("height", 28).attr("rx", 8).attr("fill", "#3558b2");
  lock.append("path").attr("d", "M-10 -2 V-14 C-10 -25 10 -25 10 -14 V-2").attr("fill", "none").attr("stroke", "#3558b2").attr("stroke-width", 7).attr("stroke-linecap", "round");

  frame
    .append("text")
    .attr("x", 126)
    .attr("y", 36)
    .attr("class", "scene-panel-title")
    .text("Internal RAG workspace");

  const docs: DocNode[] = [
    { x: 148, y: 78 },
    { x: 190, y: 60 },
    { x: 234, y: 86 },
    { x: 274, y: 68 },
  ];

  frame
    .selectAll(".secure-link")
    .data<number[]>([
      [148, 78, 190, 60],
      [190, 60, 234, 86],
      [234, 86, 274, 68],
    ])
    .enter()
    .append("line")
    .attr("x1", (d: number[]) => d[0])
    .attr("y1", (d: number[]) => d[1])
    .attr("x2", (d: number[]) => d[2])
    .attr("y2", (d: number[]) => d[3])
    .attr("stroke", "rgba(53, 88, 178, 0.22)")
    .attr("stroke-width", 2);

  const secureNodes = frame
    .selectAll(".secure-node")
    .data(docs)
    .enter()
    .append("rect")
    .attr("cx", (d: DocNode) => d.x)
    .attr("cy", (d: DocNode) => d.y)
    .attr("x", (d: DocNode) => d.x - 10)
    .attr("y", (d: DocNode) => d.y - 12)
    .attr("width", 20)
    .attr("height", 24)
    .attr("rx", 5)
    .attr("fill", "#3558b2");

  const token = frame
    .append("circle")
    .attr("r", 5.5)
    .attr("fill", "#d56d44")
    .attr("cx", 148)
    .attr("cy", 78);

  frame
    .append("rect")
    .attr("x", 122)
    .attr("y", 96)
    .attr("width", 152)
    .attr("height", 18)
    .attr("rx", 8)
    .attr("fill", "rgba(53, 88, 178, 0.08)");

  function moveToken() {
    token
      .transition()
      .duration(650)
      .attr("cx", 188)
      .attr("cy", 60)
      .transition()
      .duration(650)
      .attr("cx", 234)
      .attr("cy", 86)
      .transition()
      .duration(650)
      .attr("cx", 274)
      .attr("cy", 68)
      .transition()
      .duration(650)
      .attr("cx", 148)
      .attr("cy", 78)
      .on("end", moveToken);
  }

  moveToken();

  d3.timer((elapsed: number) => {
    secureNodes.attr("opacity", (_d: DocNode, i: number) => 0.6 + 0.35 * Math.sin(elapsed / 420 + i));
    lock.attr("transform", `translate(60,67) scale(${1 + Math.sin(elapsed / 600) * 0.035})`);
  });

  svg
    .append("text")
    .attr("x", width - 18)
    .attr("y", height - 16)
    .attr("text-anchor", "end")
    .attr("class", "scene-label")
    .text("Private docs, internal answers");
}
