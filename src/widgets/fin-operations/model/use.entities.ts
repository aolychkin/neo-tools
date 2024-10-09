import { PaymentStatus } from "./entities"

export function usePaymentStatus(): PaymentStatus[] {
  const data: PaymentStatus[] = [
    {
      id: 1,
      type: 'paid',
      label: 'Оплачен',
      icon: 'mdi-light:home',
      color: 'success'
    },
    {
      id: 2,
      type: 'pending',
      label: 'Обрабатывается',
      icon: 'mdi-light:home',
      color: 'neutral'
    },
    {
      id: 3,
      type: 'veification',
      label: 'На верификации',
      icon: 'mdi-light:home',
      color: 'warning'
    },
    {
      id: 4,
      type: 'cancelled',
      label: 'Отменен',
      icon: 'mdi-light:home',
      color: 'danger'
    },
  ]
  return data
}