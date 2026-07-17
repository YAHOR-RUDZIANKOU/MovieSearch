export const List = ({ items, renderItems }) => {
  if (!items || items.length === 0) return null;
  return <>{items.map((item) => renderItems(item))}</>;
};
