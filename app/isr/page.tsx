async function getWeatherData() {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

    const res = await fetch("https://wttr.in/London?format=j1", {
      next: {
        revalidate: 35,
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      throw new Error("Failed to fetch weather data");
    }

    return res.json();
  } catch (error) {
    // Return default data if fetch fails
    return {
      current_condition: [
        {
          temp_C: "N/A",
          weatherDesc: [{ value: "Data unavailable" }],
          humidity: "N/A",
        },
      ],
    };
  }
}

export default async function ISRPage() {
  const weatherData = await getWeatherData();
  const currentTime = new Date().toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "long",
    timeZone: "UTC",
  });

  return (
    <div className="p-4 border rounded-lg bg-white max-w-xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">London Weather (ISR)</h2>
      <div className="space-y-2">
        <p>Temperature: {weatherData.current_condition[0].temp_C}°C</p>
        <p>
          Condition: {weatherData.current_condition[0].weatherDesc[0].value}
        </p>
        <p>Humidity: {weatherData.current_condition[0].humidity}%</p>
        <p className="text-sm text-gray-500">Last updated: {currentTime}</p>
      </div>
      <div className="mt-4 p-4 bg-gray-100 rounded-lg">
        <h3 className="font-semibold mb-2">
          About Incremental Static Regeneration (ISR)
        </h3>
        <p className="text-sm text-gray-600">
          This page demonstrates Incremental Static Regeneration, where the page
          is statically generated but revalidated every 30 seconds. This
          approach combines the benefits of static generation (fast page loads)
          with fresh data. The page will show cached data and update in the
          background, ensuring a balance between performance and data freshness.
        </p>
      </div>
    </div>
  );
}
