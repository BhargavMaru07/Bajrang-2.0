import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import {
  CameraAltOutlined,
  EditOutlined,
  Facebook,
  Instagram,
  LinkedIn,
  SaveOutlined,
  Twitter,
} from "@mui/icons-material";
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
  FaTimes,
  FaPenSquare,
  FaHeart,
  FaTrash,
  FaUsers,
  FaPlay,
  FaPause,
} from "react-icons/fa";
import { BsFunnelFill } from "react-icons/bs";
import { FaPeopleCarryBox } from "react-icons/fa6";
import { MdAccountCircle, MdDeleteForever, MdPayment } from "react-icons/md";
import {
  IoBagHandle,
  IoBagHandleOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiViewGrid } from "react-icons/hi";
import CloseIcon from "@mui/icons-material/Close";

import { TbMessageChatbotFilled } from "react-icons/tb";
import { CiLocationArrow1 } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

export const ICONS = {
  //mui : icons material
  BARS: Bars3Icon,
  SEARCH: MagnifyingGlassIcon,
  CLOSE: CloseIcon,
  SAVE: SaveOutlined,
  EDITADMIN: EditOutlined,
  INSTAGRAM: Instagram,
  FACEBOOK: Facebook,
  LINKEDIN: LinkedIn,
  TWITTER: Twitter,
  XMARK: XMarkIcon,
  CAMERA: CameraAltOutlined,
  PLAY: FaPlay,
  PAUSE: FaPause,
  //react icons :
  FORWARD: IoIosArrowForward,
  BACKWARD: IoIosArrowBack,
  SHOPPINGBAG: IoBagHandleOutline,
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
  FULLHEART: FaHeart,
  PLUS: FaPlus,
  MINUS: FaMinus,
  HOME: FaHome,
  CART: AiOutlineShoppingCart,
  ACCOUNT: MdAccountCircle,
  PAYMENT: MdPayment,
  LOGOUT: IoLogOutOutline,
  LOCATION: FaMapMarkedAlt,
  CROSS: FaTimes,
  EDIT: FaPenSquare,
  DELETEICON: FaTrash,
  USERS: FaUsers,
  GRID: HiViewGrid,
  FILTER: BsFunnelFill,
  //CHATBOT
  CHAT_BOT: TbMessageChatbotFilled,
  SEND: CiLocationArrow1,
  DOWN_ARROW: MdOutlineKeyboardArrowDown,
  MSG: FaMessage,
  CLOSE_CHAT: IoMdClose,
};
