import { useForm } from "react-hook-form"

type FormInputs = {
  email: string;
  password: string;
}

export const FormsPage = () => {

const { register } = useForm<FormInputs>({
  defaultValues: {
    email: 'kevinquinones177mqgmail.com',
    password: 'abc123'
  }
});

  return (
    <>
      <form>
        <h3>Formulario</h3>

        <div style={{display: 'flex', flexDirection: 'column'}}>
          <input type="text" placeholder="Email" { ...register('email')} />

          <input type="text" placeholder="password" { ...register('password')} />

          <button type="submit">Ingresar</button>
        </div>
      </form>
    
    </>
  )
}
