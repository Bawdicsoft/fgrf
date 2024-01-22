import React, { useRef, useState } from "react";

interface DetailsSecProps {
  submitHandler: () => void;
  dollarDonate: number;
  titleDonate: string;
}
const DetailsSec: React.FC<DetailsSecProps> = ({
  dollarDonate,
  titleDonate,
  submitHandler,
}) => {
  const titleRef = useRef<any>();
  const firstNameRef = useRef<any>();
  const lastNameRef = useRef<any>();
  const emailRef = useRef<any>();
  const contactNoRef = useRef<any>();
  const addressRef = useRef<any>();
  const address2Ref = useRef<any>();
  const cityRef = useRef<any>();
  const countryRef = useRef<any>();

  submitHandler = () => {
    const title = titleRef.current.value;
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const email = emailRef.current.value;
    const contactNo = contactNoRef.current.value;
    const address = addressRef.current.value;
    const address2 = address2Ref.current.value;
    const city = cityRef.current.value;
    const country = countryRef.current.value;
    if (
      title &&
      firstName &&
      lastName &&
      email &&
      contactNo &&
      address &&
      address2 &&
      city &&
      country
    ) {
      return {
        title,
        firstName,
        lastName,
        email,
        contactNo,
        address,
        address2,
        city,
        country,
      };
    } else {
      return false;
    }
  };
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
                ref={titleRef}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#19afaf] focus:border-none focus:ring-2 focus:outline-none block w-full p-2.5 "
              >
                <option>Title</option>
                <option>Mr</option>
                <option>Ms</option>
                <option>Msr</option>
                <option>Dr</option>
              </select>
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
                ref={firstNameRef}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#19afaf] focus:border-none focus:ring-2 focus:outline-none block w-full p-2.5 "
                placeholder="First Name"
                required
              />
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
                ref={lastNameRef}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#19afaf] focus:border-none focus:ring-2 focus:outline-none block w-full p-2.5 "
                placeholder="Last Name"
                required
              />
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
                ref={emailRef}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#19afaf] focus:border-none focus:ring-2 focus:outline-none block w-full p-2.5 "
                placeholder="your@email.com"
                required
              />
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
                ref={contactNoRef}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#19afaf] focus:border-none focus:ring-2 focus:outline-none block w-full p-2.5 "
                placeholder="0237278327"
                required
              />
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
              ref={addressRef}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#19afaf] focus:border-none focus:ring-2 focus:outline-none block w-full p-2.5 "
              placeholder="123 High Street"
              required
            />
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
              ref={address2Ref}
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
                ref={cityRef}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#19afaf] focus:border-none focus:ring-2 focus:outline-none block w-full p-2.5 "
                placeholder="Enter City"
                required
              />
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
                ref={countryRef}
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
            </div>
          </div>
          <h2 className="text-3xl font-bold py-4 text-[#19afaf] text-center">
            KEEP IN TOUCH
          </h2>
          <div className="flex justify-center items-center mb-5">
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
          </div>
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
