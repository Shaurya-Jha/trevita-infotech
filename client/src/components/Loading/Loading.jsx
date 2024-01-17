import ReactLoading from 'react-loading'

export default function Loading() {
  return (
    <div className='flex justify-center items-center h-screen'>
        <ReactLoading type='cubes' color='' height={50} width={50} />
    </div>
  )
}
