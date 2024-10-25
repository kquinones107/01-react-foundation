
interface Person {
    firsName: string;
    lastName: string;
    age: number;
    address: Address;
    isAlive?: boolean;
}
interface Address {
    country: string;
    houseNo: number;
}

export const ObjectLiteral = () => {

    const person: Person = {
        age: 27,
        firsName: 'Kevin',
        lastName: 'Quiñones',
        address: {
            country: 'Colombia',
            houseNo: 78
        }
    };
  return (
    <>
    <h3>Object Literal</h3>
    <pre>
    { JSON.stringify( person, null, 2)}
    </pre>
    </>
  );
};
