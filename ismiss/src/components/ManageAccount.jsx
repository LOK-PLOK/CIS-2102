import { useState } from "react";

const ManageAccount = () => {
  const [accForm, setAccForm] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(accForm);
    setUserForm({
      ...accForm,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(accForm);
  };

  return (
    <div>
        
    </div>
  )
};

export default ManangeAccount;
