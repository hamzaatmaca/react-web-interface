const teamServices = () => {
  const userPhotos = [
    "person.png",
    "person.png",
    "person.png",
    "person.png",
    "person.png",
    "person.png",
  ];

  const userText = [
    "Hamburger Menu",
    "Kebap Menu",
    "Pide Menu",
    "Hamburger Menu",
    "Kebap Menu",
    "Pide Menu",
  ];
  const userName = [
    "Person1",
    "Person6",
    "Person2",
    "Person3",
    "Person4",
    "Person5",
  ];
  const userJob = [
    "Chef",
    "Accounter",
    "Cleaner",
    "Waiter",
    "Waiter",
    "Waiter",
  ];

  let teamPayload = {
    userPhotos: userPhotos,
    userName: userName,
    userText: userText,
    userJob: userJob,
  };

  return teamPayload;
};

export default teamServices;
