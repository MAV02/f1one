'use client';

import { useEffect, useState } from 'react';

type Props = {
  session: string;
};

type Car = {
  id: number;
  x: number;
  y: number;
  color: string;
};

const generateCars = () =>
  Array.from({ length: 5 }).map((_, i) => ({
    id: i + 1,
    x: Math.random() * 300 + 50,
    y: Math.random() * 200 + 50,
    color: ['red', 'blue', 'yellow', 'green', 'white'][i],
  }));

export default function TrackMap({ session }: Props) {
  const [cars, setCars] = useState<Car[]>(generateCars());

  useEffect(() => {
    const interval = setInterval(() => {
      setCars(generateCars());
    }, 5000); // Refresh every 5s
    return () => clearInterval(interval);
  }, [session]);

  return (
    <div className="bg-gray-900 rounded-lg p-4 shadow">
      <h2 className="text-xl font-semibold mb-2">Track Map – {session}</h2>
      <svg viewBox="0 0 400 300" className="w-full h-72 bg-gray-800 rounded">
        <path
          d="M50,150 Q150,50 250,150 T350,150"
          stroke="#444"
          strokeWidth="4"
          fill="none"
        />
        {cars.map((car) => (
          <circle
            key={car.id}
            cx={car.x}
            cy={car.y}
            r="6"
            fill={car.color}
            className="transition-all duration-500"
          />
        ))}
      </svg>
    </div>
  );
}
