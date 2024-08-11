import { ResponsiveCirclePacking } from "@nivo/circle-packing";
import { useState } from "react";
import type { ComicsChartProps } from "./comics-chart.types";

export const ComicsChart = ({ data }: ComicsChartProps) => {
  const [zoomedId, setZoomedId] = useState<string | null>(null);
  return (
    <ResponsiveCirclePacking
      data={data}
      colors={{ scheme: "dark2" }}
      padding={4}
      enableLabels
      labelsFilter={(n) => 1 === n.node.depth}
      labelsSkipRadius={10}
      labelTextColor={{
        from: "color",
        modifiers: [["brighter", 10]],
      }}
      valueFormat={(value) => `${value}`}
      onClick={(node) => {
        setZoomedId(node.id);
      }}
      isInteractive
      zoomedId={zoomedId}
    />
  );
};
