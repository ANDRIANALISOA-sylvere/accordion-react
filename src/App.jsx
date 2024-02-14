import './App.css'
import Accordion from './Accordion'

function App() {
  const accordion=[
    {
      title : 'Section 1',
      message : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      status : false
    },
    {
      title : 'Section 2',
      message : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      status : false
    },
    {
      title : 'Section 3',
      message : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      status : false
    },
  ]
  return (
    <>
      <div className='app'>
        {accordion.map((item,index)=> <Accordion key={index} title={item.title} message={item.message} status={item.status}></Accordion>)}
      </div>
    </>
  )
}

export default App
