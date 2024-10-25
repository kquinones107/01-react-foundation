
export const BasicTypes = () => {

    const name:string = 'Kevin';
    const age: number = 27;
    const isActive: boolean = true;

    const powers: string[] = ['react', 'ReacNative', 'Angular','Vue'];

  return (
    <>
        <h3>Tipos básicos</h3>
        {name} {age} { isActive ? 'true': 'false' }

    </>
  )
}
