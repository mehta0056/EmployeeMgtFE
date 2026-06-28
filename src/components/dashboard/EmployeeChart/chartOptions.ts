import { months, employeeGrowth } from "./chartData";

export const employeeChartOption = {
  tooltip: {
    trigger: "axis",
  },

  grid: {
    left: 40,
    right: 20,
    bottom: 30,
    top: 30,
  },

  xAxis: {
    type: "category",
    data: months,
    boundaryGap: false,
    axisLine: {
      lineStyle: {
        color: "#D1D5DB",
      },
    },
    axisTick: {
      show: false,
    },
  },

  yAxis: {
    type: "value",
    splitLine: {
      lineStyle: {
        color: "#F3F4F6",
      },
    },
  },

  series: [
    {
      name: "Employees",
      type: "line",

      data: employeeGrowth,

      smooth: true,

      symbol: "circle",

      symbolSize: 8,

      lineStyle: {
        width: 4,
        color: "#F97316",
      },

      itemStyle: {
        color: "#F97316",
      },

      areaStyle: {
        color: "rgba(249,115,22,.15)",
      },
    },
  ],
};
import { departmentData } from "./chartData";

export const departmentChartOption = {
  tooltip: {
    trigger: "item",
  },

  legend: {
    bottom: 10,
    left: "center",
  },

  series: [
    {
      name: "Departments",
      type: "pie",
      radius: ["45%", "70%"],

      avoidLabelOverlap: false,

      itemStyle: {
        borderRadius: 8,
        borderColor: "#fff",
        borderWidth: 2,
      },

      label: {
        show: false,
      },

      emphasis: {
        label: {
          show: true,
          fontSize: 16,
          fontWeight: "bold",
        },
      },

      data: departmentData,

      color: ["#F97316", "#3B82F6", "#22C55E", "#8B5CF6", "#EF4444"],
    },
  ],
};
