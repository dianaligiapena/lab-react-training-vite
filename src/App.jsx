import './App.css'
import BoxColor from './components/BoxColor'
import CreditCard from './components/CreditCard'
import Greetings from './components/Greetings'
import IdCard from './components/IdCard'
import Random from './components/Random'

function App() {

  return (
    <div className="App">

<h1>Iteration 5 - Credit card</h1>
<div className='iteration'>
<CreditCard
  type="Visa"
  number="0123456789018845"
  expirationMonth={3}
  expirationYear={2021}
  bank="BNP"
  owner="Maxence Bouret"
  bgColor="#11aa99"
  color="white"
/>
</div>


<h1>Iteration 4 - Box Color</h1>
<div className='iteration'>
    <BoxColor r={255} g={0} b={0} />
    <BoxColor r={128} g={255} b={0} />
</div>

<h1>Iteration 3 - Random number</h1>
<div className='iteration'>
    <Random min={1} max={100} />
    <Random min={1} max={6} />
</div>

<h1>Iteration 2 - Greetings languages</h1>
<div className='iteration'>
    <Greetings lang="de"> Ludwig</Greetings>
    <Greetings lang="fr"> François</Greetings>
</div>

<h1>Iteration 1 - Id Cards</h1>
<div className='iteration'>
      <IdCard   lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg" />
        <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
</div>


    </div>
  )
}

export default App
