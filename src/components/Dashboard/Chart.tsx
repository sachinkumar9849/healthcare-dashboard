import React, { useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Patient } from "@/types/patient";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface ChartProps {
  patient: Patient | null;
}

const Chart: React.FC<ChartProps> = ({ patient }) => {
  if (
    !patient ||
    !patient.diagnosis_history ||
    patient.diagnosis_history.length === 0
  ) {
    return (
      <div className="rounded-[12px] bg-white">
        <h3 className="mb-4 text-lg font-bold text-[#072635]">
          Blood Pressure Chart
        </h3>
        <div className="py-10 text-center text-gray-500">
          Select a patient to view diagnosis history
        </div>
      </div>
    );
  }

  // Sort diagnosis history by date (oldest to newest)
  const sortedHistory = [...patient.diagnosis_history].sort((a, b) => {
    const dateA = new Date(a.year, getMonthNumber(a.month));
    const dateB = new Date(b.year, getMonthNumber(b.month));
    return dateA.getTime() - dateB.getTime();
  });

  // Prepare data for the chart
  const labels = sortedHistory.map(
    (item) => `${item.month.substring(0, 3)}, ${item.year}`
  );
  const systolicData = sortedHistory.map(
    (item) => item.blood_pressure.systolic.value
  );
  const diastolicData = sortedHistory.map(
    (item) => item.blood_pressure.diastolic.value
  );

  const data = {
    labels,
    datasets: [
      {
        label: "Systolic",
        data: systolicData,
        borderColor: "#C26EB4",
        backgroundColor: "#C26EB4",
        tension: 0.4,
        pointRadius: 6,
        pointHoverRadius: 8,
        pointBackgroundColor: "#C26EB4",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
      },
      {
        label: "Diastolic",
        data: diastolicData,
        borderColor: "#7E6CAB",
        backgroundColor: "#7E6CAB",
        tension: 0.4,
        pointRadius: 6,
        pointHoverRadius: 8,
        pointBackgroundColor: "#7E6CAB",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#072635",
        padding: 12,
        titleColor: "#fff",
        bodyColor: "#fff",
        borderColor: "#E0E0E0",
        borderWidth: 1,
        displayColors: true,
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.parsed.y} mmHg`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#072635",
          font: {
            size: 12,
          },
        },
      },
      y: {
        beginAtZero: false,
        min: 60,
        max: 180,
        ticks: {
          stepSize: 20,
          color: "#072635",
          font: {
            size: 12,
          },
        },
        grid: {
          color: "#E0E0E0",
        },
      },
    },
  };

  return (
    <div className="rounded-[12px] bg-white">
      <div className="grid grid-cols-12 gap-6 rounded-[12px] bg-[#F4F0FE] p-5">
        <div className="col-span-8">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-lg font-bold text-[#072635]">Blood Pressure</h3>
          </div>
          <div className="h-[300px]">
            <Line data={data} options={options} />
          </div>
        </div>
        <div className="col-span-4">
          <div className="pt-4">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-[#C26EB4]"></div>
                  <span className="text-sm font-semibold text-[#072635]">
                    Systolic
                  </span>
                </div>
                <p className="text-2xl font-bold text-[#072635]">
                  {patient.diagnosis_history[0].blood_pressure.systolic.value}
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  {patient.diagnosis_history[0].blood_pressure.systolic.levels}
                </p>
              </div>
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-[#7E6CAB]"></div>
                  <span className="text-sm font-semibold text-[#072635]">
                    Diastolic
                  </span>
                </div>
                <p className="text-2xl font-bold text-[#072635]">
                  {patient.diagnosis_history[0].blood_pressure.diastolic.value}
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  {patient.diagnosis_history[0].blood_pressure.diastolic.levels}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function to convert month name to number
function getMonthNumber(monthName: string): number {
  const months: { [key: string]: number } = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    November: 10,
    December: 11,
  };
  return months[monthName] || 0;
}

export default Chart;
