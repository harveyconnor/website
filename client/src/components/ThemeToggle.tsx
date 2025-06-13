import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button 
      variant="outline" 
      size="sm" 
      className="w-9 h-9 p-0" 
      onClick={toggleTheme}
    >
      <i className="fas fa-sun text-lg rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"></i>
      <i className="fas fa-moon absolute text-lg rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"></i>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}