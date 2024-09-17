"use client";

import { useState } from "react";
import SectionTitle from "@/components/styled-elements/section-title";

const ContactComponent = () => {
  //   const [formData, setFormData] = useState({
  //     name: "",
  //     email: "",
  //     phoneNo: "",
  //     message: "",
  //   });
  //   const [state, handleSubmit] = useForm("mnqkjevq");

  //   const handleFormInput = (event) => {
  //     const name = event.target.name;
  //     let value = event.target.value;
  //     if (name == "phoneNo") {
  //       value = value.replace(/\D/, "");
  //     }

  //     setFormData({
  //       ...formData,
  //       [name]: value,
  //     });
  //   };

  const state = {
    succeeded: false,
  };

  if (state.succeeded) {
    return (
      <section id="contact" className="overflow-hidden md:py-10 lg:py-5">
        <SectionTitle
          title="Thank You for Your Submission"
          paragraph="Our Team Will Reach out to your very soon!!"
          center
          width="1000px"
        />
      </section>
    );
  }

  return (
    <section id="contact" className="overflow-hidden max-w-7xl">
      <div className="container flex flex-col items-center">
        <div className="">
          <div className="px-4 lg : px-0">
            <div
              className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <form>
                <div className="-mx-1 flex flex-wrap mx-auto justify-between xl:justify-center">
                  <div className="w-full px-2 md:w-1/2 xl:w-1/3">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required={true}
                        placeholder="Enter your name"
                        className="w-full rounded-md border border-gray-600 focus:border-black-800 focus:border-2 px-6 py-3 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none  dark:bg-[#111111] dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-2 md:w-1/2 xl:w-1/3">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Mobile No.
                      </label>
                      <input
                        type="text"
                        name="phoneNo"
                        // value={formData.phoneNo}
                        // onChange={handleFormInput}
                        required={true}
                        maxLength={10}
                        placeholder="Enter your mobile no."
                        className="w-full rounded-md  border border-gray-600  focus:border-black-800 focus:border-2  px-6 py-3 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary  dark:bg-[#111111] focus-visible:shadow-none dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-2 md:w-1/2 xl:w-1/3">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        required={true}
                        name="email"
                        placeholder="Enter your email"
                        className="w-full rounded-md border border-gray-600  focus:border-black-800 focus:border-2  px-6 py-3 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#111111] dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-2">
                    <div className="mb-8">
                      <label
                        htmlFor="requirment"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Please explain a bit about your project or the type of
                        website you want..
                      </label>
                      <textarea
                        rows={5}
                        placeholder="Enter your Message"
                        name="message"
                        required={true}
                        className="w-full resize-none rounded-md border border-gray-600 focus:border-black-800 focus:border-2   px-6 py-3 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#111111] dark:shadow-signUp"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-3/3 lg:w-1/3 flex mx-auto justify-center">
                    <button
                      type="submit"
                      className="rounded-md min-w-full mx-auto font-black bg-primary px-9 py-4 text-bold dark:text-black text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
                    >
                      Submit Enquiry
                    </button>
                  </div>
                </div>
              </form>

              {/* <ValidationError errors={state.errors} /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
