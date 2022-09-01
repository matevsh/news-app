export const statusMessage = (count, duration) => {
  const messages = [
    `Pobrano ${count} rekordów 🐠`,
    'nie znaleziono nowych artykułów 🤐',
  ];

  return {
    duration: `🚀 Czas pobierania ${duration}s`,
    message: count ? messages[0] : messages[1],
  };
};
