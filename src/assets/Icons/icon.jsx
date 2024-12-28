import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import {
  FaShippingFast,
  FaShieldAlt,
  FaUserClock,
  FaHandPaper,
  FaPalette,
  FaStar,
  FaCog,
  FaRegHeart,
  FaMinus,
  FaPlus,
  FaHome,
  FaMapMarkedAlt,
  FaTimes
} from "react-icons/fa";

import { FaPeopleCarryBox } from "react-icons/fa6";
import { MdAccountCircle, MdDeleteForever, MdPayment } from "react-icons/md";
import { IoBagHandle, IoBagHandleOutline, IoLogOutOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const ICONS = {
  BARS: Bars3Icon,
  SEARCH: MagnifyingGlassIcon,
  SHOPPINGBAG: IoBagHandleOutline,
  XMARK: XMarkIcon,
  FORWARD: IoIosArrowForward,
  BACKWARD: IoIosArrowBack,
  INSTAGRAM: Instagram,
  FACEBOOK: Facebook,
  LINKEDIN: LinkedIn,
  TWITTER: Twitter,
  SHIPPING: FaShippingFast,
  SHIELD: FaShieldAlt,
  PEOPLE_BOX: FaPeopleCarryBox,
  USER_CLOCK: FaUserClock,
  HAND: FaHandPaper,
  STAR: FaStar,
  PALETTE: FaPalette,
  SETTING: FaCog,
  DELETE: MdDeleteForever,
  BAG: IoBagHandle,
  HEART: FaRegHeart,
  PLUS: FaPlus,
  MINUS: FaMinus,
  HOME: FaHome,
  CART: AiOutlineShoppingCart,
  ACCOUNT: MdAccountCircle,
  PAYMENT: MdPayment,
  LOGOUT: IoLogOutOutline,
  LOCATION: FaMapMarkedAlt,
  CROSS: FaTimes,
};
