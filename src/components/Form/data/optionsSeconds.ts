export const optionsSeconds = [
  { name: "Every second", value: "*", isUnique: true },
  { name: "Every even second", value: "*/2", isUnique: true },
  { name: "Every odd second", value: "1-59/2", isUnique: true },
  { name: "Every 5 seconds", value: "*/5", isUnique: true },
  { name: "Every 10 seconds", value: "*/10", isUnique: true },
  { name: "Every 15 seconds", value: "*/15", isUnique: true },
  { name: "Every 30 seconds", value: "*/30", isUnique: true },

  ...Array.from({ length: 60 }, (_, i) => ({
    name: i.toString(),
    value: i.toString(),
    isUnique: false,
  })),
];
