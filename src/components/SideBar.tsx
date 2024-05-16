import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const selectedCategory = "New";

interface SideBarProps {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

const SideBar = ({ selectedCategory, setSelectedCategory }: SideBarProps) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <button
            className={`category-btn text-white ${
              category.name === selectedCategory && "!bg-[#FC1503]"
            }`}
            key={category.name}
            onClick={() => setSelectedCategory(category.name)}
          >
            <span
              className={`mr-4 ${
                category.name === selectedCategory
                  ? "text-white"
                  : "text-red-600"
              }`}
            >
              <Icon />
            </span>
            <span
              className={
                category.name == selectedCategory
                  ? "opacity-100"
                  : "opacity-80 "
              }
            >
              {category.name}
            </span>
          </button>
        );
      })}
    </Stack>
  );
};

export default SideBar;
