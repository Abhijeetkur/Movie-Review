import ProfileMenu from "./profile";
import SearchBar from "./searchbar";
import Logo from "./logo";
import VideoPlayer from "../VideoPlayer/videoplayer";

function Nav() {
  return (
    <nav dark="true" className="bg-[#121212] z-40">
      <div className="relative flex h-16 items-center space-x-80">
        {/* Logo */}
        <Logo/>

        {/* Search Bar */}
        <SearchBar/>

        {/* Profile Menu */}
        {/* <ProfileMenu/> */}
        
      </div>
    </nav>
  );
}

export default Nav;
