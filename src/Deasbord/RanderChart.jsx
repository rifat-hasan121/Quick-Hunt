import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const data = {
  labels: ["Thing 1", "Thing 2", "Thing 3", "Thing 4", "Thing 5", "Thing 6"],
  datasets: [
    {
      label: "My First Dataset",
      data: [2, 9, 3, 5, 2, 3],
      backgroundColor: "#dab5ff",
      borderColor: "#9227fb",
      borderWidth: 1,
    },
  ],
};

export function RanderChart() {
  return <Radar data={data} />;
}
