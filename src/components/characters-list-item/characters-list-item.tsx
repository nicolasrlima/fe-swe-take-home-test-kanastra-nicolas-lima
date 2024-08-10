import type { CharactersListItemProps } from "./characters-list-item.types";

export const CharactersListItem = ({
  comicsAvailable,
  seriesAvailable,
  storiesAvailable,
  title,
  thumbnail,
}: CharactersListItemProps) => {
  return (
    <li className="items-center h-16 p-2 bg-slate-200 rounded-lg justify-between grid grid-cols-[minmax(200px,_1fr)_minmax(200px,_1fr)_1fr_1fr] text-nowrap text-ellipsis gap-4 [&_span]:overflow-hidden [&_span]:text-ellipsis">
      <div className="flex gap-1 items-center">
        <img src={thumbnail} alt={title} className="h-10 w-10 rounded-full" />
        <span className="font-semibold " title={title}>
          {title}
        </span>
      </div>
      <span className="text-sm text-gray-600">
        Comics |{" "}
        <span className="text-gray-800 font-semibold">{comicsAvailable}</span>
      </span>
      <span className="text-sm text-gray-600">
        Series |{" "}
        <span className="text-gray-800 font-semibold">{seriesAvailable}</span>
      </span>
      <span className="text-sm text-gray-600">
        Stories |{" "}
        <span className="text-gray-800 font-semibold">{storiesAvailable}</span>
      </span>
    </li>
  );
};
