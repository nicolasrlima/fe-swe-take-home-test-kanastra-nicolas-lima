import type { CharactersListItemProps } from "./characters-list-item.types";

export const CharactersListItem = ({
  title,
  thumbnail,
  onClick,
}: CharactersListItemProps) => {
  return (
    <button
      className="border-slate-200 border-solid border-[2px] shadow-md rounded-lg h-fit flex flex-col hover:border-blue-500 focus-visible:border-blue-500 outline-none w-32"
      type="button"
      onClick={onClick}
    >
      <img src={thumbnail} alt={title} className="h-32 w-full rounded-t-md" />
      <span
        className="font-semibold p-2 w-full text-ellipsis text-nowrap overflow-hidden"
        title={title}
      >
        {title}
      </span>
    </button>
  );
};
