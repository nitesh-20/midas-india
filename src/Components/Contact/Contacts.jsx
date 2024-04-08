import React, { useState } from "react";

const Contacts = () => {
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
    <section className="bg-gray-100 py-12 pt-20">
                  <h1 className=" about w-full flex justify-center pt-2 text-3xl font-bold rounded-lg ">Contact midas</h1>

      <div className="container mx-auto pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="mx-auto max-w-md">
            <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.7794484723076!2d81.62760827421162!3d21.240592680471178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28ddbe89b29425%3A0x3a68531c92979c74!2sMIDAS%20INSTITUTE%20(Data%20Science%2C%20Full%20Stack%2C%20Web%2FApp%20Development%2C%20Cyber%20Security%20Training%20%26%20Certification%20Program%20in%20Raipur)!5e0!3m2!1sen!2sin!4v1712503328535!5m2!1sen!2sin"
        width="500"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
            <img src="" className="w-full rounded-lg shadow-md" />
          </div>
          <div>
            <form className="w-full max-w-lg mx-auto" onSubmit={submitData}>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <input 
                    type="text"
                    name="firstName"
                    className="form-input rounded-md w-full"
                    placeholder="First Name"
                    value={userData.firstName}
                    onChange={postUserData}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    className="form-input   rounded-md  w-full"
                    placeholder="Last Name"
                    value={userData.lastName}
                    onChange={postUserData}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="phone"
                    className="form-input rounded-md  w-full"
                    placeholder="Phone Number"
                    value={userData.phone}
                    onChange={postUserData}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    className="form-input rounded-md  w-full"
                    placeholder="Email Address"
                    value={userData.email}
                    onChange={postUserData}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="address"
                    className="form-input rounded-md  w-full"
                    placeholder="Address"
                    value={userData.address}
                    onChange={postUserData}
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    className="form-textarea rounded-md  w-full"
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

export default Contacts;
