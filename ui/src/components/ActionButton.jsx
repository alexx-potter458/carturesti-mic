const ActionButton = ({ text, onAction, isTransparent = false }) => (
  <button
    type="button"
    onClick={onAction}
    className={` text-white px-4 py-2 rounded-md focus:outline-none ${
      isTransparent
        ? "bg-transparent hover:bg-gray-700"
        : " bg-gray-800 hover:bg-gray-900"
    }`}
  >
    {`${text}`}
  </button>
);
export { ActionButton };
