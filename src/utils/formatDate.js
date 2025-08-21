export function formatDate(dateStr) {
  if (!dateStr) return "";
  const options = { year: "numeric", month: "long" };
  return new Date(dateStr).toLocaleDateString(undefined, options);
}
