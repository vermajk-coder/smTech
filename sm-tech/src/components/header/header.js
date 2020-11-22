import SearchBar from "material-ui-search-bar";
import { Button } from "@material-ui/core";
import "./header.css";

function Header() {
  return (
    <div className="sm-header">
      <div>
        <SearchBar style={{ height: "32px" }} />
      </div>
      <div className="sm-header-title">Supreme Minds Tech</div>
      <div>
        <Button variant="outlined" color="primary">
          Login
        </Button>
      </div>
    </div>
  );
}

export default Header;
