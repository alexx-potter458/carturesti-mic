const ActionButton = ({ text, onAction, isTransparent = false }) => (
  <button
    type="button"
    onClick={onAction}
    className={` text-white p-4 rounded-2xl focus:outline-none ${
      isTransparent
        ? "bg-transparent hover:dark:hover:bg-black"
        : " bg-slate-600 dark:bg-slate-800  hover:dark:hover:bg-black"
    }`}
  >
    {`${text}`}
  </button>
);
export { ActionButton };
