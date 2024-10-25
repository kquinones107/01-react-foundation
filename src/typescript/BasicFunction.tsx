

export const BasicFunction = () => {

    const addTwoNumer = ( a:number, b:number): string => {
        return (a + b).toString
    }

  return (
    <>
    <h3>Funciones</h3>
    <span> El resultado de sumar: { addTwoNumer(2,8)}</span>
    </>
  )
}
