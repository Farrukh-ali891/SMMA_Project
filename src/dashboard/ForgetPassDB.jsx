import React from 'react'

const ForgetPassDB = () => {
  return (
    <>
            <section className="bg-gray-100">
                <div className="container mx-auto pt-14 pb-8">
                    <div className="lg:w-[40%] md:w-[70%] w-[90%] mx-auto py-4 px-2 bg-white rounded-md text-gray-500">
                        <div className="text-center">
                            <a href="" className="text-4xl text-primary_dark font-title_font tracking-wide">Swirl Marketing</a>
                        </div>
                        <form action="" className="mx-auto px-4 pb-6">
                            <div className="my-3">
                                <label htmlFor="" className="block my-2">Email Address</label>
                                <input type="text" className="w-full px-4 py-2 rounded-lg border-[1px] border-gray-400" placeholder="Email" />
                            </div>
                            <button className="w-full py-2 rounded-lg uppercase transition-all duration-300 ease-in-out border-2 border-primary_dark hover:bg-primary_dark hover:text-white my-2">Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
  )
}

export default ForgetPassDB