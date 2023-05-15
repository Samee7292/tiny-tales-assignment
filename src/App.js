import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch('https://www.terriblytinytales.com/test.txt');
    const text = await response.text();
    const words = text.toLowerCase().match(/\b\w+\b/g);
    const frequencies = words.reduce((acc, word) => {
      acc[word] = (acc[word] || 0) + 1;
      return acc;
    }, {});
    const sortedFrequencies = Object.entries(frequencies).sort((a, b) => b[1] - a[1]);
    const topFrequencies = sortedFrequencies.slice(0, 20);
    const data = topFrequencies.map(([word, frequency]) => ({ word, frequency }));
    setData(data);
    setLoading(false);
  };

  const exportData = () => {
    const csv = data.map(({ word, frequency }) => `${word},${frequency}`).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, 'histogram.csv');
  };

  return (
    <div>
      <button onClick={fetchData} disabled={loading}>Submit</button>
      {loading && <p>Loading...</p>}
      {data.length > 0 && (
        <div>
          <button onClick={exportData}>Export</button>
          <BarChart width={800} height={400} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="word" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="frequency" fill="#8884d8" />
          </BarChart>
        </div>
      )}
    </div>
  );
}

export default App;