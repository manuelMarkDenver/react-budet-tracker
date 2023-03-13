// rrd imports
import { Form, NavLink } from "react-router-dom";

// library
import { TrashIcon } from '@heroicons/react/24/solid'

// assets
import logomark from "../assets/logomark.svg";

const Nav = (props) => {
  const { userName } = props;
  return (
    <nav>
      <NavLink to="/" aria-label="Go to home">
        <img src={logomark} alt="" height={30} />
        <span style={{ display: "inline-block" }}>HomeBudget</span>
      </NavLink>
      {userName && (
        <Form
          method="POST"
          action="/logout"
          onSubmit={(event) => {
            if (!confirm("Delete user and all data?")) {
              event.preventDefault();
            }
          }}
        >
          <button type="submit" className="btn btn--warning">
            <span>Delete User</span>
            <TrashIcon width={20}/>
          </button>
        </Form>
      )}
    </nav>
  );
};

export default Nav;
