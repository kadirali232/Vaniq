import React, { useState } from 'react';
import './OpenAccount.css';

const OpenAccount = () => {
  const [formData, setFormData] = useState({
    title: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    nationality: '',
    houseNumber: '',
    address: '',
    postCode: '',
    employmentStatus: '',
    annualIncome: '',
    sourcesOfAnnualPersonalIncome: '',
    otherHouseholdIncome: '',
    accountType: 'savings',
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (step === 1) {
      if (!formData.title) formErrors.title = "Title is required";
      if (!formData.firstName) formErrors.firstName = "First name is required";
      if (!formData.lastName) formErrors.lastName = "Last name is required";
      if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
          formErrors.email = "A valid email is required";
      if (!formData.dateOfBirth) formErrors.dateOfBirth = "Date of birth is required";
      if (!formData.houseNumber) formErrors.houseNumber = "House number is required";
      if (!formData.address) formErrors.address = "Address is required";
      if (!formData.postCode) formErrors.postCode = "Post code is required";
      if (!formData.phone || formData.phone.length < 10)
        formErrors.phone = "A valid phone number is required";
    } else if (step === 2) {
      if (!formData.employmentStatus)
        formErrors.employmentStatus = "Employment status is required";
      if (!formData.annualIncome)
        formErrors.annualIncome = "Annual personal income is required";
      if (!formData.sourcesOfAnnualPersonalIncome)
        formErrors.sourcesOfAnnualPersonalIncome = "Sources of income are required";
      if (!formData.otherHouseholdIncome)
        formErrors.otherHouseholdIncome = "Other household income is required";
    } else if (step === 4 && !formData.agreeToTerms) {
      formErrors.agreeToTerms = "You must agree to the terms and conditions";
    }
    return formErrors;
  };

  const handleNextStep = () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
      setStep((prevStep) => prevStep + 1);
    } else {
      setErrors(validationErrors);
    }
  };

  const handlePrevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
      console.log("Account details submitted:", formData);
      alert("Application submitted successfully!");
      // Reset form here if needed
      // setFormData(initialFormData);
      // setStep(1); // Reset to the first step if needed
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="open-account-page">
      <h2>Open a Bank Account with Vaniq</h2>
      <p>Follow the steps below to open your bank account.</p>

      {/* Step progress bar */}
      <div className="steps-progress">
        <div className={`step ${step >= 1 ? 'active' : ''}`}>About You</div>
        <div className={`step ${step >= 2 ? 'active' : ''}`}>Additional Info</div>
        <div className={`step ${step >= 3 ? 'active' : ''}`}>Review</div>
        <div className={`step ${step >= 4 ? 'active' : ''}`}>Terms & Conditions</div>
        <div className={`step ${step === 5 ? 'active' : ''}`}>Finish</div>
      </div>

      <form className="account-form" onSubmit={handleSubmit}>
        {/* Step 1: About You */}
        {step === 1 && (
          <div>
            <div className="form-group">
              <label>Title</label>
              <select
                name="title"
                value={formData.title}
                onChange={handleChange}
              >
                <option value="">Select Title</option>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Ms">Ms</option>
              </select>
              {errors.title && <p className="error">{errors.title}</p>}
            </div>
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <p className="error">{errors.firstName}</p>}
            </div>
            <div className="form-group">
              <label>Surname</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && <p className="error">{errors.lastName}</p>}
            </div>
            <div className="form-group">
              <label>Date of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
              />
              {errors.dateOfBirth && <p className="error">{errors.dateOfBirth}</p>}
            </div>
            <div className="form-group">
  <label>Nationality</label>
  <select
    name="nationality"
    value={formData.nationality}
    onChange={handleChange}
  >
    <option value="">Select Nationality</option>
    <option value="Afghanistan">Afghanistan</option>
    <option value="Albania">Albania</option>
    <option value="Algeria">Algeria</option>
    <option value="Andorra">Andorra</option>
    <option value="Angola">Angola</option>
    <option value="Antigua and Barbuda">Antigua and Barbuda</option>
    <option value="Argentina">Argentina</option>
    <option value="Armenia">Armenia</option>
    <option value="Australia">Australia</option>
    <option value="Austria">Austria</option>
    <option value="Azerbaijan">Azerbaijan</option>
    <option value="Bahamas">Bahamas</option>
    <option value="Bahrain">Bahrain</option>
    <option value="Bangladesh">Bangladesh</option>
    <option value="Barbados">Barbados</option>
    <option value="Belarus">Belarus</option>
    <option value="Belgium">Belgium</option>
    <option value="Belize">Belize</option>
    <option value="Benin">Benin</option>
    <option value="Bhutan">Bhutan</option>
    <option value="Bolivia">Bolivia</option>
    <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
    <option value="Botswana">Botswana</option>
    <option value="Brazil">Brazil</option>
    <option value="Brunei">Brunei</option>
    <option value="Bulgaria">Bulgaria</option>
    <option value="Burkina Faso">Burkina Faso</option>
    <option value="Burundi">Burundi</option>
    <option value="Cabo Verde">Cabo Verde</option>
    <option value="Cambodia">Cambodia</option>
    <option value="Cameroon">Cameroon</option>
    <option value="Canada">Canada</option>
    <option value="Central African Republic">Central African Republic</option>
    <option value="Chad">Chad</option>
    <option value="Chile">Chile</option>
    <option value="China">China</option>
    <option value="Colombia">Colombia</option>
    <option value="Comoros">Comoros</option>
    <option value="Congo (Congo-Brazzaville)">Congo (Congo-Brazzaville)</option>
    <option value="Congo (DRC)">Congo (DRC)</option>
    <option value="Costa Rica">Costa Rica</option>
    <option value="Croatia">Croatia</option>
    <option value="Cuba">Cuba</option>
    <option value="Cyprus">Cyprus</option>
    <option value="Czech Republic">Czech Republic</option>
    <option value="Denmark">Denmark</option>
    <option value="Djibouti">Djibouti</option>
    <option value="Dominica">Dominica</option>
    <option value="Dominican Republic">Dominican Republic</option>
    <option value="Ecuador">Ecuador</option>
    <option value="Egypt">Egypt</option>
    <option value="El Salvador">El Salvador</option>
    <option value="Equatorial Guinea">Equatorial Guinea</option>
    <option value="Eritrea">Eritrea</option>
    <option value="Estonia">Estonia</option>
    <option value="Eswatini">Eswatini</option>
    <option value="Ethiopia">Ethiopia</option>
    <option value="Fiji">Fiji</option>
    <option value="Finland">Finland</option>
    <option value="France">France</option>
    <option value="Gabon">Gabon</option>
    <option value="Gambia">Gambia</option>
    <option value="Georgia">Georgia</option>
    <option value="Germany">Germany</option>
    <option value="Ghana">Ghana</option>
    <option value="Greece">Greece</option>
    <option value="Grenada">Grenada</option>
    <option value="Guatemala">Guatemala</option>
    <option value="Guinea">Guinea</option>
    <option value="Guinea-Bissau">Guinea-Bissau</option>
    <option value="Guyana">Guyana</option>
    <option value="Haiti">Haiti</option>
    <option value="Honduras">Honduras</option>
    <option value="Hungary">Hungary</option>
    <option value="Iceland">Iceland</option>
    <option value="India">India</option>
    <option value="Indonesia">Indonesia</option>
    <option value="Iran">Iran</option>
    <option value="Iraq">Iraq</option>
    <option value="Ireland">Ireland</option>
    <option value="Israel">Israel</option>
    <option value="Italy">Italy</option>
    <option value="Jamaica">Jamaica</option>
    <option value="Japan">Japan</option>
    <option value="Jordan">Jordan</option>
    <option value="Kazakhstan">Kazakhstan</option>
    <option value="Kenya">Kenya</option>
    <option value="Kiribati">Kiribati</option>
    <option value="Kuwait">Kuwait</option>
    <option value="Kyrgyzstan">Kyrgyzstan</option>
    <option value="Laos">Laos</option>
    <option value="Latvia">Latvia</option>
    <option value="Lebanon">Lebanon</option>
    <option value="Lesotho">Lesotho</option>
    <option value="Liberia">Liberia</option>
    <option value="Libya">Libya</option>
    <option value="Liechtenstein">Liechtenstein</option>
    <option value="Lithuania">Lithuania</option>
    <option value="Luxembourg">Luxembourg</option>
    <option value="Madagascar">Madagascar</option>
    <option value="Malawi">Malawi</option>
    <option value="Malaysia">Malaysia</option>
    <option value="Maldives">Maldives</option>
    <option value="Mali">Mali</option>
    <option value="Malta">Malta</option>
    <option value="Marshall Islands">Marshall Islands</option>
    <option value="Mauritania">Mauritania</option>
    <option value="Mauritius">Mauritius</option>
    <option value="Mexico">Mexico</option>
    <option value="Micronesia">Micronesia</option>
    <option value="Moldova">Moldova</option>
    <option value="Monaco">Monaco</option>
    <option value="Mongolia">Mongolia</option>
    <option value="Montenegro">Montenegro</option>
    <option value="Morocco">Morocco</option>
    <option value="Mozambique">Mozambique</option>
    <option value="Myanmar (Burma)">Myanmar (Burma)</option>
    <option value="Namibia">Namibia</option>
    <option value="Nauru">Nauru</option>
    <option value="Nepal">Nepal</option>
    <option value="Netherlands">Netherlands</option>
    <option value="New Zealand">New Zealand</option>
    <option value="Nicaragua">Nicaragua</option>
    <option value="Niger">Niger</option>
    <option value="Nigeria">Nigeria</option>
    <option value="North Korea">North Korea</option>
    <option value="North Macedonia">North Macedonia</option>
    <option value="Norway">Norway</option>
    <option value="Oman">Oman</option>
    <option value="Pakistan">Pakistan</option>
    <option value="Palau">Palau</option>
    <option value="Panama">Panama</option>
    <option value="Papua New Guinea">Papua New Guinea</option>
    <option value="Paraguay">Paraguay</option>
    <option value="Peru">Peru</option>
    <option value="Philippines">Philippines</option>
    <option value="Poland">Poland</option>
    <option value="Portugal">Portugal</option>
    <option value="Qatar">Qatar</option>
    <option value="Romania">Romania</option>
    <option value="Russia">Russia</option>
    <option value="Rwanda">Rwanda</option>
    <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
    <option value="Saint Lucia">Saint Lucia</option>
    <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
    <option value="Samoa">Samoa</option>
    <option value="San Marino">San Marino</option>
    <option value="Sao Tome and Principe">Sao Tome and Principe</option>
    <option value="Saudi Arabia">Saudi Arabia</option>
    <option value="Senegal">Senegal</option>
    <option value="Serbia">Serbia</option>
    <option value="Seychelles">Seychelles</option>
    <option value="Sierra Leone">Sierra Leone</option>
    <option value="Singapore">Singapore</option>
    <option value="Slovakia">Slovakia</option>
    <option value="Slovenia">Slovenia</option>
    <option value="Solomon Islands">Solomon Islands</option>
    <option value="Somalia">Somalia</option>
    <option value="South Africa">South Africa</option>
    <option value="South Korea">South Korea</option>
    <option value="South Sudan">South Sudan</option>
    <option value="Spain">Spain</option>
    <option value="Sri Lanka">Sri Lanka</option>
    <option value="Sudan">Sudan</option>
    <option value="Suriname">Suriname</option>
    <option value="Sweden">Sweden</option>
    <option value="Switzerland">Switzerland</option>
    <option value="Syria">Syria</option>
    <option value="Taiwan">Taiwan</option>
    <option value="Tajikistan">Tajikistan</option>
    <option value="Tanzania">Tanzania</option>
    <option value="Thailand">Thailand</option>
    <option value="Timor-Leste">Timor-Leste</option>
    <option value="Togo">Togo</option>
    <option value="Tonga">Tonga</option>
    <option value="Trinidad and Tobago">Trinidad and Tobago</option>
    <option value="Tunisia">Tunisia</option>
    <option value="Turkey">Turkey</option>
    <option value="Turkmenistan">Turkmenistan</option>
    <option value="Tuvalu">Tuvalu</option>
    <option value="Uganda">Uganda</option>
    <option value="Ukraine">Ukraine</option>
    <option value="United Arab Emirates">United Arab Emirates</option>
    <option value="United Kingdom">United Kingdom</option>
    <option value="United States">United States</option>
    <option value="Uruguay">Uruguay</option>
    <option value="Uzbekistan">Uzbekistan</option>
    <option value="Vanuatu">Vanuatu</option>
    <option value="Vatican City">Vatican City</option>
    <option value="Venezuela">Venezuela</option>
    <option value="Vietnam">Vietnam</option>
    <option value="Yemen">Yemen</option>
    <option value="Zambia">Zambia</option>
    <option value="Zimbabwe">Zimbabwe</option>
  </select>
  {errors.nationality && <p className="error">{errors.nationality}</p>}
</div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <p className="error">{errors.phone}</p>}
            </div>
            <div className="form-group">
              <label>House Number</label>
              <input
                type="text"
                name="houseNumber"
                value={formData.houseNumber}
                onChange={handleChange}
              />
              {errors.houseNumber && <p className="error">{errors.houseNumber}</p>}
            </div>
            <div className="form-group">
              <label>Post Code</label>
              <input
                type="text"
                name="postCode"
                value={formData.postCode}
                onChange={handleChange}
              />
              {errors.postCode && <p className="error">{errors.postCode}</p>}
            </div>
            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
              {errors.address && <p className="error">{errors.address}</p>}
            </div>
          </div>
        )}

        {/* Step 2: Additional Info */}
        {step === 2 && (
          <div>
            <div className="form-group">
              <label>Employment Status</label>
              <select
                name="employmentStatus"
                value={formData.employmentStatus}
                onChange={handleChange}
              >
                <option value="">Select Employment Status</option>
                <option value="employed">Employed</option>
                <option value="unemployed">Unemployed</option>
                <option value="self-employed">Self-Employed</option>
                <option value="student">Student</option>
                <option value="retired">Retired</option>
              </select>
              {errors.employmentStatus && <p className="error">{errors.employmentStatus}</p>}
            </div>
            <div className="form-group">
              <label>Annual Income</label>
              <input
                type="number"
                name="annualIncome"
                inputMode="decimal"
                value={formData.annualIncome}
                onChange={handleChange}
              />
              {errors.annualIncome && <p className="error">{errors.annualIncome}</p>}
            </div>
            <div className="form-group">
              <label>Sources of Annual Personal Income</label>
              <select
                name="sourcesOfAnnualPersonalIncome"
                value={formData.sourcesOfAnnualPersonalIncome}
                onChange={handleChange}
              >
                <option value="">Select source of income</option>
                <option value="salary">Salary (Inc. Bonus)</option>
                <option value="pension">Pension</option>
                <option value="investment-rental">Investment/Rental Income</option>
                <option value="state-benefits">State Benefits</option>
                <option value="private-benefits">Private Benefits</option>
                <option value="student-grants">Student Grants/Bursaries</option>
              </select>
              {errors.sourcesOfAnnualPersonalIncome && (
                <p className="error">{errors.sourcesOfAnnualPersonalIncome}</p>
              )}
            </div>
            <div className="form-group">
              <label>Other Household Income</label>
              <input
                type="number"
                name="otherHouseholdIncome"
                inputMode="decimal"
                value={formData.otherHouseholdIncome}
                onChange={handleChange}
              />
              {errors.otherHouseholdIncome && <p className="error">{errors.otherHouseholdIncome}</p>}
            </div>
          </div>
        )}

                {/* Step 3: Review */}
                {step === 3 && (
          <div className='review-page'>
            <h3>Review Your Information</h3>
            <p><strong>Title :</strong> {formData.title}</p>
            <p><strong>First Name :</strong> {formData.firstName}</p>
            <p><strong>Last Name :</strong> {formData.lastName}</p>
            <p><strong>Date of Birth :</strong> {formData.dateOfBirth}</p>
            <p><strong>Nationality :</strong> {formData.nationality}</p>
            <p><strong>House Number :</strong> {formData.houseNumber}</p>
            <p><strong>Post Code :</strong> {formData.postCode}</p>
            <p><strong>Email :</strong> {formData.email}</p>
            <p><strong>Phone :</strong> {formData.phone}</p>
            <p><strong>Address :</strong> {formData.address}</p>
            <p><strong>Employment Status :</strong> {formData.employmentStatus}</p>
            <p><strong>Annual Income :</strong> {formData.annualIncome}</p>
            <p><strong>Sources of Annual Personal Income :</strong> {formData.sourcesOfAnnualPersonalIncome}</p>
            <p><strong>Other Household Income :</strong> {formData.otherHouseholdIncome}</p>
          </div>
        )}

        {/* Step 4: Terms and Conditions */}
        {step === 4 && (
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
              />
              I agree to the terms and conditions
            </label>
            {errors.agreeToTerms && <p className="error">{errors.agreeToTerms}</p>}
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="form-navigation">
          {step > 1 && (
            <button
              type="button"
              className="nav-btn back-btn"
              onClick={handlePrevStep}
            >
              Back
            </button>
          )}
          {step < 4 && (
            <button
              type="button"
              className="nav-btn next-btn"
              onClick={handleNextStep}
            >
              Next
            </button>
          )}
          {step === 4 && (
            <button
              type="button"
              className="nav-btn next-btn"
              onClick={handleNextStep}
            >
              Next
            </button>
          )}
          {step === 5 && (
            <button type="submit" className="nav-btn submit-btn">
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default OpenAccount;
