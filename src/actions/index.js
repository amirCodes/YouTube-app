const API_KEY = '6a78596d062df78380eff5944c4e5567';
// https://hptechblogs.com/using-json-web-token-react/
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather() {

    return {
        type: FETCH_WEATHER,
    }
}