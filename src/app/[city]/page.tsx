import Button from "@/components/Button";
import ForecastItem from "@/components/ForecastItem";
import { cities } from "@/data/cities";
import { getForecast } from "@/services/weather";

type Props = {
  params: { city: string };
};

export default async function Detail({ params }: Props) {
  const forecast = (await getForecast(params.city)).forecast.forecastday;

  return (
    <>
      <h1>
        {cities.find((value) => value.code === params.city)?.name}의 3일 날씨
        예보
      </h1>
      <ul>
        {forecast.map((item) => (
          <ForecastItem
            key={item.date}
            date={item.date}
            condition={item.day.condition.text}
            avgTemp={item.day.avgtemp_c}
          />
        ))}
      </ul>
      <Button />
    </>
  );
}
