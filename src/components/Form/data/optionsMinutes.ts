export const optionsMinutes = [
  { name: "Every minute", value: "*", isUnique: true },
  { name: "Every even minute", value: "*/2", isUnique: true },
  { name: "Every odd minute", value: "1-59/2", isUnique: true },
  { name: "Every 5 minutes", value: "*/5", isUnique: true },
  { name: "Every 10 minutes", value: "*/10", isUnique: true },
  { name: "Every 15 minutes", value: "*/15", isUnique: true },
  { name: "Every 30 minutes", value: "*/30", isUnique: true },

  ...Array.from({ length: 60 }, (_, i) => ({
    name: i.toString(),
    value: i.toString(),
    isUnique: false,
  })),
];
