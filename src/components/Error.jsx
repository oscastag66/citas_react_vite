//const Error = ({mensaje}) => {
const Error = ({children}) => {
  return (
    <div className='bg-red-800 text-white text-center p-3 upercase font-bold mb-3'>
    {children}
   </div>
  )
}

export default Error
