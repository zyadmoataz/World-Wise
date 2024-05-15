import { useSearchParams } from "react-router-dom";

//we made it in a custom hook so it can be reusable in geolocation and reverse gelocation
export function useUrlPosition() {
  const [searchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return [lat, lng];
}
