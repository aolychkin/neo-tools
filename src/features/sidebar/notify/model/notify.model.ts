import { NotifyCard } from "../../../../entities/nav/entities";

export function useNotifyCard() {
  const data: NotifyCard[] = [
    {
      id: 1,
      title: "Задачи на спринт",
      description: "Выполнено 60% из задач на этой неделе",
      button: "Перейти к задачам",
      progress: 60,
      color: "warning",
    },
    {
      id: 2,
      title: "Документы к изучению",
      description: "Вы изучили всего 20% обязательных документов",
      button: "Изучить документы",
      progress: 20,
      color: "warning",
    },

  ]

  return data;
}