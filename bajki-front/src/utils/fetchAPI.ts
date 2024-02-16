export const fetchAPI = async <T>({
  url,
  req,
  method,
}: {
  url: string;
  req: T;
  method?: string;
}) =>
  await fetch(url, {
    method: method || "GET",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(req),
  });
