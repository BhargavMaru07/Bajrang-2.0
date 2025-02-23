"use client";
import React, { Fragment, useState } from "react";
import logo from "../assets/Logo/logo.png";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import { ICONS } from "../assets/Icons/icon";
import { Link } from "react-router-dom";
import { useAuthContext } from "../Context/AuthContextModified";
import { useCartContext } from "../Context/CartContext";

const navigation = {
  categories: [
    {
      id: "category",
      name: "Category",
      featured: [
        {
          name: "Latest Arrivals",
          path: "/",
          imageSrc:
            "https://www.shopolics.com/uploads/images/medium/Set-of-2-Handmade-Decorative-Handing-Beaded-Latkans-with-Petunia-Pom-Pom-0056.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Popular Products",
          path: "/",
          imageSrc: "https://m.media-amazon.com/images/I/81Z9DlqdRCL.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "latkan_category",
          name: "Latkan Categories",
          items: [
            { name: "Bridal Latkan", href: "#" },
            { name: "Fancy Latkan", href: "#" },
            { name: "Simple Latkan", href: "#" },
            { name: "Custom Latkan", href: "#" },
            { name: "Handmade Latkan", href: "#" },
            { name: "Designer Latkan", href: "#" },
            { name: "Kidswear Latkan", href: "#" },
            { name: "Traditional Latkan", href: "#" },
          ],
        },
        {
          id: "latkan_products",
          name: "Latkan Products",
          items: [
            { name: "Hodi Latkan", href: "#" },
            { name: "Fancy Tassels", href: "#" },
            { name: "Jaripatty Designs", href: "#" },
            { name: "Shivling Latkan", href: "#" },
            { name: "Kalktta Topa", href: "#" },
            { name: "Spring Tassels", href: "#" },
            { name: "Metallic Latkan", href: "#" },
          ],
        },
        {
          id: "latkan_styles",
          name: "Latkan Styles",
          items: [
            { name: "Threadwork Latkan", href: "#" },
            { name: "Beaded Latkan", href: "#" },
            { name: "Pom-Pom Latkan", href: "#" },
            { name: "Sequin Latkan", href: "#" },
            { name: "Tassel Latkan", href: "#" },
            { name: "Mirror Work Latkan", href: "#" },
            { name: "Embroidery Latkan", href: "#" },
            { name: "Pearl Latkan", href: "#" },
          ],
        },
      ],
    },
    // {
    //   id: "men",
    //   name: "Men",
    //   featured: [
    //     {
    //       name: "New Arrivals",
    //       href: "#",
    //       imageSrc:
    //         "https://tailwindui.com/plus/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
    //       imageAlt:
    //         "Drawstring top with elastic loop closure and textured interior padding.",
    //     },
    //     {
    //       name: "Artwork Tees",
    //       href: "#",
    //       imageSrc:
    //         "https://tailwindui.com/plus/img/ecommerce-images/category-page-02-image-card-06.jpg",
    //       imageAlt:
    //         "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
    //     },
    //   ],
    //   sections: [
    //     {
    //       id: "clothing",
    //       name: "Clothing",
    //       items: [
    //         { name: "Tops", href: "#" },
    //         { name: "Pants", href: "#" },
    //         { name: "Sweaters", href: "#" },
    //         { name: "T-Shirts", href: "#" },
    //         { name: "Jackets", href: "#" },
    //         { name: "Activewear", href: "#" },
    //         { name: "Browse All", href: "#" },
    //       ],
    //     },
    //     {
    //       id: "accessories",
    //       name: "Accessories",
    //       items: [
    //         { name: "Watches", href: "#" },
    //         { name: "Wallets", href: "#" },
    //         { name: "Bags", href: "#" },
    //         { name: "Sunglasses", href: "#" },
    //         { name: "Hats", href: "#" },
    //         { name: "Belts", href: "#" },
    //       ],
    //     },
    //     {
    //       id: "brands",
    //       name: "Brands",
    //       items: [
    //         { name: "Re-Arranged", href: "#" },
    //         { name: "Counterfeit", href: "#" },
    //         { name: "Full Nelson", href: "#" },
    //         { name: "My Way", href: "#" },
    //       ],
    //     },
    //   ],
    // },
  ],
  pages: [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About us", path: "/about" },
    { name: "Blogs", path: "/blog" },
  ],
};

const Navbar = () => {
  const { isLoggedIn, user } = useAuthContext();
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Dialog
        open={open}
        onClose={setOpen}
        className="relative z-[99] lg:hidden"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <div className="flex px-4 pt-5 pb-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative inline-flex items-center justify-center p-2 -m-2 text-gray-400 rounded-md"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <ICONS.XMARK aria-hidden="true" className="size-6" />
              </button>
            </div>

            {/* Links */}
            <TabGroup className="mt-2">
              <div className="border-b border-gray-200">
                {/* <TabList className="flex px-4 -mb-px space-x-8">
                  {navigation.categories.map((category) => (
                    <Tab
                      key={category.name}
                      className="flex-1 text-start whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900 data-[selected]:border-indigo-600 data-[selected]:text-indigo-600"
                    >
                      {category.name}
                    </Tab>
                  ))}
                </TabList> */}
              </div>
              <TabPanels as={Fragment}>
                {navigation.categories.map((category) => (
                  <TabPanel
                    key={category.name}
                    className="px-4 pt-10 pb-8 space-y-10"
                  >
                    <div className="grid grid-cols-2 gap-x-4">
                      {category.featured.map((item) => (
                        <div key={item.name} className="relative text-sm group">
                          <img
                            alt={item.imageAlt}
                            src={item.imageSrc}
                            className="object-cover w-full bg-gray-100 rounded-lg aspect-square group-hover:opacity-75"
                          />
                          <Link
                            to={item.path}
                            className="block mt-6 font-medium text-gray-900"
                          >
                            <span
                              aria-hidden="true"
                              className="absolute inset-0 z-10"
                            />
                            {item.name}
                          </Link>
                          <p aria-hidden="true" className="mt-1">
                            Shop now
                          </p>
                        </div>
                      ))}
                    </div>
                    {category.sections.map((section) => (
                      <div key={section.name}>
                        <p
                          id={`${category.id}-${section.id}-heading-mobile`}
                          className="font-medium text-gray-900"
                        >
                          {section.name}
                        </p>
                        <ul
                          role="list"
                          aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                          className="flex flex-col mt-6 space-y-6"
                        >
                          {section.items.map((item) => (
                            <li key={item.name} className="flow-root">
                              <Link
                                href={item.href}
                                className="block p-2 -m-2 text-gray-500"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>

            <div className="px-4 py-6 space-y-6 border-t border-gray-200">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <Link
                    to={page.path}
                    onClick={() => setOpen(false)}
                    className="block p-2 -m-2 font-medium text-gray-900"
                  >
                    {page.name}
                  </Link>
                </div>
              ))}
            </div>

            <div className="px-4 py-6 space-y-6 border-t border-gray-200">
              {isLoggedIn ? (
                <>
                  <div className="flow-root">
                    <Link
                      to="/logout"
                      className="block p-2 -m-2 font-medium text-gray-900"
                    >
                      Sign out
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <div className="flow-root">
                    <Link
                      to="/login"
                      onClick={() => setOpen(false)}
                      className="block p-2 -m-2 font-medium text-gray-900"
                    >
                      Sign in
                    </Link>
                  </div>
                  <div className="flow-root">
                    <Link
                      to="/register"
                      onClick={() => setOpen(false)}
                      className="block p-2 -m-2 font-medium text-gray-900"
                    >
                      Create account
                    </Link>
                  </div>
                </>
              )}
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative bg-white">
        <p className="flex items-center justify-center h-10 px-4 text-sm font-medium text-white bg-btn sm:px-6 lg:px-8">
          25% off with COD Available | Free Delivery
        </p>

        <nav
          aria-label="Top"
          className="h-20 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex items-center !justify-between h-16">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative p-2 text-gray-400 bg-white rounded-md lg:hidden"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <ICONS.BARS aria-hidden="true" className="size-6" />
              </button>

              {/* Logo */}
              <div className="flex ml-16 lg:ml-0">
                <Link to="/">
                  <span className="sr-only">Your Company</span>
                  <img alt="logo" src={logo} className="w-auto h-12" />
                </Link>
              </div>

              {/* Flyout menus */}
              <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch z-[999]">
                <div className="flex h-full space-x-8">
                  {navigation.pages.map((page) => (
                    <Link
                      key={page.name}
                      to={page.path}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </Link>
                  ))}
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      <div className="relative flex">
                        <PopoverButton className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-[open]:border-indigo-600 data-[open]:text-indigo-600">
                          {category.name}
                        </PopoverButton>
                      </div>

                      <PopoverPanel
                        transition
                        className="absolute inset-x-0 top-full text-sm text-gray-500 transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                      >
                        {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                        <div
                          aria-hidden="true"
                          className="absolute inset-0 bg-white shadow top-1/2"
                        />

                        <div className="relative bg-white">
                          <div className="px-8 mx-auto max-w-7xl">
                            <div className="grid grid-cols-2 py-16 gap-x-8 gap-y-10">
                              <div className="grid grid-cols-2 col-start-2 gap-x-8">
                                {category.featured.map((item) => (
                                  <div
                                    key={item.name}
                                    className="relative text-base group sm:text-sm"
                                  >
                                    <img
                                      alt={item.imageAlt}
                                      src={item.imageSrc}
                                      className="object-cover w-full bg-gray-100 rounded-lg aspect-square group-hover:opacity-75"
                                    />
                                    <Link
                                      to={item.path}
                                      className="block mt-6 font-medium text-gray-900"
                                    >
                                      <span
                                        aria-hidden="true"
                                        className="absolute inset-0 z-10"
                                      />
                                      {item.name}
                                    </Link>
                                    <p aria-hidden="true" className="mt-1">
                                      Shop now
                                    </p>
                                  </div>
                                ))}
                              </div>
                              <div className="grid grid-cols-3 row-start-1 text-sm gap-x-8 gap-y-10">
                                {category.sections.map((section) => (
                                  <div key={section.name}>
                                    <p
                                      id={`${section.name}-heading`}
                                      className="font-medium text-gray-900"
                                    >
                                      {section.name}
                                    </p>
                                    <ul
                                      role="list"
                                      aria-labelledby={`${section.name}-heading`}
                                      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                    >
                                      {section.items.map((item) => (
                                        <li key={item.name} className="flex">
                                          <Link
                                            href={item.href}
                                            className="hover:text-gray-800"
                                          >
                                            {item.name}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </PopoverPanel>
                    </Popover>
                  ))}
                </div>
              </PopoverGroup>

              <div className="flex items-center justify-end m-0">
                {/* Search */}
                <div className="flex rounded-full lg:ml-6 bg-bg hover:cursor-pointer">
                  <Link
                    to="/search"
                    className="p-2 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Search</span>
                    <ICONS.SEARCH aria-hidden="true" className="size-6" />
                  </Link>
                </div>
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton className="relative flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        alt=""
                        src={
                          isLoggedIn
                            ? user.profileImage
                            : `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`
                        }
                        className="rounded-full size-8"
                      />
                    </MenuButton>
                  </div>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in cursor-pointer"
                  >
                    {isLoggedIn ? (
                      <>
                        <MenuItem>
                          <div className="data-[focus]:bg-gray-100 data-[focus]:outline-none">
                            <Link
                              to="/profile"
                              className="block px-4 py-2 text-sm text-text data-[focus]:bg-gray-100 data-[focus]:outline-none"
                            >
                              Hello, <br />
                              {user.name}
                            </Link>
                            <hr />
                          </div>
                        </MenuItem>
                        <MenuItem>
                          <div className="text-text data-[focus]:bg-gray-100 data-[focus]:outline-none flex items-center justify-between">
                            <Link
                              to="/profile"
                              className="block px-4 py-2 text-sm "
                            >
                              My Profile
                            </Link>
                            <ICONS.ACCOUNT size={25} className="mr-3" />
                          </div>
                        </MenuItem>
                        <MenuItem>
                          <div className="text-text data-[focus]:bg-gray-100 data-[focus]:outline-none flex items-center justify-between">
                            <Link
                              to="/cart"
                              className="block px-4 py-2 text-sm text-text data-[focus]:bg-gray-100 data-[focus]:outline-none"
                            >
                              My Cart
                            </Link>
                            <ICONS.CART size={25} className="mr-3" />
                          </div>
                        </MenuItem>
                        <MenuItem>
                          <div className="text-text data-[focus]:bg-gray-100 data-[focus]:outline-none flex items-center justify-between">
                            <Link
                              to="/orders"
                              className="block px-4 py-2 text-sm text-text data-[focus]:bg-gray-100 data-[focus]:outline-none"
                            >
                              My Orders
                            </Link>
                            <ICONS.SHOPPINGBAG size={25} className="mr-3" />
                          </div>
                        </MenuItem>
                        <MenuItem>
                          <div className="text-text data-[focus]:bg-gray-100 data-[focus]:outline-none flex items-center justify-between">
                            <Link
                              to="/logout"
                              className="block px-4 py-2 text-sm text-text data-[focus]:bg-gray-100 data-[focus]:outline-none"
                            >
                              Sign out
                            </Link>
                            <ICONS.LOGOUT size={25} className="mr-3" />
                          </div>
                        </MenuItem>
                      </>
                    ) : (
                      <>
                        <MenuItem>
                          <div className="data-[focus]:bg-gray-100 data-[focus]:outline-none">
                            <Link
                              to="/login"
                              className="block px-4 py-2 text-sm text-gray-700 "
                            >
                              Log In
                            </Link>
                          </div>
                        </MenuItem>
                      </>
                    )}
                  </MenuItems>
                </Menu>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
