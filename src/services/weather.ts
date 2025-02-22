import { CurrentWeatherResponse } from "@/types/CurrentWeatherResponse";
import { ForecastResponse } from "@/types/ForecastResponse";

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

export const getCurrentWeather = async (
  city: string
): Promise<CurrentWeatherResponse> => {
  const res = await fetch(
    `http://api.weatherapi.com/v1/current.json?lang=ko&key=${API_KEY}&q=${city}`
  );

  if (!res.ok) throw new Error("날씨 정보를 가져올 수 없습니다.");

  return res.json();
};

export const getForecast = async (city: string): Promise<ForecastResponse> => {
  const res = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=3&aqi=no&alerts=no&lang=ko`
  );

  if (!res.ok) throw new Error("날씨 예보 정보를 가져올 수 없습니다.");

  return res.json();
};
