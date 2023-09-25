
import './App.css'
import SimpleForm from './Components/SimpleForm/SimpleForm'
import RefFrom from './Components/SimpleForm/RefFrom/RefFrom'
import HookForm from './Components/HookForm/HookForm'
import ReusableForm from './Components/SimpleForm/RefFrom/ReusableForm'
import Grandpa from './Components/Grandpa/Grandpa'

function App() {
 

  const handleSignUpSubmit = data => {
    console.log('login', data)
}

  const handleUpdateSubmit = data => {
   console.log('Update',data)
}

  return (
    <>
      
        
      <h1>Vite + React</h1>

      <Grandpa></Grandpa>

      <SimpleForm className='mb-10'></SimpleForm>
      <RefFrom ></RefFrom>

      <HookForm></HookForm>

      <ReusableForm formTitle ={'update '} handleSubmit={handleSignUpSubmit}>
        <div>
          <h1>sing up</h1>
          <p>right now</p>
        </div>
      </ReusableForm>
      <ReusableForm formTitle ='Profile Update' handleSubmit={handleUpdateSubmit} submitBtn='Update'>
        <div>
          <h1>update profile</h1>
          <p>right now</p>
        </div>
      </ReusableForm>
     
    </>
  )
}

export default App
