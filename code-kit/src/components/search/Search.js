import React from "react";
import Input from "../input/Input";
import useForm from "../../customhooks/userForm";
import { validateIp } from "../../validators/validators";

const Search = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    search,
    validateIp
  );

  function search() {
    console.log("Submit search!!", values);
  }
  return (
    <div className="search">
      <form className="search-form" onSubmit={handleSubmit}>
        <Input
          type="text"
          name="ipaddress"
          value={values.ipaddress}
          onChange={handleChange}
        >
          {errors.ipaddress && (
            <p className={`input ${errors.ipaddress && "is-danger"}`}>
              {errors.ipaddress}
            </p>
          )}
        </Input>
        <button type="submit" className="search-btn">
          search
        </button>
      </form>
    </div>
  );
};

export default Search;
