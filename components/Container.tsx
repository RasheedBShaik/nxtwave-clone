
const Container = ({ children }:{children: React.ReactNode}) => {
  return (
    <div className='w-full max-w-300 mx-auto'>
      {children}
    </div>
  )
}

export default Container
