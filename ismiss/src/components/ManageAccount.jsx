import { useState } from "react";

const ManageAccount = () => {
  const [accForm, setAccForm] = useState({});
  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(accForm);
    setAccForm({
      ...accForm,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(accForm);
    console.log(accForm);
  };

  const SubmittedInfo = ({ submitted }) => {
    // Create a div with a consistent background style
    const backgroundStyle = "flex items-center justify-center bg-black bg-opacity-50 p-10 overflow-y-hidden";

    // If there is no submitted information, return the empty state
    if (!submitted) {
        return (
          <>
            <div className= {backgroundStyle}></div>
          </>
        );
    }

    // If submitted information exists, render the details
    return (
        <div className={backgroundStyle}>
            <div className="bg-white shadow-announcement rounded-lg p-6 max-w-md w-full my-3">
                <h3 className="text-lg font-semibold mb-4">Submitted Information:</h3>
                <p><strong>Email Address:</strong> {submitted.email}</p>
                <p><strong>Permanent Address Country:</strong> {submitted.permCountry}</p>
                <p><strong>Permanent Address Region:</strong> {submitted.permRegion}</p>
                <p><strong>Permanent Address Province:</strong> {submitted.permProv}</p>
                <p><strong>Permanent Address City:</strong> {submitted.permCity}</p>
                <p><strong>Permanent Address House No./Street/Barangay:</strong> {submitted.permHouse}</p>
                <p><strong>Present Address Country:</strong> {submitted.presCountry}</p>
                <p><strong>Present Address Region:</strong> {submitted.presRegion}</p>
                <p><strong>Present Address Province:</strong> {submitted.presProv}</p>
                <p><strong>Present Address City:</strong> {submitted.presCity}</p>
                <p><strong>Present Address House No./Street/Barangay:</strong> {submitted.presHouse}</p>
                <p><strong>Contact Number #1:</strong> {submitted.contact1}</p>
                <p><strong>Contact Number Type:</strong> {submitted.contType1}</p>
                <p><strong>Contact Number #2:</strong> {submitted.contact2}</p>
                <p><strong>Contact Number Type:</strong> {submitted.contType2}</p>
                <p><strong>Contact Number #3:</strong> {submitted.contact3}</p>
                <p><strong>Contact Number Type:</strong> {submitted.contType3}</p>
            </div>
        </div>
    );
};


  return (
    <>
      <div className="inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto" id="accountModal">
        <div className="relative mt-6 mb-6 mx-auto bg-white p-5 rounded-lg w-[80%] max-w-full shadow-lg font-sanst h-max">
          <div className="flex justify-between items-center border-b border-gray-300 mb-5">
            <h3 className="text-usc-green font-bold text-2xl">Manage Account</h3>
            <span className="absolute right-5 top-5 text-xl text-gray-500 cursor-pointer">
              &times; 
            </span>
          </div>
          <div className="max-h-[80vh] overflow-y-auto">
            <form onSubmit={handleSubmit}>
              <div className="flex gap-5 flex-wrap">
                <div className="flex flex-col flex-1 basis-[300px]">
                  <label htmlFor="email" className="text-base mb-1 font-medium">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    onChange={handleChange}
                    className="w-full p-2 text-base border border-gray-300 rounded mb-2"
                    required
                  />
                </div>
                <div className="flex flex-col flex-1 basis-[300px]">
                  <label htmlFor="permCountry" className="text-base mb-1 font-medium">Permanent Address Country</label>
                  <select
                    id="permCountry"
                    name="permCountry"
                    onChange={handleChange}
                    defaultValue="Please select country"
                    className="w-full p-2 text-base border border-gray-300 rounded mb-2"
                    required
                  >
                    <option disabled>Please select country</option>
                    <option>None</option>
                    <option>Australia</option>
                    <option>USA</option>
                    <option>Philippines</option>
                    <option>Singapore</option>
                    <option>Japan</option>
                  </select>
                </div>
                <div className="flex flex-col flex-1 basis-[300px]">
                  <label htmlFor="permRegion" className="text-base mb-1 font-medium">Permanent Address Region</label>
                  <select
                    id="permRegion"
                    name="permRegion"
                    onChange={handleChange}
                    defaultValue="Please select region"
                    className="w-full p-2 text-base border border-gray-300 rounded mb-2"
                    required
                  >
                    <option disabled>Please select region</option>
                    <option>None</option>
                    <option>Region 1</option>
                    <option>Region 2</option>
                    <option>Region 3</option>
                    <option>Region 4</option>
                    <option>Region 5</option>
                    <option>Region 6</option>
                    <option>Region 7</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-5 flex-wrap">
                <div className="flex flex-col flex-1 basis-[300px]">
                  <label htmlFor="permProv" className="text-base mb-1 font-medium">Permanent Address Province</label>
                  <select
                    id="permProv"
                    name="permProv"
                    onChange={handleChange}
                    defaultValue="Please select province"
                    className="w-full p-2 text-base border border-gray-300 rounded mb-2"
                    required
                  >
                    <option disabled>Please select province</option>
                    <option>None</option>
                    <option>Province 1</option>
                    <option>Province 2</option>
                    <option>Province 3</option>
                    <option>Province 4</option>
                    <option>Province 5</option>
                  </select>
                </div>
                <div className="flex flex-col flex-1 basis-[300px]">
                  <label htmlFor="permCity" className="text-base mb-1 font-medium">Permanent Address City</label>
                  <select
                    id="permCity"
                    name="permCity"
                    onChange={handleChange}
                    defaultValue="Please select city"
                    className="w-full p-2 text-base border border-gray-300 rounded mb-2"
                    required
                  >
                    <option disabled>Please select city</option>
                    <option>None</option>
                    <option>Mandaue City</option>
                    <option>Cebu City</option>
                    <option>Talamban</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-5 flex-wrap">
                <div className="flex flex-col flex-1 basis-[300px]">
                  <label htmlFor="permHouse" className="text-base mb-1 font-medium">House No./Street/Barangay</label>
                  <input
                    type="text"
                    id="permHouse"
                    name="permHouse"
                    placeholder="House No./Street/Barangay"
                    onChange={handleChange}
                    className="w-full p-2 text-base border border-gray-300 rounded mb-2"
                    required
                  />
                </div>
              </div>

              <div className="flex gap-5 flex-wrap">
                <div className="flex flex-col flex-1 basis-[300px]">
                  <label htmlFor="presCountry" className="text-base mb-1 font-medium">Present Address Country</label>
                  <select
                    id="presCountry"
                    name="presCountry"
                    onChange={handleChange}
                    defaultValue="Please select country"
                    className="w-full p-2 text-base border border-gray-300 rounded mb-2"
                    required
                  >
                    <option disabled>Please select country</option>
                    <option>None</option>
                    <option>Australia</option>
                    <option>USA</option>
                    <option>Philippines</option>
                    <option>Singapore</option>
                    <option>Japan</option>
                  </select>
                </div>
                <div className="flex flex-col flex-1 basis-[300px]">
                  <label htmlFor="presRegion" className="text-base mb-1 font-medium">Present Address Region</label>
                  <select
                    id="presRegion"
                    name="presRegion"
                    onChange={handleChange}
                    defaultValue="Please select region"
                    className="w-full p-2 text-base border border-gray-300 rounded mb-2"
                    required
                  >
                    <option disabled>Please select region</option>
                    <option>None</option>
                    <option>Region 1</option>
                    <option>Region 2</option>
                    <option>Region 3</option>
                    <option>Region 4</option>
                    <option>Region 5</option>
                    <option>Region 6</option>
                    <option>Region 7</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-5 flex-wrap">
                <div className="flex flex-col flex-1 basis-[300px]">
                  <label htmlFor="presProv" className="text-base mb-1 font-medium">Present Address Province</label>
                  <select
                    id="presProv"
                    name="presProv"
                    onChange={handleChange}
                    defaultValue="Please select province"
                    className="w-full p-2 text-base border border-gray-300 rounded mb-2"
                    required
                  >
                    <option disabled>Please select province</option>
                    <option>None</option>
                    <option>Province 1</option>
                    <option>Province 2</option>
                    <option>Province 3</option>
                    <option>Province 4</option>
                    <option>Province 5</option>
                    <option>Province 6</option>
                    <option>Province 7</option>
                  </select>
                </div>
                <div className="flex flex-col flex-1 basis-[300px]">
                  <label htmlFor="presCity" className="text-base mb-1 font-medium">Present Address City</label>
                  <select
                    id="presCity"
                    name="presCity"
                    onChange={handleChange}
                    defaultValue="Please select city"
                    className="w-full p-2 text-base border border-gray-300 rounded mb-2"
                    required
                  >
                    <option disabled>Please select city</option>
                    <option>None</option>
                    <option>Australia</option>
                    <option>USA</option>
                    <option>Philippines</option>
                    <option>Singapore</option>
                    <option>Japan</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-5 flex-wrap">
                <div className="flex flex-col flex-1 basis-[300px]">
                  <label htmlFor="presHouse" className="text-base mb-1 font-medium">Present Address House No./Street/Barangay</label>
                  <input
                    type="text"
                    id="presHouse"
                    name="presHouse"
                    placeholder="House No./Street/Barangay"
                    onChange={handleChange}
                    className="w-full p-2 text-base border border-gray-300 rounded mb-2"
                    required
                  />
                </div>
              </div>

              <div className="flex gap-5 flex-wrap">
                <div className="flex flex-col flex-1 basis-[300px]">
                  <label htmlFor="contact1" className="text-base mb-1 font-medium">Contact Number #1</label>
                  <input
                    type="tel"
                    id="contact1"
                    name="contact1"
                    placeholder="Contact Number #1"
                    onChange={handleChange}
                    className="w-full p-2 text-base border border-gray-300 rounded mb-2"
                    required
                  />
                </div>
                <div className="flex flex-col flex-1 basis-[300px]">
                  <label htmlFor="contType1" className="text-base mb-1 font-medium">Contact Number Type</label>
                  <select
                    id="contType1"
                    name="contType1"
                    onChange={handleChange}
                    defaultValue="Please select type"
                    className="w-full p-2 text-base border border-gray-300 rounded mb-2"
                    required
                  >
                    <option disabled>Please select type</option>
                    <option>Mobile number</option>
                    <option>Telephone number</option>
                    <option>Fax</option>
                    <option>Others</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-5 flex-wrap">
                <div className="flex flex-col flex-1 basis-[300px]">
                  <label htmlFor="contact2" className="text-base mb-1 font-medium">Contact Number #2</label>
                  <input
                    type="tel"
                    id="contact2"
                    name="contact2"
                    placeholder="Contact Number #2"
                    onChange={handleChange}
                    className="w-full p-2 text-base border border-gray-300 rounded mb-2"
                  />
                </div>
                <div className="flex flex-col flex-1 basis-[300px]">
                  <label htmlFor="contType2" className="text-base mb-1 font-medium">Contact Number Type</label>
                  <select
                    id="contType2"
                    name="contType2"
                    onChange={handleChange}
                    defaultValue="Please select type"
                    className="w-full p-2 text-base border border-gray-300 rounded mb-2"
                  >
                    <option disabled>Please select type</option>
                    <option>Mobile number</option>
                    <option>Telephone number</option>
                    <option>Fax</option>
                    <option>Others</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-5 flex-wrap">
                <div className="flex flex-col flex-1 basis-[300px]">
                  <label htmlFor="contact3" className="text-base mb-1 font-medium">Contact Number #3</label>
                  <input
                    type="tel"
                    id="contact3"
                    name="contact3"
                    placeholder="Contact Number #3"
                    onChange={handleChange}
                    className="w-full p-2 text-base border border-gray-300 rounded mb-2"
                  />
                </div>
                <div className="flex flex-col flex-1 basis-[300px]">
                  <label htmlFor="contType3" className="text-base mb-1 font-medium">Contact Number Type</label>
                  <select
                    id="contType3"
                    name="contType3"
                    onChange={handleChange}
                    defaultValue="Please select type"
                    className="w-full p-2 text-base border border-gray-300 rounded mb-2"
                  >
                    <option disabled>Please select type</option>
                    <option>Mobile number</option>
                    <option>Telephone number</option>
                    <option>Fax</option>
                    <option>Others</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end">
                <button type="submit" className="bg-usc-green text-white font-bold px-4 py-2 rounded hover:bg-usc-darkgreen">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
          <SubmittedInfo submitted={submitted} />
            
    </>
  );
};

export default ManageAccount;
