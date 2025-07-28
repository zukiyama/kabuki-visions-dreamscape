import { Link, useLocation } from "react-router-dom";
import { Triangle, Circle, Waves } from "lucide-react";

const Header = () => {
  const location = useLocation();

  const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
    const isActive = location.pathname === to;
    return (
      <Link
        to={to}
        className={`px-6 py-2 rounded-lg transition-all duration-300 ${
          isActive
            ? "bg-accent text-accent-foreground shadow-artistic"
            : "text-foreground hover:bg-accent/20 hover:text-accent-foreground"
        }`}
      >
        {children}
      </Link>
    );
  };

  return (
    <header className="relative z-50 bg-canvas/95 backdrop-blur-sm border-b border-border shadow-artistic">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with artistic symbols */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-3 group">
              {/* Artistic symbols */}
              <div className="flex items-center space-x-2 text-accent">
                <Triangle 
                  size={24} 
                  className="fill-current rotate-12 group-hover:rotate-45 transition-transform duration-500" 
                />
                <Circle 
                  size={24} 
                  className="fill-current group-hover:scale-110 transition-transform duration-500" 
                />
                <Waves 
                  size={24} 
                  className="group-hover:rotate-12 transition-transform duration-500" 
                />
              </div>
              
              {/* Site title */}
              <h1 className="text-2xl font-bold text-gradient brushstroke">
                Kabuki Yamakawa
              </h1>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-2">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/writing">Writing</NavLink>
            <NavLink to="/music">Music</NavLink>
            <NavLink to="/comics">Comics</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;