import React from "react";
import { Link } from "react-router-dom";

const FormButtons = ({ price, validateConfirmation }) => {
  const storeTotal = (e, price) => {
    // set to DB preferably (orders table)
    e.preventDefault();
    const total = localStorage.getItem("total");
    if (total) {
      price += parseInt(total);
    }
    localStorage.setItem("total", price);
  };

  return (
    <div>
      {validateConfirmation() && (
        <div>
          <input
            type="submit"
            onClick={(e) => storeTotal(e, price)}
            className="btn btn-outline-secondary w-100"
            value="Add to shopping cart"
          />
          <br />
          <button className="btn btn-secondary w-100 mt-2">
            <Link className="text-light" to="/checkout">
              Proceed to checkout
            </Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default FormButtons;
