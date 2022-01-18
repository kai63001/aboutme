import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
    const form:any = useRef();

    const sendEmail = (e:any) => {
      e.preventDefault();
      emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID as string, process.env.NEXT_PUBLIC_TEMPLATE_ID as string, form.current, process.env.NEXT_PUBLIC_USER_ID as string)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
      <div className="">
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-6">
            <input
              type="text"
              name="to_name"
              className="px-3 py-2 rounded-md w-full bg-gray-900 border-2 border-purple-900"
              placeholder="Full name*"
            />
          </div>
          <div className="mb-6">
            <input
              type="email"
              name="from_name"
              className="px-3 py-2 rounded-md w-full bg-gray-900 border-2 border-purple-900"
              placeholder="Email*"
            />
          </div>
          <div className="mb-6">
            <textarea
              cols={30}
              rows={7}
              name="message"
              className="px-3 py-2 rounded-md w-full bg-gray-900 border-2 border-purple-900"
              placeholder="Message*"
            ></textarea>
            {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
          </div>
          <div className="">
            <button
              type="submit"
              className="bg-purple-900 px-10 py-2 rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className=" h-full">
        <img
          src="./contact.png"
          className="sm:-mt-10"
          height="100%"
          width="100%"
          alt=""
        />
      </div>
    </div>
  );
};

export default Contact;
