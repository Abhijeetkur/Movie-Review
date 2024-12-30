import { useState, useRef, useEffect } from "react";

function ProfileMenu() {
  const [isOpen, setIsOpen] = useState(false); // State to toggle the menu
  const menuRef = useRef(null); // Ref for the menu dropdown
  const buttonRef = useRef(null); // Ref for the button

  // Toggle the menu on button click
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Close the menu if clicked outside the button or menu
  const handleClickOutside = (event) => {
    if (
      menuRef.current && !menuRef.current.contains(event.target) &&
      buttonRef.current && !buttonRef.current.contains(event.target)
    ) {
      setIsOpen(false); // Close the menu
    }
  };

  // Add event listener to detect clicks outside the menu and button
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative ml-3">
      <div>
        <button
          ref={buttonRef} // Assign ref to the button
          type="button"
          onClick={toggleMenu}
          className={`relative flex rounded-full bg-gray-800 text-sm `}
          id="user-menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <span className="absolute -inset-1.5"></span>
          <span className="sr-only">Open user menu</span>
          <img
            className="size-8 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </button>
      </div>

      {isOpen && (
        <div
          ref={menuRef} // Assign ref to the menu
          className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-500 py-1 shadow-lg ring-1 ring-black/5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu-button"
          tabIndex="-1"
        >
          <a
            href="#"
            className="flex items-center px-4 py-2 text-sm text-white font-semibold"
            role="menuitem"
            tabIndex="-1"
            id="user-menu-item-0"
          >
            <svg
              className="w-4 h-4 text-gray-800 dark:text-white mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20"
            >
              <path d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z" />
            </svg>
            Profile
          </a>

          <a
            href="#"
            className="flex items-center px-4 py-2 text-sm text-white font-semibold"
            role="menuitem"
            tabIndex="-1"
            id="user-menu-item-1"
          >
            <svg
              className="w-4 h-4 text-gray-800 dark:text-white mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20"
            >
              <path d="M5 11.424V1a1 1 0 1 0-2 0v10.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.228 3.228 0 0 0 0-6.152ZM19.25 14.5A3.243 3.243 0 0 0 17 11.424V1a1 1 0 0 0-2 0v10.424a3.227 3.227 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.243 3.243 0 0 0 2.25-3.076Zm-6-9A3.243 3.243 0 0 0 11 2.424V1a1 1 0 0 0-2 0v1.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0V8.576A3.243 3.243 0 0 0 13.25 5.5Z" />
            </svg>
            Settings
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-sm text-white font-semibold"
            role="menuitem"
            tabIndex="-1"
            id="user-menu-item-2"
          >
            <svg
              class="w-4 h-4 text-gray-800 dark:text-white mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3"
              />
            </svg>
            Sign out
          </a>
        </div>
      )}
    </div>
  );
}

export default ProfileMenu;
