export function formatUnixTime(unixTimestamp: number): string {
  const date = new Date(unixTimestamp * 1000); // Convert Unix timestamp to milliseconds

  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  return new Intl.DateTimeFormat("fi", options).format(date);
}
