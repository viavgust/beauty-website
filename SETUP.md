# Beauty Studio - Setup Guide

## Шаг 1: Создание проекта Sanity

1. Зайди на https://sanity.io и создай аккаунт (можно через Google)
2. Создай новый проект:
   - Нажми "Create new project"
   - Название: `beauty-studio`
   - Dataset: `production` (по умолчанию)
   - Запиши **Project ID** (нужен для настройки)

3. В настройках проекта на Sanity.io:
   - Зайди в Settings → API → CORS origins
   - Добавь:
     - `http://localhost:3000`
     - `https://твой-домен.vercel.app` (добавишь после деплоя)

## Шаг 2: Настройка локального проекта

1. Открой файл `.env.local` и замени `demo` на твой Project ID:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=твой-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

2. Запусти сайт локально:
```bash
npm run dev
```

3. Открой http://localhost:3000 - основной сайт
4. Открой http://localhost:3000/studio - админка Sanity

## Шаг 3: Добавление контента

В Sanity Studio (/studio):

1. **Site Settings** - основные настройки:
   - Название сайта
   - Контакты (email, телефон)
   - Ссылки на соцсети

2. **Portfolio Item** - работы для портфолио:
   - Загрузи фото
   - Выбери категорию (Makeup, Styling, Bridal, Editorial)
   - Добавь описание (опционально)

3. **Service** - услуги:
   - Название
   - Описание
   - Цена
   - Длительность

4. **Course** - курсы:
   - Название
   - Описание
   - Цена
   - Статус: draft / coming-soon / published

5. **Testimonial** - отзывы:
   - Текст отзыва
   - Имя клиента
   - Источник (Instagram, Google и т.д.)

## Шаг 4: Деплой на Vercel

### Вариант A: Через GitHub (рекомендуется)

1. Создай репозиторий на GitHub
2. Запуши код:
```bash
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/username/beauty-website.git
git push -u origin main
```

3. Зайди на https://vercel.com
4. Нажми "Import Project" → выбери репозиторий
5. Добавь переменные окружения:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID` = твой project id
   - `NEXT_PUBLIC_SANITY_DATASET` = production
6. Нажми Deploy

### Вариант B: Через Vercel CLI

```bash
npm i -g vercel
vercel
# Следуй инструкциям, добавь env переменные
```

## Шаг 5: После деплоя

1. Добавь домен Vercel в Sanity CORS:
   - Sanity.io → Settings → API → CORS
   - Добавь `https://твой-проект.vercel.app`

2. Теперь админка доступна по адресу:
   `https://твой-проект.vercel.app/studio`

---

## Как сестре пользоваться админкой

1. Зайти на `https://сайт.vercel.app/studio`
2. Войти через Google (тот же аккаунт что создавал Sanity)
3. В левом меню выбрать нужный раздел:
   - **Portfolio Item** - добавить/удалить фото работ
   - **Service** - изменить услуги и цены
   - **Course** - управлять курсами
   - **Site Settings** - изменить контакты
4. После изменений нажать **Publish** (кнопка внизу справа)
5. Изменения появятся на сайте через 1-2 минуты

## Приглашение других пользователей

1. Sanity.io → Project → Members
2. Invite member
3. Указать email сестры
4. Она получит приглашение и сможет редактировать контент
