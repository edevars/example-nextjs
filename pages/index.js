import Counter from '../components/Counter'

function Home(){
    return(
        <>
        <h1>Contadores</h1>
        <Counter 
          initialValue={0}
        />
        <Counter 
          initialValue={-100}
        />
        <Counter 
          initialValue={15}
        />
        <Counter 
          initialValue={4}
        />
      </>
    )
}

export default Home