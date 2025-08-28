async function getWeatherData() {
  const res = await fetch("https://wttr.in/London?format=j1");

  if (!res.ok) {
    throw new Error("Failed to fetch weather data");
  }

  return res.json();
}

export default async function SSGPage() {
  const weatherData = await getWeatherData();
  const buildTime = new Date().toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "long",
    timeZone: "UTC",
  });

  return (
    <div className="p-4 border rounded-lg bg-white max-w-xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">London Weather (SSG)</h2>
      <div className="space-y-2">
        <p>Temperature: {weatherData.current_condition[0].temp_C}°C</p>
        <p>
          Condition: {weatherData.current_condition[0].weatherDesc[0].value}
        </p>
        <p>Humidity: {weatherData.current_condition[0].humidity}%</p>
        <p className="text-sm text-gray-500">
          Generated at build time: {buildTime}
        </p>
      </div>
      <div className="mt-4 p-4 bg-gray-100 rounded-lg">
        <h3 className="font-semibold mb-2">
          About Static Site Generation (SSG)
        </h3>
        <p className="text-sm text-gray-600">
          This page demonstrates Static Site Generation where the content is
          generated at build time. The weather data was fetched when the
          application was built, and it will remain static until the next build.
          This approach provides maximum performance as the page is pre-rendered
          and can be cached at the edge.
        </p>
      </div>
    </div>
  );
}
