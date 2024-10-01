import React from "react";
import { useState } from "react";

function ManageAccount(){
    
    const [userForm, setUserForm] = useState({});
    const [result, setResult] = useState("");

    const handleChanges = (e) => {
        const {name, value} = e.target;

        setUserForm({
            ...userForm,
            [name]: value,
        });
    };

    const postData = (e) => {
        e.preventDefault()
        console.log(userForm);
        setResult(JSON.stringify(userForm, null, 2));
    }

    return (
            <div className="modal" id="accountModal">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3><i className="fa fa-pencil"></i> Manage Account</h3>
                        <span className="close">&times;</span>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="email"><i className="fa fa-envelope"></i> Email Address</label>
                                    <input type="email" id="email" name="email" placeholder="Email Address" onChange={handleChanges}></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="permCountry"><i className="fa fa-flag"></i> Permanent Address Country</label>
                                    <select id="permCountry" name="permCountry" onChange={handleChanges} defaultValue="Please select country">
                                        <option disabled>Please select country</option>
                                        <option>None</option>
                                        <option>Country 1</option>
                                        <option>Country 2</option>
                                        <option>Country 3</option>
                                        <option>Country 4</option>
                                        <option>Country 5</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="permRegion"><i className="fa fa-map-marker"></i> Permanent Address Region</label>
                                    <select id="permRegion" name="permRegion" onChange={handleChanges} defaultValue="Please select region">
                                        <option disabled>Please select region</option>
                                        <option>None</option>
                                        <option>Region 1</option>
                                        <option>Region 2</option>
                                        <option>Region 3</option>
                                        <option>Region 4</option>
                                        <option>Region 5</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="permProv"><i className="fa fa-map-marker"></i> Permanent Address Province</label>
                                    <select id="permProv" name="permProv" onChange={handleChanges} defaultValue="Please select province">
                                        <option disabled>Please select province</option>
                                        <option>None</option>
                                        <option>Province 1</option>
                                        <option>Province 2</option>
                                        <option>Province 3</option>
                                        <option>Province 4</option>
                                        <option>Province 5</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="permCity"><i className="fa fa-map-marker"></i> Permanent Address City</label>
                                    <select id="permCity" name="permCity" onChange={handleChanges} defaultValue="Please select city">
                                        <option disabled>Please select city</option>
                                        <option>None</option>
                                        <option>City 1</option>
                                        <option>City 2</option>
                                        <option>City 3</option>
                                        <option>City 4</option>
                                        <option>City 5</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="permHouse"><i className="fa fa-home"></i> House No./Street/Barangay</label>
                                    <input type="text" id="permHouse" name="permHouse" placeholder="House No./Street/Barangay" onChange={handleChanges}></input>
                                </div>
                            </div>
                            

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="presCountry"><i className="fa fa-flag"></i> Present Address Country</label>
                                    <select id="presCountry" name="presCountry" onChange={handleChanges} defaultValue="Please select country">
                                        <option disabled>Please select country</option>
                                        <option>None</option>
                                        <option>Country 1</option>
                                        <option>Country 2</option>
                                        <option>Country 3</option>
                                        <option>Country 4</option>
                                        <option>Country 5</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="presRegion"><i className="fa fa-map-marker"></i> Present Address Region</label>
                                    <select id="presRegion" name="presRegion" onChange={handleChanges} defaultValue="Please select region">
                                        <option disabled>Please select region</option>
                                        <option>None</option>
                                        <option>Region 1</option>
                                        <option>Region 2</option>
                                        <option>Region 3</option>
                                        <option>Region 4</option>
                                        <option>Region 5</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="presProv"><i className="fa fa-map-marker"></i> Present Address Province</label>
                                    <select id="presProv" name="presProv" onChange={handleChanges} defaultValue="Please select province">
                                        <option disabled>Please select province</option>
                                        <option>None</option>
                                        <option>Province 1</option>
                                        <option>Province 2</option>
                                        <option>Province 3</option>
                                        <option>Province 4</option>
                                        <option>Province 5</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="presCity"><i className="fa fa-map-marker"></i> Present Address City</label>
                                    <select id="presCity" name="presCity" onChange={handleChanges} defaultValue="Please select city">
                                        <option disabled>Please select city</option>
                                        <option>None</option>
                                        <option>City 1</option>
                                        <option>City 2</option>
                                        <option>City 3</option>
                                        <option>City 4</option>
                                        <option>City 5</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="presHouse"><i className="fa fa-home"></i> House No./Street/Barangay</label>
                                    <input type="text" id="presHouse" name="presHouse" placeholder="House No./Street/Barangay" onChange={handleChanges}></input>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="contact1"><i className="fa fa-solid fa-mobile-screen-button"></i> Contact Number # 1</label>
                                    <input type="text" id="contact1" name="contact1" placeholder="Contact Number" onChange={handleChanges}></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="contType1"><i className="fa fa-solid fa-mobile-screen-button"></i> Number Type</label>
                                    <select id="contType1" name="contType1" onChange={handleChanges} defaultValue="Please select type of number">
                                        <option disabled>Please select type of number</option>
                                        <option>None</option>
                                        <option>Mobile Number</option>
                                        <option>Telephone Number</option>
                                        <option>Fax</option>
                                        <option>Others</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="contact2"><i className="fa fa-solid fa-mobile-screen-button"></i> Contact Number # 2</label>
                                    <input type="text" id="contact2" name="contact2" placeholder="Contact Number" onChange={handleChanges}></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="contType2"><i className="fa fa-solid fa-mobile-screen-button"></i> Number Type</label>
                                    <select id="contType2" name="contType2" onChange={handleChanges} defaultValue="Please select type of number">
                                        <option disabled>Please select type of number</option>
                                        <option>None</option>
                                        <option>Mobile Number</option>
                                        <option>Telephone Number</option>
                                        <option>Fax</option>
                                        <option>Others</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="contact3"><i className="fa fa-solid fa-mobile-screen-button"></i> Contact Number # 3</label>
                                    <input type="text" id="contact3" name="contact3" placeholder="Contact Number" onChange={handleChanges}></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="contType3"><i className="fa fa-solid fa-mobile-screen-button"></i> Number Type</label>
                                    <select id="contType3" name="contType3" onChange={handleChanges} defaultValue="Please select type of number">
                                        <option disabled>Please select type of number</option>
                                        <option>None</option>
                                        <option>Mobile Number</option>
                                        <option>Telephone Number</option>
                                        <option>Fax</option>
                                        <option>Others</option>
                                    </select>
                                </div>
                            </div>

                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="submit" className="save-btn" onClick={postData}><i className="fa fa-check"></i> Save Changes</button>
                    </div>
                </div>
                
                <div className="results modal-content">
                    <h3>Results (Click &quot;Save Changes&quot; to display the results)</h3>
                    <pre>{result}</pre>
                </div>
            </div>
    );
}

export default ManageAccount;