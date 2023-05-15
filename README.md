# Тестовое задание на должность "Фронтенд разработчик React"

> В рамках тестового задания требуется разработать пользовательский интерфейс для
отправки и получения сообщений WhatsApp

Результат выполнения задания представить в виде:
- исходники на github с инструкцией для локального запуска
- (желательно) демонстрация работы сервиса: лайф-демо или видео/скриншоты
- (желательно) адрес сервиса, опубликованного в Интернете, например:
https://test.com

***Время на выполнение задания: 5 дней***

Требования:
1. Требуется разработать пользовательский интерфейс для отправки и получения
сообщений WhatsApp
2. Требуется использовать сервис GREEN-API https://green-api.com/
3. Требуется реализовать отправку и получение только текстовых сообщений
4. Требуется за прототип интерфейса взять внешний вид чата
https://web.whatsapp.com/
5. Требуется реализовать интерфейс максимально простым с минимальным набором
функций

6. Требуется отправку сообщений реализовать методом https://green-
api.com/docs/api/sending/SendMessage/

7. Требуется получение сообщений реализовать методом https://green-
api.com/docs/api/receiving/technology-http-api/

8. Требуется использовать технологию React

Ожидаемый результат:
* Пользователь переходит на сайт чата и вводит свои учетные данные из
системы GREEN-API (idInstance, apiTokenInstance)
* Пользователь вводит номер телефона получателя и создает новый чат
* Пользователь пишет текстовое сообщение и отправляет его получателю в
WhatsApp
* Получатель отвечает на сообщение в мессенджере WhatsApp
* Пользователь видит ответ получателя в чате

## Решение

### Локальный запуск

```
git clone https://github.com/Votchitsev/green-api-test-task.git
```

``` 
cd green-api-test-task
```

```
yarn install
```

```
yarn start
```

### Немного об архитектуре проекта

При реализации задания я решил попробовать модульную систему организации проекта, хотя это не было необходимостью, поскольку он не масштабный. Но тем не менее, попробовать надо.

Проект поделён на три модуля:
* common - модуль содержит общие компоненты, которые используются в других модулях
* authorization - к нему относится функционал авторизации
* chat - включает функционал, связанный, непосредственно, с чатом (создание, переписка и тд.)

В проекте, преимущественно, использовалось глобальное состояние, реализованное с помощью библиотеки Redux-toolkit. При этом отдельные "Reducer" и "Slice" размещены в модулях, за которые они отвечают.

Взаимодействие с сервером организовано с помощью функции ```CreateAsyncThunk``` библиотеки Redux. 

В качестве пакетного менеджера выбран ```yarn```.

### Функционал

> **Попробовать приложение можно [здесь](https://votchitsev.github.io/green-api-test-task/)** 

#### Ввод регистрационных данных
При запуске приложения пользователю предлагается ввести данные, необходимые для работы с "Green-API": ```idInstance```, ```apiTokenInstance```, которые предоставляются пользователю после регистрации в API-сервисе.

![Авторизация](/readme_img/auth.png)

#### Создание и удаление чата, отправка и получение сообщений
После того, как были указаны необходимые для работы данные открывается функционал чата. Слева - список чатов, справа - сообщения выбранного чата. Для того, чтобы создать чат необходимо ввести в форме слева номер телефона (только часть, состоящую из цифр без " +").

![Создание чата](/readme_img/chat_list.png)

Чтобы начать переписку, нужно нажать на чат слева и ввести сообщение в форме справа. 

Автоматическое получение сообщений в проекте не настроено по причине ограниченного количества запросов, которые можно отправить в бесплатном тарифе. Обновление полученных сообщений происходит при входе в определённый чат.

![Переписка](/readme_img/chat.png)

Чтобы удалить чат нужно навести на него и нажать на соответствующую кнопку.

#### Сброс авторизационных данных

Авторизационные данные сохраняются в локальном хранилище браузера и глобальном состоянии React. Для того, чтобы их сбросить нужно нажать кнопку "Logout".