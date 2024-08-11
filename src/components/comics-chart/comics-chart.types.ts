export type ChartData = {
  id: string | number;
  value?: number;
  children?: Array<ChartData>;
};

export type ComicsChartProps = {
  data: ChartData;
};
