# BoardLocator
Сайт, на котором можно выбрать настольную игру, формат, удобные даты и время и нажать кнопку поиск
Сайт покажет список доступных оппонентов, позволит написать им и создать груповой чат <br/>
Так же будет приложение на PWA

Проект будет Open source, любой желающий сможет присоедениться к разработке
Монетизация не планируется, максимум добровольные донаты, которые будут идти на хостинг

## Функции:
- Поиск игроков (удобное время для игры, список пересечений, игра, теги формата)
- Личные сообщения (отправка файлов, фото, сообщений)
- Груповые чаты (отправка файлов, фото, сообщений)
- Профиль (фото, ник, нейм-тег, о себе, игры, режимы, предпочитаемые места, статистика по играм)
- Поиск клубов (список адресов клубов, поиск клубов)
- Клубы (Поиск, название, описание, адреса, фото)
- Игры (Поиск, название, описание, статистика по игре, фото)
- Уведомления
- Возможность установить на телефон
- Сбор статистики по играм и матчам

## Стек
#### Backend:
- ASP.NET core
- gRPC
- PostgreSQL (Основная база)
- Redis (Кеш и возможно поиск игроков)
- Cassandra (Чат)
- ClickHouse (статистика)
- ELK (Логи)
- ElasticSearch (Поиск)
- xUnit
#### Frontend:
- Angular
- gRPC-web
- PWA
#### Прочее:
- Figma
- Trello

### Макет
https://www.figma.com/design/lDt1McoJl1onasTIlbCxfJ/BoardLocator
