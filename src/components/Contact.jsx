import { contactData } from '../constants'

const Contact = () => {
  return (
      <div className='mt-[41px]'>
        <div>
        <h3 className='text-center text-blue-400 font-bold'>GET IN TOUCH</h3>
      <h1 className='text-center text-indigo-900 font-bold text-[20px]'>Contact</h1>
      </div>
    <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 mt-10">
      {contactData.map((item) => (
        <div className={`${item.bg} p-6 shadow-md h-40 flex flex-col justify-center`}>
          <span className="text-3xl mb-3">{item.icon}</span>
          <h2 className="font-bold text-sm mb-1">{item.title}</h2>
          <p className="text-sm">{item.text1}</p>
          <p className="text-sm">{item.text2}</p>
        </div>
      ))}
    </div>
      </div>
  )
}

export default Contact