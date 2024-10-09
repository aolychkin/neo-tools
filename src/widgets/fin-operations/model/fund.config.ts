export type FundRule = {
  type: 'goal' | 'percent' | 'child-general',
  value: number
}

export type FundConfig = {
  id: number,
  label: string,
  rule: FundRule,
  taxes?: TaxConfig | undefined,
  childFunds?: FundConfig[]
}

export type TaxConfig = {
  id: number,
  label: string,
  value: number,
}

export function FundsConfig() {
  const data: FundConfig = {
    id: 1,
    label: 'Выручка',
    rule: <FundRule>{
      type: 'percent',
      value: 100,
    },
    childFunds: <FundConfig[]>
      [
        {
          id: 99,
          label: 'Очищение выручки',
          rule: <FundRule>{
            type: 'child-general',
            value: 100,
          },
          childFunds: <FundConfig[]>[
            {
              id: 2,
              label: 'Обязательный маркетинг',
              rule: <FundRule>{
                type: 'percent',
                value: 25,
              }
            },
            {
              id: 3,
              label: 'Прямые переменные расходы',
              rule: <FundRule>{
                type: 'percent',
                value: 25,
              }
            },
            // этот пункт указывает возврат на ранее инвестированные деньги (акционер или другие люди, уже заранее оплаченные на год сервисы + считать объем "долга")
            {
              id: 10000,
              label: 'Возврат инвестиций',
              rule: <FundRule>{
                type: 'percent',
                value: 25,
              }
            },
          ]
        },
        {
          id: 4,
          label: 'Группа Фондов Стабилизации',
          rule: <FundRule>{
            type: 'percent',
            value: 25,
          },
          childFunds: <FundConfig[]>[
            {
              id: 5,
              label: 'Фикс Клиенских команд',
              rule: <FundRule>{
                type: 'goal',
                value: 0,
              },
            },
            {
              id: 6,
              label: 'Фикс Сервисных команд',
              rule: <FundRule>{
                type: 'goal',
                value: 0,
              },
            },
            {
              id: 7,
              label: 'Фикс Капитану',
              rule: <FundRule>{
                type: 'goal',
                value: 10000,
              },
            },
            {
              id: 8,
              label: 'Регулярные платежи',
              rule: <FundRule>{
                type: 'goal',
                value: 1788,
              },
            },
            {
              id: 9,
              label: 'Известные платежи',
              rule: <FundRule>{
                type: 'goal',
                value: 2500,
              },
            },
          ]
        },
      ]
  }
  //FundConfig[] | FundGroupConfig
  return data
}

const FundList = [
  'Налог с Выручки',
  'Налог на ФОТ',

  //Группа
  'Группа Фондов Стабилизации',
  'Фикс Сервисных команд',
  'Фикс Капитану',
  'Регулярные платежи',
  'Известные платежи',

  'Чистая Выручка',
  //Категория
  'На ОО (Общее Объединения)',
  //Группа
  'Группа Фондов Устойчивости',
  'Безопасности',
  'Тушения пожаров',

  //Группа
  'Группа Фондов Бонусов',
  //Подгруппа
  'Бонусы Клиентским командам',
  //под подгруппа
  'Команды', // пропорционально сгенеренной выручке
  //Подгруппа
  'Бонусы Сервисным командам',
  //под подгруппа
  'Команды',

  //Группа
  'Группа Фондов Бонусов',
  'Личностные игры',
  'Квартальных премий по целям',
  'Бонусы по целям Команды',

  //Группа
  'Налог',
  'Налог',
  'Налог',
  'Налог',
  'Налог',


  'На ССО (Стратегическом Совете Объединения)',

  'Налог',
  'Налог',

  'На СК (Совете Капитанов)',
  'Налог',
  'Налог',
  'Налог',
]