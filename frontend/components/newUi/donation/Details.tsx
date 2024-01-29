import React, { useRef, useState } from "react";

interface DetailsSecProps {
  submitHandler: (
    title: string,
    firstName: string,
    lastName: string,
    email: string,
    contactNo: string,
    address: string,
    address2: string,
    city: string,
    country: string
  ) => void;

  dollarDonate: number;
  titleDonate: string;
  showFormText: boolean;
}
const DetailsSec: React.FC<DetailsSecProps> = ({
  dollarDonate,
  titleDonate,
  showFormText,
  submitHandler,
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  submitHandler(
    title,
    firstName,
    lastName,
    email,
    contactNo,
    address,
    address2,
    city,
    country
  );

  return (
    <div>
      <h2 className="text-3xl font-bold text-[#19afaf] text-center">
        YOUR DETAILS
      </h2>
      <p className="text-gray-700 text-base py-4 text-center">
        Your Monthly Donation : ${dollarDonate}.00
      </p>
      <p className="bg-gray-300 h-[2px] w-full"></p>
      <div className="py-2 flex justify-between">
        <p className="text-gray-700 text-base">{titleDonate}</p>
        <p className="text-gray-700 text-base">{dollarDonate}</p>
      </div>
      <p className="bg-gray-300 h-[2px]  w-full"></p>

      <div>
        <form className="max-w-2xl mx-auto py-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="mb-5">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Title
              </label>
              <select
                id="countries"
                // ref={titleRef}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#19afaf] focus:border-none focus:ring-2 focus:outline-none block w-full p-2.5 "
              >
                <option>Title</option>
                <option>Mr</option>
                <option>Ms</option>
                <option>Msr</option>
                <option>Dr</option>
              </select>
              {showFormText && (
                <p className="text-red-500 text-xs">Please Select One</p>
              )}
            </div>
            <div className="md:col-span-2 mb-5">
              <label
                htmlFor="FirstName"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                First Name
              </label>
              <input
                type="FirstName"
                id="FirstName"
                // ref={firstNameRef}
                onChange={(e) => setFirstName(e.target.value)}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#19afaf] focus:border-none focus:ring-2 focus:outline-none block w-full p-2.5 "
                placeholder="First Name"
                required
              />
              <p className="text-red-500 text-xs">Please fill the blank</p>
            </div>
            <div className="md:col-span-2 mb-5">
              <label
                htmlFor="LastName"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Last Name
              </label>
              <input
                type="LastName"
                id="LastName"
                // ref={lastNameRef}
                onChange={(e) => setLastName(e.target.value)}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#19afaf] focus:border-none focus:ring-2 focus:outline-none block w-full p-2.5 "
                placeholder="Last Name"
                required
              />
              {showFormText && (
                <p className="text-red-500 text-xs">Please fill the blank</p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                // ref={emailRef}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#19afaf] focus:border-none focus:ring-2 focus:outline-none block w-full p-2.5 "
                placeholder="your@email.com"
                required
              />
              {showFormText && (
                <p className="text-red-500 text-xs">Please fill the blank</p>
              )}
            </div>
            <div className="mb-5">
              <label
                htmlFor="ContactNumber"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Contact Number
              </label>
              <input
                type="ContactNumber"
                id="ContactNumber"
                // ref={contactNoRef}
                onChange={(e) => setContactNo(e.target.value)}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#19afaf] focus:border-none focus:ring-2 focus:outline-none block w-full p-2.5 "
                placeholder="0237278327"
                required
              />
              {showFormText && (
                <p className="text-red-500 text-xs">Please fill the blank</p>
              )}
            </div>
          </div>
          <div className="mb-5">
            <label
              htmlFor="Address"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Address
            </label>
            <input
              type="Address"
              id="Address"
              // ref={addressRef}
              onChange={(e) => setAddress(e.target.value)}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#19afaf] focus:border-none focus:ring-2 focus:outline-none block w-full p-2.5 "
              placeholder="123 High Street"
              required
            />
            {showFormText && (
              <p className="text-red-500 text-xs">Please fill the blank</p>
            )}
          </div>
          <div className="mb-5">
            <label
              htmlFor="Address"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Address 2
            </label>
            <input
              type="Address"
              id="Address"
              // ref={address2Ref}
              onChange={(e) => setAddress2(e.target.value)}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#19afaf] focus:border-none focus:ring-2 focus:outline-none block w-full p-2.5 "
              placeholder="123 High Street"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-5">
              <label
                htmlFor="Address"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Town City
              </label>
              <input
                type="Address"
                id="Address"
                // ref={cityRef}
                onChange={(e) => setCity(e.target.value)}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#19afaf] focus:border-none focus:ring-2 focus:outline-none block w-full p-2.5 "
                placeholder="Enter City"
                required
              />
              {showFormText && (
                <p className="text-red-500 text-xs">Please fill the blank</p>
              )}
            </div>
            <div className="mb-5">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Country
              </label>
              <select
                id="countries"
                // ref={countryRef}
                onChange={(e) => setCountry(e.target.value)}
                className="bg-gray-50 outline-0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#19afaf] focus:border-none focus:ring-2 focus:outline-none block w-full p-2.5 "
              >
                <option className="">Select Your Country</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
                <option>Germany</option>
                <option>Germany</option>
                <option>Germany</option>
                <option>Germany</option>
                <option>Germany</option>
                <option>Germany</option>
                <option>Germany</option>
                <option>Germany</option>
                <option>Germany</option>
                <option>Germany</option>
                <option>Germany</option>
                <option>Germany</option>
                <option>Germany</option>
                <option>Germany</option>
                <option>Germany</option>
                <option>Germany</option>
                <option>Germany</option>
                <option>Germany</option>
                <option>Germany</option>
                <option>Germany</option>
              </select>
              {showFormText && (
                <p className="text-red-500 text-xs">
                  Please Select Your Country
                </p>
              )}
            </div>
          </div>
          <h2 className="text-3xl font-bold py-4 text-[#19afaf] text-center">
            KEEP IN TOUCH
          </h2>
          {/* <div className="flex justify-center items-center mb-5">
            <input
              id="terms"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-[#19afaf] focus:border-0 "
              required
            />
            <label
              htmlFor="terms"
              className="ms-2 text-lg font-medium text-gray-600"
            >
              Yes, I would like to hear from IRW{" "}
            </label>
          </div> */}
          <p className="text-gray-500 text-sm text-center ">
            We would like to keep in touch with you to share the latest info on
            our work as well as how your donations have helped, via email. We
            will always treat your personal information with the utmost care and
            will keep it private.
          </p>
        </form>
      </div>
    </div>
  );
};
export default DetailsSec;
