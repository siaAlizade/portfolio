import * as React from "react";
import { FaGithub } from "react-icons/fa";

import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";

const data = [
  { value: 70, Icon: FaGithub, label: "Java Script", color: "#F7DF1E" },
  { value: 15, label: "Type Script", color: "#3178C6" },
  { value: 50, label: "React", color: "#61DAFB" },
  { value: 20, label: "Nextjs", color: "#000000" },
];

const size = {
  width: 200,
  height: 200,
};

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 20,
  fontFamily: '"Poppins", sans-serif',
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

export default function PieChartWithCenterLabel() {
  return (
    <PieChart
      series={[
        {
          data,
          innerRadius: 80,
        },
      ]}
      {...size}
    >
      <PieCenterLabel>My Skills 🙌</PieCenterLabel>
    </PieChart>
  );
}
