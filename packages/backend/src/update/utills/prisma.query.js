const details = {
  take: 10,
  orderBy: {
    time: 'desc',
  },
};

const restricted = {
  ...details,
  select: {
    id: true,
    title: true,
    timeString: true,
    description: true,
  },
};

export default { details, restricted };
