export default function Contact(){
    return(
        <section className="flex flex-col sm:flex-col lg:flex-row items-center gap-24 lg:gap-72 p-4 sm:gap-10 md:flex-row "> {/* Responsive flex layout */}
        <div className="w-full max-w-lg mx-auto lg:mx-0 sm:mt-5  sm:w-auto"> {/* Centering on small screens */}
          <h1 className="text-black mb-2 text-3xl sm:text-5xl lg:text-5xl lg:leading-normal font-extrabold mt-10 lg:ml-20  ">
           Contact us :)
          </h1>
          <p className="w-full text-black font-bold pb-2 lg:w-80 md:w-80 lg:ml-20 ">
           Email:kashanjaved123456789@gmail.com</p>
        </div>
        <div className="flex-shrink-0"> {/* Prevent shrinking of the image container */}
          <img
            src="https://i.ibb.co/N3z8W8f/image1.jpg"
            alt="image1"
            height={300}
            width={300}
            className=" object-cover mt-1 lg:mt-20 md:mt-20 rounded-lg" // Square image
          />
        </div>
      </section>
    )
}