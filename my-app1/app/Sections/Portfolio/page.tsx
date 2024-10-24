export default function Porfolio(){
    return(
        <section className="flex flex-col sm:flex-col lg:flex-row items-center gap-24 lg:gap-72 p-4 sm:gap-10 md:flex-row "> {/* Responsive flex layout */}
        <div className="w-full max-w-lg mx-auto lg:mx-0 sm:mt-5  sm:w-auto"> {/* Centering on small screens */}
          <h1 className="text-black mb-2 text-3xl sm:text-5xl lg:text-5xl lg:leading-normal font-extrabold mt-10 lg:ml-20  ">
          Portfolio:
          </h1>
          <p className="w-full text-black font-bold pb-2 lg:w-80 md:w-80 lg:ml-20 ">
          <h2 className="font-extrabold ">- Skills : </h2>
        <h3>Web Development:</h3>
        <ul >
            <li>- HTML</li>
            <li>- CSS</li>
            <li>- TypeScript</li>
            <li>- Next.js</li>
        </ul><br/>
        <h3>Soft Skills:</h3>
        <ul>
            <li>- Problem-solving</li>
            <li>- Teamwork</li>
            <li>- Communication</li>
        </ul>
          </p>
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