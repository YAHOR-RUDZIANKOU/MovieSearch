type ListProps<T> = {
  items: T[];
  renderItems: (item: T) => React.ReactNode;
};

export function List<T>({ items, renderItems }: ListProps<T>) {
  if (!items || items.length === 0) return null;
  return <>{items.map((item) => renderItems(item))}</>;
}