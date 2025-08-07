const formatDate = (date: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
  };
  return new Date(date).toLocaleDateString("en-US", options);
};

export const formatDateRange = (
  startDate: string,
  endDate?: string
): string => {
  const start = formatDate(startDate);
  if (!endDate) return start;

  const end = formatDate(endDate);
  return `${start} - ${end}`;
};

export const formatExperience = (experience: {
  startDate: string;
  endDate?: string;
}): string => {
  return formatDateRange(experience.startDate, experience.endDate);
};
