import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface DashBoardProps {
  title: string;
  value: number;
  type?: string;
}

function Dashboard(props: DashBoardProps) {
  const { title, value, type } = props;
  return (
    //Layout
    <div className="md:w-[330px] w-10/12 justify-center rounded-[8px] bg-white py-[10px] px-[10px] text-center">
      <div className="grid grid-cols-2 grid-rows-1">
        {/* Progress Bar */}
        <div className="w-[80px] h-[80px] justify-center mx-auto">
          <CircularProgressbar
            value={value}
            maxValue={100}
            text={`${value}${type}`}
            styles={{
              path: {
                stroke: `rgb(114, 184, 84)`,
              },
              text: {
                fontSize: "26px",
                fill: "rgb(114, 184, 84)",
              },
            }}
          />
        </div>
        {/* Texto */}
        <div className="md:text-xl text-lg flex justify-center items-center">
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
