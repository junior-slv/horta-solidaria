import React, { useContext, useEffect, useState } from 'react';
import { format, subDays } from 'date-fns';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Sidebar from '@/components/sidebar/Sidebar';

const Resumo = () => {
  const [data, setData] = useState<{ name: string; value: number; }[]>([]);

  useEffect(() => {
    const generateData = () => {
      const today = new Date();
      const data = [];

      for (let i = 30; i >= 1; i--) {
        const date = subDays(today, i);
        const formattedDate = format(date, 'dd/MM');
        const value = Math.floor(Math.random() * 100); // Valor aleatório para exemplo

        data.push({ name: formattedDate, value });
      }

      setData(data);
    };

    generateData();
  }, []);

  return (
    <div className="flex">
      <Sidebar/>
      <div>
      <BarChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </div>
    </div>
  );
};

export default Resumo;
