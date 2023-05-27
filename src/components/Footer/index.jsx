const Footer = () => {
  return (
    <div className="font-rubik-regular text-sm">
      <div className=" flex flex-col space-y-4 py-5 justify-center items-center  font-rubik-bold text-gray-400">
        <h1 className="text-mint uppercase text-center font-anton-regular text-2xl tracking-[.25em]">
          RichJane Enterprise
        </h1>

        <div className="sm:flex space-x-4 text-white">
          <i className="fa-regular  fa-envelope "></i>
          <i className="fa-brands  fa-instagram "></i>
          <i className="fa-brands  fa-facebook-f "></i>
        </div>
        <div className="flex flex-col items-center space-y-4 px-4">
          <div className="flex space-x-2 group">
            <i class="fa-solid fa-location-dot group-hover:text-yello"></i>
            <p className="text-center">Address: Richjane Enterprise, CsC Spoel Road, Box 270 Kadoma</p>
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
            <a href="tel:+1234567890">Phone: +263 774 368 973</a>
            <p></p>
          </div>
          <div className="flex space-x-2 group">
                  <i class="fa-sharp fa-solid fa-phone group-hover:text-yello"></i>
                  <a href="tel:+1234567890">Phone: +263 773 776 664</a>
                  <p></p>
                </div>
        </div>
        <p> &copy;Designed and developed by XScript.</p>
      </div>
    </div>
  );
};
export default Footer;
