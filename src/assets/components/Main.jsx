import { useState } from "react"

const Main = () => {

  const [title, setTitle] = useState('')
  

  return (
    <main>
      <div className='container-md py-5'>
        <h2 className="my-3 pb-3">Aggiungi un nuovo articolo</h2>
      <form action="#">
        <input 
        placeholder="Inserisci un titolo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text" 
        />
        <button type='submit' className='btn btn-lg btn-success mx-5'>Aggiungi</button>
      </form>
      <h3 className='my-5'>Lista dei post:</h3>
    </div>
    </main>
  )
}

export default Main