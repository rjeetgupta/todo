import React from 'react';
import { Chrono } from 'react-chrono';

const Timeline = ({ tasks }) => {
  const items = tasks.map((task, index) => ({
    title: task.date,
    cardTitle: `Task ${index + 1}`,
    cardSubtitle: task.text,
    cardDetailedText: task.description,
  }));

  return (
    <div className="w-full max-w-2xl mx-auto mt-8 bg-white dark:bg-gray-800 p-4 rounded shadow-md">
      <Chrono items={items} mode="VERTICAL" theme={{ primary: "blue", secondary: "grey" }} />
    </div>
  );
};

export default Timeline;
