import React, { useState } from "react";

function Login() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
    tel: "",
    url: "",
    date: "",
    gender: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const validate = () => {
    let newErrors = {};

    // Name
    if (!formData.name.trim()) {
      newErrors.name = "Username is required";
    } else if (formData.name.length < 3) {
      newErrors.name = "Username must be at least 3 characters";
    }

    // Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    // Password
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    // Number
    if (!formData.number) {
      newErrors.number = "Number is required";
    } else if (formData.number <= 0) {
      newErrors.number = "Enter a valid number";
    }

    // Phone
    if (!formData.tel) {
      newErrors.tel = "Phone number required";
    } else if (formData.tel.length !== 10) {
      newErrors.tel = "Phone number must be 10 digits";
    }

    // URL
    if (!formData.url) {
      newErrors.url = "Website URL required";
    }

    // Date
    if (!formData.date) {
      newErrors.date = "Date is required";
    }

    // Gender (radio)
    if (!formData.gender) {
      newErrors.gender = "Please select gender";
    }

    // Terms (checkbox)
    if (!formData.terms) {
      newErrors.terms = "You must accept terms";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess("");
    } else {
      setErrors({});
      setSuccess("Form Submitted Successfully ✅");
      console.log(formData);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      password: "",
      number: "",
      tel: "",
      url: "",
      date: "",
      gender: "",
      terms: false,
    });
    setErrors({});
    setSuccess("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-300 via-gray-200 to-gray-400 flex items-center justify-center">
      
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-lg">
        
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Registration Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          
          <div>
            <input
              type="text"
              name="name"
              placeholder="Username"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-gray-700"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

    
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-gray-700"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-gray-700"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          
          <div>
            <input
              type="number"
              name="number"
              placeholder="Enter number"
              value={formData.number}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg"
            />
            {errors.number && <p className="text-red-500 text-sm">{errors.number}</p>}
          </div>

        
          <div>
            <input
              type="tel"
              name="tel"
              placeholder="Phone number"
              value={formData.tel}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg"
            />
            {errors.tel && <p className="text-red-500 text-sm">{errors.tel}</p>}
          </div>

   
          <div>
            <input
              type="url"
              name="url"
              placeholder="Website URL"
              value={formData.url}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg"
            />
            {errors.url && <p className="text-red-500 text-sm">{errors.url}</p>}
          </div>

          <div>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg"
            />
            {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
          </div>

 
          <div>
            <p className="text-sm font-medium mb-1">Gender</p>
            <label className="mr-4">
              <input type="radio" name="gender" value="Male"
                onChange={handleChange} /> Male
            </label>
            <label>
              <input type="radio" name="gender" value="Female"
                onChange={handleChange} /> Female
            </label>
            {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
          </div>

          <div>
            <label>
              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
              /> Accept Terms & Conditions
            </label>
            {errors.terms && <p className="text-red-500 text-sm">{errors.terms}</p>}
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-black transition"
            >
              Submit
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="w-full bg-gray-400 text-white py-2 rounded-lg hover:bg-gray-500 transition"
            >
              Reset
            </button>
          </div>

          {success && (
            <p className="text-green-600 text-center font-semibold mt-3">
              {success}
            </p>
          )}

        </form>
      </div>
    </div>
  );
}

export default Login;