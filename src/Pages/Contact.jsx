import React, { useState } from "react";

const Contact = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  const postUserData = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, lastName, phone, email, address, message } = userData;

    if (firstName && lastName && phone && email && address && message) {
      const res = await fetch(
        "https://reactfirebasewebsite-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            phone,
            email,
            address,
            message,
          }),
        }
      );

      if (res.ok) {
        setUserData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          address: "",
          message: "",
        });
        alert("Data Stored");
      } else {
        alert("Failed to store data");
      }
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <section className="bg-gray-100 py-12 pt-32">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="mx-auto max-w-md">
            <h1 className="text-3xl font-bold mb-4">Connect With Our Sales Team</h1>
            <p className="text-gray-600 mb-6">
              We are connected with companies with different industries across the nation. Our dedicated placement cell is constantly striving to get more companies on-board
            </p>
            <img src="" className="w-full rounded-lg shadow-md" />
          </div>
          <div>
            <form className="w-full max-w-lg mx-auto" onSubmit={submitData}>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    className="form-input w-full"
                    placeholder="First Name"
                    value={userData.firstName}
                    onChange={postUserData}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    className="form-input w-full"
                    placeholder="Last Name"
                    value={userData.lastName}
                    onChange={postUserData}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="phone"
                    className="form-input w-full"
                    placeholder="Phone Number"
                    value={userData.phone}
                    onChange={postUserData}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    className="form-input w-full"
                    placeholder="Email Address"
                    value={userData.email}
                    onChange={postUserData}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="address"
                    className="form-input w-full"
                    placeholder="Address"
                    value={userData.address}
                    onChange={postUserData}
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    className="form-textarea w-full"
                    rows="4"
                    placeholder="Your Message"
                    value={userData.message}
                    onChange={postUserData}
                  ></textarea>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="form-checkbox" id="agreeCheckbox" />
                  <label htmlFor="agreeCheckbox" className="ml-2 text-gray-400">I agree that the thapatechnicalpay may contact me at the email address or phone number above</label>
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-green-500 text-white font-semibold px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:bg-green-600"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
