export const getSearchParam = (key: string): string | undefined => {
  const search = new URLSearchParams(window.location.search);
  return search.get(key);
};

export const getSearchParams = () => {
  return Array.from(new URLSearchParams(window.location.search).entries()).reduce<Record<string, string>>(
    (result, [key, value]) => {
      result[key] = value;
      return result;
    },
    {},
  );
};
