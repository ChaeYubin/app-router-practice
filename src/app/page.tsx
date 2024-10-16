import CurrentWeatherItem from "@/components/CurrentWeatherItem";
import { cities } from "@/data/cities";
import { getTime } from "@/services/timeZone";
import { getCurrentWeather } from "@/services/weather";

export default async function Home() {
  const citiesCode = cities.map((city) => city.code);

  const currentWeather = await Promise.all(
    citiesCode.map((code) => getCurrentWeather(code))
  );

  const time = await Promise.all(
    currentWeather.map((weather) => getTime(weather.location.tz_id))
  );

  return (
    <>
      <h1>날씨 앱</h1>
      <ul>
        {cities.map((city, index) => (
          <CurrentWeatherItem
            key={city.code}
            cityCode={city.code}
            cityName={city.name}
            weather={currentWeather[index].current.condition.text}
            time={time[index].dateTime}
          />
        ))}
      </ul>
    </>
  );
}
