export interface frontManualOperation {
  ID: number
  Date: Date
  Sprint: Sprint
  Fund: Fund
  Value: number
  IncomeAccount: IncomeAccount
  Partner: Partner
  Union: Union
  Team: Team
  OperationStatus: OperationStatus
  Details: string
}

export interface Sprint {
  Number: number
  StartDate: string
  EndDate: string
}

export interface Fund {
  ID: number
  Label: string
}

export interface IncomeAccount {
  Label: string
  Bank: string
}

export interface Partner {
  Label: string
}

export interface Union {
  Label: string
}

export interface Team {
  Label: string
}

export interface OperationStatus {
  Type: string
  Label: string
  Icon: string
  Color: string
}


export function getManualOperations() {
  let obj: frontManualOperation[] = JSON.parse('\
  [{"ID":1,"Date":"2024-09-09T11:01:35.684366+03:00","Sprint":{"Number":18,"StartDate":"2024-08-30T00:00:00Z","EndDate":"2024-09-12T23:59:59Z"},"Fund":{"ID":1,"Label":"Выручка"},"Value":100000,"IncomeAccount":{"Label":"ИП Лычкин А.О.","Bank":"Точка Банк"},"Partner":{"Label":"ООО МЕДЛАБ ПЛЮС"},"Union":{"Label":"Founder Union"},"Team":{"Label":"ГК. HR-партнерка"},"OperationStatus":{"Type":"paid","Label":"Оплачен","Icon":"mdi-light:home","Color":"success"},"Details":"Test operation 1"},{"ID":2,"Date":"2024-10-07T11:01:35.684366+03:00","Sprint":{"Number":20,"StartDate":"2024-09-27T00:00:00Z","EndDate":"2024-10-10T23:59:59Z"},"Fund":{"ID":1,"Label":"Выручка"},"Value":3000,"IncomeAccount":{"Label":"ИП Лычкин А.О.","Bank":"Точка Банк"},"Partner":{"Label":"ООО МЕДЛАБ ПЛЮС"},"Union":{"Label":"Founder Union"},"Team":{"Label":"ГК. HR-партнерка"},"OperationStatus":{"Type":"paid","Label":"Оплачен","Icon":"mdi-light:home","Color":"success"},"Details":"Test operation 2"},{"ID":3,"Date":"2024-10-07T11:01:35.684367+03:00","Sprint":{"Number":20,"StartDate":"2024-09-27T00:00:00Z","EndDate":"2024-10-10T23:59:59Z"},"Fund":{"ID":1,"Label":"Выручка"},"Value":100000,"IncomeAccount":{"Label":"ИП Лычкин А.О.","Bank":"Точка Банк"},"Partner":{"Label":"ООО МЕДЛАБ ПЛЮС"},"Union":{"Label":"Founder Union"},"Team":{"Label":"ГК. HR-партнерка"},"OperationStatus":{"Type":"paid","Label":"Оплачен","Icon":"mdi-light:home","Color":"success"},"Details":"Test operation 3"}]'
  );

  return (obj)
}


export interface FundTree {
  FundID: number
  FundLabel: string
  Value: number
  Goals?: Goal[]
  Child?: FundTree[]
}

export interface Goal {
  GoalId: number
  GoalLabel: string
  ExpireDate: string
  GoalTotal: number
  CurrentValue: number
  SprintTotal: number
  SprintIncome: number
}

export function getFundTreeByManualOperationID() {
  //Manual ID = 1
  let obj: FundTree = JSON.parse('\
  {"FundID":1,"FundLabel":"Выручка","Value":300000,"Goals":null,"Child":[{"FundID":2,"FundLabel":"Очищение выручки","Value":99865.59,"Goals":null,"Child":[{"FundID":5,"FundLabel":"Налог на выручку","Value":18000,"Goals":null,"Child":null},{"FundID":6,"FundLabel":"Обязательный маркетинг","Value":75000,"Goals":null,"Child":null},{"FundID":7,"FundLabel":"Прямые переменные расходы","Value":0,"Goals":null,"Child":null},{"FundID":8,"FundLabel":"Возврат инвестиций","Value":6865.5986,"Goals":[{"GoalId":2,"GoalLabel":"Оплата Google WorkSpace","ExpireDate":"2025-09-24T00:00:00Z","GoalTotal":18000,"CurrentValue":1317.3,"SprintTotal":671.14,"SprintIncome":671.14},{"GoalId":3,"GoalLabel":"Годовая бухгалтерия","ExpireDate":"2025-09-13T00:00:00Z","GoalTotal":11900,"CurrentValue":896.69,"SprintTotal":457.11,"SprintIncome":457.11},{"GoalId":4,"GoalLabel":"Патент","ExpireDate":"2025-01-01T00:00:00Z","GoalTotal":19200,"CurrentValue":4651.61,"SprintTotal":2483.87,"SprintIncome":2483.87}],"Child":null}]},{"FundID":3,"FundLabel":"Группа Фондов Стабилизации","Value":3442.7002,"Goals":null,"Child":[{"FundID":9,"FundLabel":"Фикс Клиенских команд","Value":0,"Goals":null,"Child":null},{"FundID":10,"FundLabel":"Фикс Сервисных команд","Value":0,"Goals":null,"Child":null},{"FundID":11,"FundLabel":"Фикс Капитану","Value":0,"Goals":null,"Child":null},{"FundID":12,"FundLabel":"Регулярные платежи","Value":108.89656,"Goals":[{"GoalId":8,"GoalLabel":"Квант","ExpireDate":"2025-09-24T00:00:00Z","GoalTotal":998,"CurrentValue":73.04,"SprintTotal":37.21,"SprintIncome":37.21},{"GoalId":9,"GoalLabel":"Счет Тинькофф","ExpireDate":"2025-09-24T00:00:00Z","GoalTotal":490,"CurrentValue":35.86,"SprintTotal":18.27,"SprintIncome":18.27}],"Child":null},{"FundID":13,"FundLabel":"Известные платежи","Value":3333.8037,"Goals":[{"GoalId":10,"GoalLabel":"Страховые взносы","ExpireDate":"2025-12-01T00:00:00Z","GoalTotal":53658,"CurrentValue":3333.8,"SprintTotal":1693.6,"SprintIncome":1693.6}],"Child":null}]},{"FundID":4,"FundLabel":"Чистая выручка","Value":196691.7,"Goals":null,"Child":[{"FundID":14,"FundLabel":"На ОО (Общее Объединения)","Value":78676.68,"Goals":null,"Child":[{"FundID":17,"FundLabel":"Группа Фондов Устойчивости","Value":3147.0671,"Goals":null,"Child":[{"FundID":27,"FundLabel":"Безопасности","Value":786.7668,"Goals":null,"Child":null},{"FundID":28,"FundLabel":"Тушения пожаров","Value":2360.3003,"Goals":null,"Child":null}]},{"FundID":18,"FundLabel":"Группа Фондов Бонусов","Value":75529.61,"Goals":null,"Child":[{"FundID":29,"FundLabel":"Бонусы Клиентским командам","Value":60423.69,"Goals":null,"Child":null},{"FundID":30,"FundLabel":"Бонусы Сервисным командам","Value":15105.923,"Goals":null,"Child":null}]},{"FundID":19,"FundLabel":"Группа Фондов Достигаторов","Value":0,"Goals":null,"Child":[{"FundID":31,"FundLabel":"Личностные игры","Value":0,"Goals":null,"Child":null},{"FundID":32,"FundLabel":"Квартальных премий по целям","Value":0,"Goals":null,"Child":null},{"FundID":33,"FundLabel":"Бонусы по целям Команды","Value":0,"Goals":null,"Child":null}]},{"FundID":20,"FundLabel":"Группа Фондов Социально-психологические","Value":0,"Goals":null,"Child":[{"FundID":34,"FundLabel":"Высокий уровень энергии","Value":0,"Goals":null,"Child":[{"FundID":38,"FundLabel":"ДМС","Value":0,"Goals":null,"Child":null},{"FundID":39,"FundLabel":"Плюшки Спорт, Обеды, Англ","Value":0,"Goals":null,"Child":null},{"FundID":40,"FundLabel":"Эвенты, тимбилдинг","Value":0,"Goals":null,"Child":null}]},{"FundID":35,"FundLabel":"Развитие таланта","Value":0,"Goals":null,"Child":[{"FundID":41,"FundLabel":"Обучение и развитие","Value":0,"Goals":null,"Child":null},{"FundID":42,"FundLabel":"Тренинги","Value":0,"Goals":null,"Child":null}]},{"FundID":36,"FundLabel":"Спокойствие за разрешение внеплановой ситуации","Value":0,"Goals":null,"Child":[{"FundID":43,"FundLabel":"Свободных финансов","Value":0,"Goals":null,"Child":null}]}]}]},{"FundID":15,"FundLabel":"На ССО (Стратегическом Совете Объединения)","Value":39338.34,"Goals":null,"Child":[{"FundID":21,"FundLabel":"Реинвестирование","Value":15735.336,"Goals":null,"Child":null},{"FundID":22,"FundLabel":"Всем Лидерам поровну","Value":15735.336,"Goals":null,"Child":null},{"FundID":23,"FundLabel":"Со всего объединения Капитану","Value":7867.668,"Goals":null,"Child":null}]},{"FundID":16,"FundLabel":"На СК (Совете Капитанов)","Value":78676.68,"Goals":null,"Child":[{"FundID":24,"FundLabel":"Реинвестирование","Value":15735.336,"Goals":null,"Child":null},{"FundID":25,"FundLabel":"Со всего Общества Капитанам поровну","Value":15735.336,"Goals":null,"Child":null},{"FundID":26,"FundLabel":"С совета на УЕК","Value":47206.008,"Goals":null,"Child":[{"FundID":37,"FundLabel":"Выручка УЕК","Value":47206.008,"Goals":null,"Child":[{"FundID":44,"FundLabel":"Группа Фондов Стабилизации","Value":6623.1055,"Goals":null,"Child":[{"FundID":46,"FundLabel":"Фикс Команд УЕК","Value":0,"Goals":null,"Child":null},{"FundID":47,"FundLabel":"Фикс Капитану УЕК","Value":6623.1055,"Goals":[{"GoalId":12,"GoalLabel":"Оклад Капитану УЕК","ExpireDate":"2024-10-22T21:18:44.2948+03:00","GoalTotal":10000,"CurrentValue":6623.11,"SprintTotal":4019.08,"SprintIncome":4019.08}],"Child":null},{"FundID":48,"FundLabel":"Регулярные платежи","Value":0,"Goals":null,"Child":null},{"FundID":49,"FundLabel":"Известные платежи","Value":0,"Goals":null,"Child":null}]},{"FundID":45,"FundLabel":"Чистые поступления УЕК","Value":40582.906,"Goals":null,"Child":[{"FundID":50,"FundLabel":"На УЕК","Value":20291.453,"Goals":null,"Child":[{"FundID":53,"FundLabel":"Группа Фондов Устойчивости","Value":608.7435,"Goals":null,"Child":[{"FundID":60,"FundLabel":"Тушения пожаров","Value":608.7435,"Goals":null,"Child":null}]},{"FundID":54,"FundLabel":"Группа Фондов Бонусов","Value":19682.709,"Goals":null,"Child":[{"FundID":61,"FundLabel":"Бонусы Командам УЕК","Value":19682.709,"Goals":null,"Child":null}]},{"FundID":55,"FundLabel":"Группа Фондов Достигаторов","Value":0,"Goals":null,"Child":[{"FundID":62,"FundLabel":"Личностные игры","Value":0,"Goals":null,"Child":null},{"FundID":63,"FundLabel":"Квартальных премий по целям","Value":0,"Goals":null,"Child":null},{"FundID":64,"FundLabel":"Бонусы по целям Команды","Value":0,"Goals":null,"Child":null}]},{"FundID":56,"FundLabel":"Группа Фондов Социально-психологические","Value":0,"Goals":null,"Child":[{"FundID":65,"FundLabel":"Высокий уровень энергии","Value":0,"Goals":null,"Child":[{"FundID":73,"FundLabel":"ДМС","Value":0,"Goals":null,"Child":null},{"FundID":74,"FundLabel":"Плюшки Спорт, Обеды, Англ","Value":0,"Goals":null,"Child":null},{"FundID":75,"FundLabel":"Эвенты, тимбилдинг","Value":0,"Goals":null,"Child":null}]},{"FundID":66,"FundLabel":"Развитие таланта","Value":0,"Goals":null,"Child":[{"FundID":76,"FundLabel":"Обучение и развитие","Value":0,"Goals":null,"Child":null},{"FundID":77,"FundLabel":"Тренинги","Value":0,"Goals":null,"Child":null}]},{"FundID":67,"FundLabel":"Спокойствие за разрешение внеплановой ситуации","Value":0,"Goals":null,"Child":[{"FundID":78,"FundLabel":"Свободных финансов","Value":0,"Goals":null,"Child":null}]}]}]},{"FundID":51,"FundLabel":"На Общественные фонды","Value":8116.5815,"Goals":null,"Child":[{"FundID":57,"FundLabel":"Группа Фондов Общеобщественных","Value":405.82907,"Goals":null,"Child":[{"FundID":68,"FundLabel":"Общественных праздников","Value":304.37177,"Goals":null,"Child":null},{"FundID":69,"FundLabel":"Благотворительность","Value":101.45727,"Goals":null,"Child":null}]},{"FundID":58,"FundLabel":"Группа Фондов Достигаторов","Value":7710.7524,"Goals":null,"Child":[{"FundID":70,"FundLabel":"Фантомных Акций","Value":3855.3762,"Goals":null,"Child":null},{"FundID":71,"FundLabel":"Глобальных целей","Value":0,"Goals":null,"Child":null},{"FundID":72,"FundLabel":"Целей ЛЛК","Value":3855.3762,"Goals":null,"Child":null}]}]},{"FundID":52,"FundLabel":"Акционерам","Value":12174.872,"Goals":null,"Child":[{"FundID":59,"FundLabel":"Дивидендов","Value":12174.872,"Goals":null,"Child":null}]}]}]}]}]}]}]}'
  );

  return (obj)
}