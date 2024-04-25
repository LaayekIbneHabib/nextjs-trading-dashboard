// internal
import theme from "../../../../theme/theme";
// external
import { useColorMode } from "@chakra-ui/react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const revenueData = [
  {
    label: "Sun",
    net: -83809,
  },
  {
    label: "Mon",
    net: 64854,
  },
  {
    label: "Tue",
    net: -42393,
  },
  {
    label: "Wed",
    net: 117238,
  },
  {
    label: "Thu",
    net: 82830,
  },
  {
    label: "Fri",
    net: -41893,
  },
  {
    label: "Sat",
    net: 103609,
  },
];

defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.color = theme.colors.brand.primary;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.color = "#000000";

const VerticalBar = () => {
  const { colorMode } = useColorMode();
  defaults.plugins.title.color = colorMode === "light" ? "#000000" : "#ffffff";

  return (
    <Bar
      style={{
        backgroundColor:
          colorMode === "light" ? "#ffffff" : "rgba(255, 255, 255, 0.1)",
        width: "100%",
        height: "100%",
        padding: "1rem",
      }}
      data={{
        labels: revenueData.map((data) => data.label),
        datasets: [
          {
            label: "net",
            data: revenueData.map((data) => data.net),
            backgroundColor: revenueData.map((data) =>
              data.net > 1 ? "#064FF0" : "#FF3030"
            ),
            borderColor: revenueData.map((data) =>
              data.net > 1 ? "#064FF0" : "#FF3030"
            ),
          },
        ],
      }}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        elements: {
          line: {
            tension: 0.1,
          },
        },
        scales: {
          y: {
            display: false,
          },
        },
        plugins: {
          title: {
            font: {
              size: 15,
            },
            text: "Last 7 days",
          },
        },
      }}
    />
  );
};

export default VerticalBar;
