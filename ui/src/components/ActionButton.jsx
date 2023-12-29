const ActionButton = ({
  text,
  onAction,
  isTransparent = false,
  slim = false,
}) => (
  <button
    type="button"
    onClick={onAction}
    className={` text-white ${
      slim ? "p-2" : "p-4"
    } rounded-2xl focus:outline-none ${
      isTransparent
        ? "bg-transparent hover:dark:hover:bg-black"
        : " bg-slate-800  hover:bg-black"
    }`}
  >
    {`${text}`}
  </button>
);
export { ActionButton };
