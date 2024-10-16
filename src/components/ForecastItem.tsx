import { Forecastday } from "@/types/ForecastResponse";

type ForecastItemProps = Pick<Forecastday, "date"> & {
  condition: Forecastday["day"]["condition"]["text"];
  avgTemp: Forecastday["day"]["avgtemp_c"];
};

const ForecastItem = ({ date, condition, avgTemp }: ForecastItemProps) => {
  return (
    <li className="weather-item-list">
      {date}
      <br />
      {condition} / 평균 {avgTemp}
    </li>
  );
};

export default ForecastItem;
