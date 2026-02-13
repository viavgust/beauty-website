// Unsplash images for beauty/makeup portfolio
export const portfolioImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80',
    category: 'bridal',
    title: 'Свадебный образ',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80',
    category: 'editorial',
    title: 'Editorial съёмка',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=800&q=80',
    category: 'makeup',
    title: 'Вечерний макияж',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80',
    category: 'styling',
    title: 'Полный образ',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80',
    category: 'makeup',
    title: 'Nude макияж',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=80',
    category: 'bridal',
    title: 'Нежный свадебный',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80',
    category: 'editorial',
    title: 'Fashion съёмка',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80',
    category: 'styling',
    title: 'Стильный образ',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
    category: 'bridal',
    title: 'Классическая невеста',
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1526045478516-99145907023c?w=800&q=80',
    category: 'makeup',
    title: 'Smoky eyes',
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=800&q=80',
    category: 'editorial',
    title: 'Креативный макияж',
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1504703395950-b89145a5425b?w=800&q=80',
    category: 'styling',
    title: 'Деловой стиль',
  },
]

export const heroImage = 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1600&q=80'
export const aboutImage = 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&q=80'
export const aboutImage2 = 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80'

export const services = [
  {
    id: 1,
    title: 'Дневной макияж',
    description: 'Свежий, естественный образ для повседневной жизни. Подчеркнём вашу красоту без эффекта "маски".',
    price: 'от 4 000 ₽',
    duration: '1 час',
    image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=600&q=80',
  },
  {
    id: 2,
    title: 'Вечерний макияж',
    description: 'Яркий, выразительный образ для особых случаев: выпускной, корпоратив, романтический ужин.',
    price: 'от 6 000 ₽',
    duration: '1.5 часа',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&q=80',
  },
  {
    id: 3,
    title: 'Свадебный макияж',
    description: 'Полный свадебный пакет: пробный макияж + макияж в день свадьбы. Стойкость до 12 часов.',
    price: 'от 15 000 ₽',
    duration: '2-3 часа',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
    popular: true,
  },
  {
    id: 4,
    title: 'Макияж для фотосессии',
    description: 'Профессиональный макияж для портретной, fashion или коммерческой съёмки.',
    price: 'от 8 000 ₽',
    duration: '1.5-2 часа',
    image: 'https://images.unsplash.com/photo-1617220379469-5ca3e937a2d0?w=600&q=80',
  },
  {
    id: 5,
    title: 'Персональный стайлинг',
    description: 'Подбор гардероба, разбор шкафа, шопинг-сопровождение. Найдём ваш идеальный стиль.',
    price: 'от 12 000 ₽',
    duration: '3-4 часа',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80',
  },
  {
    id: 6,
    title: 'Урок макияжа',
    description: 'Индивидуальное обучение техникам макияжа с учётом особенностей вашего лица.',
    price: 'от 8 000 ₽',
    duration: '2 часа',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80',
  },
]

export const courses = [
  {
    id: 1,
    title: 'Базовый курс макияжа',
    description: 'Для начинающих. Изучите основы колористики, работу с текстурами и базовые техники нанесения.',
    price: '35 000 ₽',
    duration: '5 дней',
    modules: ['Теория цвета', 'Уход за кожей', 'Дневной макияж', 'Вечерний макияж', 'Работа с бровями'],
    status: 'published',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80',
    startDate: '15 марта 2024',
  },
  {
    id: 2,
    title: 'Свадебный стилист',
    description: 'Углублённый курс для тех, кто хочет работать с невестами. Все секреты стойкого свадебного макияжа.',
    price: '55 000 ₽',
    duration: '7 дней',
    modules: ['Работа с невестой', 'Стойкий макияж', 'Причёски', 'Организация съёмки', 'Работа с фотографом'],
    status: 'coming-soon',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
    startDate: 'Апрель 2024',
  },
  {
    id: 3,
    title: 'Fashion & Editorial',
    description: 'Продвинутый курс для визажистов. Креативный макияж, работа на съёмочной площадке, портфолио.',
    price: '75 000 ₽',
    duration: '10 дней',
    modules: ['Креативный макияж', 'Работа со светом', 'Тренды', 'Построение портфолио', 'Нетворкинг'],
    status: 'coming-soon',
    image: 'https://images.unsplash.com/photo-1526045478516-99145907023c?w=600&q=80',
    startDate: 'Май 2024',
  },
]

export const testimonials = [
  {
    id: 1,
    text: 'Александра — настоящий профессионал! Мой свадебный макияж был идеальным и продержался весь день. Все гости делали комплименты!',
    name: 'Мария К.',
    role: 'Невеста',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
  },
  {
    id: 2,
    text: 'Прошла базовый курс у Александры. Теперь умею краситься сама и понимаю, какая косметика мне подходит. Очень рекомендую!',
    name: 'Елена С.',
    role: 'Ученица',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
  },
  {
    id: 3,
    text: 'Работаем с Александрой на всех наших съёмках. Всегда попадает в настроение проекта и находит общий язык с моделями.',
    name: 'Дмитрий В.',
    role: 'Фотограф',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  },
  {
    id: 4,
    text: 'Александра помогла мне разобраться со стилем. Теперь я точно знаю, что мне идёт, и перестала покупать лишнее.',
    name: 'Ольга П.',
    role: 'Клиент',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80',
  },
]

export const stats = [
  { number: '500+', label: 'Довольных клиентов' },
  { number: '8', label: 'Лет опыта' },
  { number: '50+', label: 'Выпускников курсов' },
  { number: '200+', label: 'Свадебных образов' },
]
