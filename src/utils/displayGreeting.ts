export const displayGreeting = () => {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  let greeting: string;

  if (currentHour < 12) {
    greeting = "Good morning";
  } else if (currentHour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  return greeting;
};
