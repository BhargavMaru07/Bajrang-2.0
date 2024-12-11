export const sortOptions = [
  { name: "Most Popular", value: "most", href: "#", current: true },
  { name: "Best Rating", value: "rating", href: "#", current: false },
  { name: "Newest", value: "new", href: "#", current: false },
  { name: "A to Z", value: "a-z", href: "#", current: false },
  { name: "Z to A", value: "z-a", href: "#", current: false },
  { name: "Price: Low to High", value: "lowest", href: "#", current: false },
  { name: "Price: High to Low", value: "highest", href: "#", current: false },
];

export const subCategories = [
  { id: "title", value: "all", checked: true, label: "All" },
  { id: "title", value: "hodi", checked: false, label: "Hodi" },
  { id: "title", value: "fancy", checked: false, label: "Fancy" },
  { id: "title", value: "jaripatty", checked: false, label: "Jaripatty" },
  { id: "title", value: "shivling", checked: false, label: "Shivling" },
  {
    id: "title",
    value: "kalktta topa",
    checked: false,
    label: "Kalktta Topa",
  },
  { id: "title", value: "spring", checked: false, label: "Spring" },
];

export const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "all", label: "ALL", checked: true },
      { value: "#000000", label: "Black", checked: false },
      { value: "#A70F2E", label: "Madder", checked: false },
      { value: "#080812", label: "Rich black", checked: false },
      { value: "#152131", label: "Oxford blue", checked: false },
      { value: "#C16D59", label: "Brown sugar", checked: false },
      { value: "#5A644D", label: "Ebony", checked: false },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "all", label: "All", checked: true },
      { value: "bridal_latkan", label: "Bridal Latkan", checked: false },
      { value: "fancy_latkan", label: "Fancy Latkan", checked: false },
      {
        value: "traditional_latkan",
        label: "Traditional Latkan",
        checked: false,
      },
      { value: "simple_latkan", label: "Simple Latkan", checked: false },
      { value: "handmade_latkan", label: "Handmade Latkan", checked: false },
      { value: "designer_latkan", label: "Designer Latkan", checked: false },
      { value: "kidswear_latkan", label: "Kidswear Latkan", checked: false },
      { value: "custom_latkan", label: "Custom Latkan", checked: false },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "2l", label: "2L", checked: true },
      { value: "6l", label: "6L", checked: false },
      { value: "12l", label: "12L", checked: false },
      { value: "18l", label: "18L", checked: false },
      { value: "20l", label: "20L", checked: false },
      { value: "40l", label: "40L", checked: false },
    ],
  },
];
