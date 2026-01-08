import { Moon, Sun } from "lucide-react";
import { useTheme } from "../providers/theme-provider";
import Button from "./button";

function Nav() {
  const { theme, setTheme } = useTheme();

  function handleToggle() {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  return (
    <nav className="py-8 px-12 flex items-center justify-between">
      <h1 className="font-bold">Ui-Neo</h1>
      <Button
        variant="default"
        size={"icon"}
        shape={"full"}
        onClick={handleToggle}
      >
        <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90 text-warning" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0 text-primary" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </nav>
  );
}

export default Nav;
