import React, { useEffect,useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
 
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
 
export default function NavbarForDropdownWithMultipleLanguages({selectedNames}) {
  const [openMenu, setOpenMenu] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const [lang, setLang] = useState("English");
 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
  useEffect(()=>{
           console.log("drop down language");
  },[]);
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center">
          {selectedNames.firstNameLink}
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center">
        {selectedNames.secondNameLink}
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center">
        {selectedNames.thirdNameLink}
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center">
        {selectedNames.fourthNameLink}
        </a>
      </Typography>
    </ul>
  );
 
  const countries = [
    {
      flag: "🇺🇸",
      name: "English",
    },
    {
      flag: "🇪🇸",
      name: "Spain",
    },
    {
      flag: "🇫🇷",
      name: "France",
    },
    {
      flag: "🇩🇪",
      name: "Germany",
    },
  ];
 
  return (
    <Navbar className="!bg-sky-300"  fullWidth={true}>
      <div style={{width:"100vw"}} className="flex w-full mr-6 px-6  items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
            {selectedNames.brandName}
        </Typography>
        <div className="mr-4 hidden lg:block">{navList}</div>
        <div className="hidden flex-wrap items-center gap-2 lg:flex">
          <Button variant="gradient" size="sm">
            join
          </Button>
          <Menu open={openMenu} handler={setOpenMenu}>
            <MenuHandler>
              <Button
                size="sm"
                variant="outlined"
                className="hidden items-center gap-2 lg:flex"
              >
                <span className="h-min text-base leading-none">
                  {countries.find(({ name }) => name === lang)?.flag}
                </span>
                {countries.find(({ name }) => name === lang)?.name}
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${
                    openMenu ? "rotate-180" : ""
                  }`}
                />
              </Button>
            </MenuHandler>
            <MenuList className="hidden max-h-72 w-20 lg:block">
              {countries.map(({ name, flag }) => (
                <MenuItem
                  key={name}
                  className="flex items-center gap-2"
                  onClick={() => setLang(name)}
                >
                  {flag} {name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </div>
        <IconButton
          variant="text"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        {navList}
        <div className="flex w-full flex-nowrap items-center gap-x-4 lg:hidden">
          <Button variant="gradient" size="sm" fullWidth>
            join
          </Button>
          <Menu open={openMenu} handler={setOpenMenu}>
            <MenuHandler>
              <Button
                fullWidth
                size="sm"
                variant="outlined"
                className="flex items-center justify-center gap-2 lg:hidden"
              >
                🇺🇸 English{" "}
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`w-3.h-3.5 h-3.5 transition-transform ${
                    openMenu ? "rotate-180" : ""
                  }`}
                />
              </Button>
            </MenuHandler>
            <MenuList className="block max-h-72 w-20 lg:hidden">
              {countries.map(({ name, flag }) => (
                <MenuItem key={name} className="flex items-center gap-2">
                  {flag} {name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </div>
      </Collapse>
    </Navbar>
  );
}