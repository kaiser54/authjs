export const  get_future_time = (hours) => {
  // Get the current timestamp in milliseconds
  const now = Date.now();

  // Calculate the future time by adding hours (converted to milliseconds)
  const futureTime = now + (hours * 60 * 60 * 1000);

  return futureTime;
}
