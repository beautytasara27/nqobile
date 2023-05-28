import { forwardRef, useContext } from "react";
import AppContext from "../../context/AppContext";
const Contact = forwardRef((props, ref) => {
  const { Contact } = useContext(AppContext);
  return (
    <div className="bg-themeDarker">
      <div className="flex justify-center  h-screen  sm:mt-0 mb-10 mx-4 sm:mx-6 lg:mx-8 xl:0 ">
        <div className="w-full max-w-6xl font-rubik-regular mt-20">
          <div className="flex justify-start">
            <h1
              ref={ref}
              className=" scroll-mt-40 font-anton-regular tracking-wider text-2xl mb-20 text-white"
            >
              <span className="pr-4 text-yello">04.</span>Get A Quote
            </h1>
          </div>
          <div className="sm:flex w-full space-y-4 sm:space-y-0 text-sm">
            <div className="sm:w-1/2">
              <h2 className="mt-2 mb-4 text-2xl ">Contact Details</h2>
              <p className="mt-2 mb-4 text-gray-300 ">
                Get in touch with the professionals at Richjane Enterprise for
                quality services at competitive prices.{" "}
              </p>
              <div className="flex flex-col space-y-4 ">
                <div className="flex space-x-2 group">
                  <i class="fa-solid fa-location-dot group-hover:text-yello"></i>
                  <p>
                    Address: Richjane Enterprise, CsC Spoel Road, Box 270 Kadoma
                  </p>
                </div>
                <div className="flex space-x-2 group">
                  <i class="fa-solid fa-envelope group-hover:text-yello"></i>
                  <a href="mailto:example@example.com">
                    Email: richjane2019@gmail.com
                  </a>
                </div>

                <div className="flex space-x-2 group">
                  <i class="fa-sharp fa-solid fa-phone group-hover:text-yello"></i>
                  <a href="tel:+1234567890">Phone: +263 773 599 094</a>
                </div>
                <div className="flex space-x-2 group">
                  <i class="fa-sharp fa-solid fa-phone group-hover:text-yello"></i>
                  <a href="tel:+1234567890">Phone: +263 773 776 664</a>
                  <p></p>
                </div>
                <div className="flex space-x-2 group">
                  <i class="fa-sharp fa-solid fa-phone group-hover:text-yello"></i>
                  <a href="tel:+1234567890">Phone: +263 774 368 973</a>
                  <p></p>
                </div>
              </div>
            </div>
            <form name="contact" method="POST" data-netlify="true">
            <p>
              <label>Your Name: <input type="text" name="name" /></label>
            </p>
            <p>
              <label>Your Email: <input type="email" name="email" /></label>
            </p>
            <p>
              <label>Your Role: <select name="role[]" multiple>
                <option value="leader">Leader</option>
                <option value="follower">Follower</option>
              </select></label>
            </p>
            <p>
              <label>Message: <textarea name="message"></textarea></label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
          
          </div>
        </div>
      </div>
    </div>
  );
});
export default Contact;
