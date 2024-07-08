const Sidebar = () => {
  return (
    <aside className="w-64 bg-white h-full pr-2 pt-16 border-r-2 border-gray-200">
      <nav className="space-y-4">
        <a
          href="#"
          className="block py-4 px-4 rounded-r-full text-gray-500 font-bold hover:bg-gray-200"
        >
          Dashboard
        </a>
        <a
          href="#"
          className="block py-4 px-4 rounded-r-full text-gray-500 font-bold hover:bg-gray-200"
        >
          Skill Test
        </a>
        <a
          href="#"
          className="block py-4 px-4 rounded-r-full text-gray-500 font-bold hover:bg-gray-200"
        >
          Internship
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
