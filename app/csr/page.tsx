"use client";

import { useEffect, useState } from "react";

interface WeatherData {
  current_condition: Array<{
    temp_C: string;
    weatherDesc: Array<{ value: string }>;
    humidity: string;
  }>;
}

export default function CSRPage() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch("https://wttr.in/London?format=j1");
        const data = await res.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return (
      <div className="p-4 max-w-xl mx-auto mt-8">Loading weather data...</div>
    );
  }

  if (!weatherData) {
    return (
      <div className="p-4 max-w-xl mx-auto mt-8">
        Failed to load weather data
      </div>
    );
  }

  return (
    <div className="p-4 border rounded-lg bg-white max-w-xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">London Weather (CSR)</h2>
      <div className="space-y-2">
        <p>Temperature: {weatherData.current_condition[0].temp_C}°C</p>
        <p>
          Condition: {weatherData.current_condition[0].weatherDesc[0].value}
        </p>
        <p>Humidity: {weatherData.current_condition[0].humidity}%</p>
        <p className="text-sm text-gray-500">
          Last updated:{" "}
          {new Date().toLocaleString("en-US", {
            dateStyle: "medium",
            timeStyle: "long",
            timeZone: "UTC",
          })}
        </p>
      </div>
      <div className="mt-4 p-4 bg-gray-100 rounded-lg">
        <h3 className="font-semibold mb-2">
          About Client-Side Rendering (CSR)
        </h3>
        <p className="text-sm text-gray-600">
          This page demonstrates Client-Side Rendering where the weather data is
          fetched in the browser after the page loads. This approach is good for
          dynamic data that doesn&apos;t need SEO and can be loaded after the
          initial page render.
        </p>
      </div>
    </div>
  );
}
