import React from "react";
// import "./Contact.css";
function Contact() {
  return ( 
    <section class="bg-gray-100">
      <h1 className="text-3xl font-bold text-center ">
  Wanna <span className="text-green-500 italic">Start Work</span> With Me
</h1>
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">

    <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5"> 
    <div class="rounded-lg bg-gray-50  p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form action="#" class="space-y-4">
          <div>
            <label class="sr-only" for="name">Name</label>
            <input
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Name"
              type="text"
              id="name"
            />
          </div>

          <div class="grid grid-cols-1 gap-4 ">
            <div>
              <label class="sr-only" for="email">Email</label>
              <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Email address"
                type="email"
                id="email"
              />
            </div>

            <div>
              <label class="sr-only" for="phone">Phone</label>
              <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Phone Number"
                type="tel"
                id="phone"
              />
            </div>
          </div>
          

          <div>
            <label class="sr-only" for="message">Message</label>

            <textarea
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Message"
              rows="8"
              id="message"
            ></textarea>
          </div>

          <div class="mt-4">
            <button
              type="submit"
              class="inline-block w-full rounded-lg bg-green-400 px-5 py-3 font-medium text-white sm:w-auto"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      
      <div class="lg:col-span-2 lg:py-12">
      <h1 className="text-2xl font-bold mb-2">Emails</h1>
  <p className="mb-4">usnasesandra22@gmail.com</p>
  <h1 className="text-2xl font-bold mb-2">Phone</h1>
  <p className="mb-4">0789146226</p>
  <h1 className="text-2xl font-bold mb-2">ADDRESS</h1>
  <p>kigali, Rwanda</p>

    
      </div>

      
    </div>
  </div>
</section>
    // <div className="contact">
    //     <h1>Wanna<span> Start Work</span>With Me?</h1>
    //   <div className="cont">
    //     <div className="touch">
        
    //      <form action="">
    //      <h2>Get In Touch</h2>
    //       <input
    //         type="text"
    //         id="name"
    //         name="name"
    //         placeholder="your name"
    //       /><br /><br />
    //       <input
    //         type="text"
    //         id="email"
    //         name=""
    //         value=""
    //         placeholder="your email"
    //       /><br /><br />
    //       <input
    //         type="text"
    //         id=""
    //         name=""
    //         value=""
    //         placeholder="your phone"
    //       /><br /><br />
    //       <textarea id="message" name="message" required></textarea><br /><br />
    //       </form>
    //     </div>
    //     <div className="details">
    //         <div className="mt-0 ">
    //         <h1 className="mt-0">My Contact details </h1>
    //         <h2>EMAILS</h2>
    //     <p>usanasesandra22@gmail.com</p>
    //     <h2>PHONE</h2>
    //     <p>0789146226</p>
    //     <h2>ADDRESS</h2>
    //    <p>Kigali, kanombe</p>
    //    <p>street 96kk st</p>
    //         </div>
            

    //     </div>
    //     </div>

    //   </div>
  );
}

export default Contact;
