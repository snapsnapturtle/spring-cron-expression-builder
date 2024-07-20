export const optionsDays = [
  { name: "Every day", value: "*", isUnique: true },
  { name: "Every even day", value: "*/2", isUnique: true },
  { name: "Every odd day", value: "1-31/2", isUnique: true },
  { name: "Every 5th day of the month", value: "*/5", isUnique: true },
  { name: "Every 10th day of the month", value: "*/10", isUnique: true },

  ...Array.from({ length: 31 }, (_, i) => ({
    name: i.toString(),
    value: i.toString(),
    isUnique: false,
  })),
];
