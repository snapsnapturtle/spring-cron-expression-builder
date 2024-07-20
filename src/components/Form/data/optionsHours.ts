export const optionsHours = [
  { name: "Every hour", value: "*", isUnique: true },
  { name: "Every even hour", value: "*/2", isUnique: true },
  { name: "Every odd hour", value: "1-11/2", isUnique: true },
  { name: "Every 3 hours", value: "*/3", isUnique: true },
  { name: "Every 4 hours", value: "*/4", isUnique: true },
  { name: "Every 6 hours", value: "*/6", isUnique: true },

  ...Array.from({ length: 24 }, (_, i) => ({
    name: i.toString(),
    value: i.toString(),
    isUnique: false,
  })),
];
