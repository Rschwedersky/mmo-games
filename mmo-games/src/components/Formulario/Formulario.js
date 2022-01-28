import { ErrorMessage, Field, Form, Formik } from 'formik';

import { Botao, Model } from './Formulario.styles';


import * as Yup from 'yup';
import { useDarkMode } from '../../contexts/darkmode/useDarkMode';
import { useEffect, useRef, useState } from 'react';

export const Formulario = ({id}) => {
    
    const {dark} = useDarkMode();
    const[cadastroAberto, setCadastroAberto]= useState(false);
    const dados = useRef();
    const valuesRef = useRef();


    
    
    useEffect(() => {
        (async () => {
            const storage = localStorage.getItem(id);
          dados.current= storage;
        })();
      }, []);



  const handleSubmit = (values, { setSubmitting }) => {
  
        values.id= id;

        const newData = [...dados, values]
        
        
        /* setDados([...dados, values]); */
        setSubmitting(false);
        console.log('handle', newData);
    
        
  
     /* setTimeout(() => {
        values.id= id;
        alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000); */
  };

  const schema = Yup.object().shape({
    nome: Yup.string().required('Campo obrigatório').max(100, 'Máximo 100 caracteres'),
    email: Yup.string().required('Campo obrigatório').email('E-mail inválido'),
    comentario: Yup.string().required('Campo obrigatório').min(10, 'Mínimo 10 caracteres'),  
  });

  const initialValues = {
    nome: '',
    email: '',
    comentario: '',
  };

  return (<>
    <Model show={cadastroAberto} primary={dark}>
      <h2>Register</h2>

      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema} validateOnMount>
        {({ isSubmitting, resetForm, isValid }) => (
          <Form>
            {console.log('isValid', isValid)}

            <Field name="nome" placeholder="Nome" />
            <ErrorMessage name="nome" style={{ color: 'red' }} component="span" />
            
            <Field name="email" placeholder="E-mail" />
            <ErrorMessage name="email" style={{ color: 'red' }} component="span" /> 
            
            <Field name="comentario" placeholder="Comentario" />
            <ErrorMessage name="comentario" style={{ color: 'red' }} component="span" />

            <Botao dark={dark} type="submit" disabled={isSubmitting || !isValid}>
              Enviar
            </Botao>

            <Botao dark={dark} type="button" disabled={isSubmitting} onClick={resetForm}>
              Limpar
            </Botao>
          </Form>
        )}
      </Formik>
    </Model>
    <Botao dark={dark} onClick={()=>cadastroAberto?setCadastroAberto(false):setCadastroAberto(true)}>
        {cadastroAberto?'Close Comments Register':'Open Comments Register'}
    </Botao>










    </>);
};