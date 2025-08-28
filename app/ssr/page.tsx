async function getWeatherData() {
  const res = await fetch("https://wttr.in/London?format=j1", {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch weather data");
  }

  return res.json();
}

export default async function SSRPage() {
  const weatherData = await getWeatherData();

  return (
    <div className="p-4 border rounded-lg bg-white max-w-xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">London Weather (SSR)</h2>
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
          About Server-Side Rendering (SSR)
        </h3>
        <p className="text-sm text-gray-600">
          This page demonstrates Server-Side Rendering where the weather data is
          fetched on the server for each request. The page is generated on the
          server with fresh data, making it ideal for real-time information that
          needs SEO. Data is revalidated every minute to keep it fresh while
          maintaining good performance.
        </p>
      </div>
    </div>
  );
}
