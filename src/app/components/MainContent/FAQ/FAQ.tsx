import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { FiPlus } from "react-icons/fi";

const faqData = [
  {
    question: 'Стоимость веб-приложения',
    answer: 'Зависит от дизайна, функционала, требований. Как показывает практика, на MVP (минимально жизнеспособный продукт) нужно от 500.000 руб. В сумму входит дизайн, разработка, тестирование, запуск на сервере.Чтобы получить бесплатную точную оценку, сколько стоит создание веб-приложения, — обратитесь к персональному аккаунт-менеджеру.'
  },
  {
    question: 'Сроки',
    answer: 'Зависит от дизайна, функционала, требований.Для MVP это обычно от 3 месяцев. В них входит дизайн, разработка, тестирование, запуск на сервере. Чтобы получить бесплатную точную оценку проекта — обратитесь к персональному аккаунт-менеджеру.'
  },
  {
    question: 'Уже есть проект. Вы предоставляете услуги по доработке, сопровождению?',
    answer: 'Да, если ваш проект написан на технологиях, на которых специализируемся мы: — Фронтенд: React или Vue; — Бэкенд: Python (Django) или PHP; — CMS: WordPress. Если стек совпадает, то мы предоставляем любой вид работ: масштабирование функционала, оптимизация, интеграции…'
  }
]

export default function BasicAccordion() {
  return (
    <div>
      {faqData.map((item, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<FiPlus />}
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
            sx={{
              backgroundColor: '#e9e9e9',
            }}
          >
            <Typography>{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              backgroundColor: '#f5f5f5',
            }}
          >
            <Typography>
              {item.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
