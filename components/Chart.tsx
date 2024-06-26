import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { format } from 'date-fns';

interface ChartProps {
  data: any[];
  timeframe: string;
}

const Chart: React.FC<ChartProps> = ({ data, timeframe }) => {
  const [chartData, setChartData] = useState<any[]>([]);
  const [zoom, setZoom] = useState<number>(1);

  useEffect(() => {
    const filteredData = data.filter((item, index) => {
      if (timeframe === 'daily') return true;
      if (timeframe === 'weekly') return index % 7 === 0;
      if (timeframe === 'monthly') return index % 30 === 0;
      return true;
    });
    setChartData(filteredData);
  }, [data, timeframe]);

  const handleZoom = (direction: string) => {
    if (direction === 'in')
