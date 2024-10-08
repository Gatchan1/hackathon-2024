const baseUrl = "https://bored-api.appbrewery.com/";

export const getRandomActivity = async () => {
  const response = await fetch(baseUrl + "random");
  const activity = await response.json();
  return activity.activity;
};

export const getRandomFilteredActivity = async (type) => {
  const response = await fetch(baseUrl + "filter?type=" + type);
  const activities = await response.json(); // array of activities
  const activity = activities[Math.floor(Math.random() * activities.length)];
  return activity.activity;
};

// A CORS error seems to appear.
// That shouldn't be the case... it's the API's fault though!