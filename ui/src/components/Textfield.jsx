const Texfiled = ({ placeholder, type, icon, onChange }) => (
  <div class="relative">
    <input
      type={type}
      onChange={onChange}
      class="peer py-3 px-4 ps-11 block w-full dark:bg-[#2a2a2a] border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"
      placeholder={placeholder}
    />
    <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
      <img src={icon} className="flex-shrink-0 w-4 h-4 text-gray-500" />
    </div>
  </div>
);

export { Texfiled };
