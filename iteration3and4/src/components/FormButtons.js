import React from "react";
import { Link } from "react-router-dom";

const FormButtons = () => {
  return (
    <div>
      <input type="submit" class="btn btn-outline-secondary w-100" value="Add to shopping cart" />
      <Link to="/checkout" id="checkout" type="button" class="btn btn-secondary w-100 d-none">
        Proceed to checkout
      </Link>
    </div>
  );
};

export default FormButtons;
