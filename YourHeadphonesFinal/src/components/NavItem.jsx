import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function NavItem(props) {

  const {theme, handleTheme} = useContext(ThemeContext)


   return (
   <>
       <button type="button" className="btnTheme" onClick={handleTheme}>{ theme } Mode </button>
   </>
 )
}

export default NavItem;