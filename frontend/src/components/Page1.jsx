import React from 'react'
const Page1 = () => {
  return (
    <div className="w-full flex items-center justify-center py-8">
      <div className="w-10/12 md:w-9/12 flex bg-[#e45834] flex-col md:flex-row rounded-xl shadow-lg overflow-hidden">
        <div className="w-full md:w-1/2 p-4 md:p-8 h-full">
          <h1 className="text-4xl md:text-[3.6vw] text-white font-bold leading-tight">
            Something hot.
          </h1>
          <h1 className="text-4xl md:text-[3.6vw]  text-white font-bold leading-tight">
            Something tasty.
          </h1>
          <p className="text-md md:text-[1.3vw] leading-none  my-1 md:my-4 text-white">
            At Food Time - your destination for menu viewing, reservations, and
            easy dine-in or takeaway ordering of Aromatic, Delicious, Flavorful,
            mouth-watering, Nutritious, Satisfying, Savory, Tasty, Yummy.
            Appetizing, Delectable, Saccharine Food.
          </p>
          <button
            className="relative my-4 px-4 py-2 rounded-full
           bg-white isolation-auto z-10 border-2 border-neutral-50 
            before:absolute before:w-full before:transition-all before:duration-700 
            before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full
            before:bg-green-600 text-black before:-z-10 before:aspect-square
             before:hover:scale-150 overflow-hidden before:hover:duration-700 text-md font-semibold"
          >
            Explore More
          </button>
        </div>
        <div className="w-full md:w-1/2 grid grid-cols-2 grid-rows-2 h-[400px] xl:h-[500px] bg-white">
          <div className="col-span-1 items-center justify-center bg-[url('https://s3-alpha-sig.figma.com/img/e8be/a1f6/4f4d6f51f61e827e05a12ce08652bf35?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R2yIpKPqcEGc~nXctvhRiVGsGvWZz87967Hx4us54Kg3sKjGM~uK2zxZzzHLBXTh0pGT375AbrWR6icTJxT-LqUShASMHKI5hpomCeH6Qc4~ADGqbRs32JOa7hTbbwltiFz07WPT6OgxWqJe1Lp77wUTM2C6vDfxgrI-7HGgG5zz9XV9NY61ooeiNUE-yEpzaR3AC2DYdl3~HJbltTeIKnCGQt3A2qiiANqf~S7~7sa8DYP2ePTIkOlPjFYUDLYPrQcJlExFYMY95murghwt6kpO0OzJj2vXvolL2jgXMpCMAXUWI3VwivPJ1w3PPaucKSJ-5Y22W8IPf5pUTzCOmw__')] bg-cover bg-no-repeat  bg-center "></div>
          <div className="col-span-1 items-center justify-center bg-[url('https://s3-alpha-sig.figma.com/img/4f74/2487/4254fc46a579f0342b0f92772de7e1d4?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iC6t3ZS2GiVSaOAliOZncxr8v1vypjNZetOY1mhVcVCQcD2DwEAhtAZesfrF7vsYn5SAUCYX5xXF-DA0HE5rDG0T~fPp5L3YhPcIYSyi7NNOyljFTgwS0f4cyGX1FozBYIslePb55Pcw7cH2BEreCGbZgt43ZUKD6vHbEGAEZd8a6RbIKm8UyNNDas-yH87OGNL2om2mwy5xAhW5IfAWcOPxS6TQdDokj05rtHK6hCHWWouOA2AHGeRjMdzxOrVFNWbC~RWVzg8IJnsCBcPhYSiFxyEr90O0SYYjUh6CbbWcDHFc7dKOE5bUN~cnk~SqbyJ8xe3Pc6ZezbDKI8DDVQ__')] bg-cover bg-no-repeat  bg-center "></div>
          <div className="col-span-1 items-center justify-center bg-[url('https://s3-alpha-sig.figma.com/img/01ca/29cb/4d79354366d859e59d913396b0739589?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z6xNqDX51gcbcs9xKdR4kBK1sQuZUgTujSTwTdXzs3MNj1HhZfLB5cgJsQ2nd1JjfxWsi5j818W~adP7T3GtoWh6L3vX7Ufw-bpP2dehQ4f-Il-OrNJ-yqZAYQktNcBj2RbNlfY1PlGhFWVO4mED9qAkQIMEiwW9WVeCutCXLiwvyHIHsIxuox0PbQM0HJtJClajQJ9KT6rl7N4d8bYtCK5k0g3xqHpWkPxAtL-ZWQ~ZJ8hbw3Ic2nRJzMCJ7pUvqgY7idEjNddIAj1s8QRi-0-Pa8fK-ytprPn1VteruKjmyuHPIiaEb1m6iVQaYB-H3IfgixESi6pXUTSCyszduA__')]  bg-no-repeat bg-cover bg-center"></div>
          <div className="col-span-1 items-center justify-center bg-[url('https://s3-alpha-sig.figma.com/img/3ee6/5b82/0c7fa0a740390ebfd2feb3b0b85df532?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=buPau-b9SU9joTyyhGen3Uc6ueBwloQwbpMIim6QH2pj4xT2nD3P3FuDw2ZVxFwXEQxH8nGXIeyAm-Kf9NVEtBS7HudEY6DJd2azAjOfYtgs0ykG3yLzVhfbongnraby01YcI32MhRCHz3NlbuHCarBj9RM-5DWJ7HkJGtoXMjFrRCbBiJk-IoUoWU1UCL6aatMRG~rQmwFIE4wD70mOLfjyFaZfc3kwTqIUuZ3baMibPliC2m5JNR6PNSjQyb-e~d7iw3BIcXzETcReXWYm57M2lR9QlW0NrUo65E9qj0na8uPrTDpqBrzmtYJBVwls7HutL-iyCE7CcJ9JB2J6wg__')]  bg-no-repeat bg-cover bg-center"></div>
        </div>
      </div>
    </div>
  )
}

export default Page1
