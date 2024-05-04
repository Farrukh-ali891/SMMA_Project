import React from 'react'

const Dashboard = () => {
  return (
    <>
    <section className="container mx-auto mt-10 font-body_font text-sm h-72 px-2">
        <div className="mx-2">
            <p className="text-gray-500">You are here: <a href="">Home</a> / <span className="text-gray-800">Swirl Marketing Dashboard</span></p>
        </div>
        <div className="h-full flex justify-center items-center">
            <h1 className="md:text-5xl text-3xl font-title_font text-primary_dark animate-textReveal text-center">Welcome back Haider</h1>
        </div>
    </section>
    
    </>
  )
}

export default Dashboard