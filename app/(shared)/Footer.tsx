import React from "react";

const Footer = () => {
  return (
    <footer className="px-10 py-10 bg-wh-900 text-wh-50">
      <div className="justify-between gap-16 mx-auto sm:flex">
        {/* First Column */}
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold">BLOG OF THE FUTURE</h4>
          <p className="my-5">
            Tempor sit id ipsum minim irure do pariatur consectetur. Veniam
            voluptate veniam laborum cillum non minim ut exercitation. Esse
            labore nulla duis et veniam cupidatat. Lorem duis magna consequat
            magna ullamco enim Lorem laborum do consectetur exercitation minim.
            Nostrud pariatur dolore anim aliquip est non laborum culpa eu sit
            non. Culpa elit nostrud excepteur duis excepteur dolore velit sint.
          </p>
          <p>©️ Blog of the Future All Rights Reserved.</p>
        </div>
        {/* Second Column */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Some random link again</p>
          <p>Ullamcorper vivamus</p>
        </div>
        {/* Third Column */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
          <p>(333)425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
