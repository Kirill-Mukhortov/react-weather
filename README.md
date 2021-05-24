# 🌤 Прогноз погоды на React ☔️

![weather_app](https://media.giphy.com/media/QBBT0azeqI7rVRHjMB/giphy.gif "Weather APP")

Приложение определяет местоположение пользователя и отображает погоду на ближайшие пять дней для его геопозиции.

Так же возможен ввод названий городов вручную кириллицей.

Основной функционал:
- Определение геопозиции
- Поиск городов вручную
- Отображение карточек с погодой на 5 дней
- Отображение введенного города на карте
- Иконки погоды меняются со светлой темы на темную в зависимости от времени суток пользователя

Основные технологии:
- React
- Weather API
- Google Maps API

Для запуска проекта необходимо заполнить .env файл (ключи для OpenWeatherMap API и Google API)

`git clone git@github.com:Kirill-Mukhortov/react-weather.git`

`cd react-weather`

`yarn install`

`yarn start`