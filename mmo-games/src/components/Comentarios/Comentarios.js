import { useEffect, useState } from 'react';
import { Botao, Card, Model } from './Comentarios.styles';

import { ErrorMessage, Field, Form, Formik } from 'formik';

import * as Yup from 'yup';
import { useDarkMode } from '../../contexts/darkmode/useDarkMode';
import { CardComentario } from '../CardComentario';

const KEY_LOCALSTORAGE = 'COMENTARIOS';

export const Comentarios = ({idGame}) => {

  const[cadastroAberto, setCadastroAberto]= useState(false);
  const {dark}= useDarkMode();
  
  const [comentarioJogo, setComentarioJogo] = useState({});

  useEffect(() => {
    const comentariosStorage = localStorage.getItem(KEY_LOCALSTORAGE);
    if (comentariosStorage) {
      const items = JSON.parse(comentariosStorage);
      const filter = items.find((item) => item.id === idGame);
      setComentarioJogo(filter);
    }
  }, [idGame]);

 
  const handleLikes = (entrada, soma) =>{
    const comentariosStorage = localStorage.getItem(KEY_LOCALSTORAGE);

    const comentario = {
      id: Math.random().toString(16).slice(2),
      likes: soma?++entrada.likes:--entrada.likes,
      ...entrada,
    };

    const comentariosAtualIndex = comentarioJogo.comentarios.findIndex((item) => item.id === entrada.id);
    const comentariosAtualInicio = comentarioJogo?.comentarios ? [...comentarioJogo?.comentarios.slice(0,comentariosAtualIndex)] : [];
    const comentariosAtualFim = comentarioJogo?.comentarios ? [...comentarioJogo?.comentarios.slice(comentariosAtualIndex+1)] : [];
    const novaListaComentarios = [{ id: idGame, comentarios: [...comentariosAtualInicio, comentario, ...comentariosAtualFim] }];

    if (comentariosStorage) {
      const itemsLocalStorage = JSON.parse(comentariosStorage);
      const listaTodosComentariosSemJogoAtual = itemsLocalStorage.filter((item) => item.id !== idGame);

      localStorage.setItem(
        'COMENTARIOS',
        JSON.stringify([...listaTodosComentariosSemJogoAtual, ...novaListaComentarios])
      );
    } else {
      localStorage.setItem('COMENTARIOS', JSON.stringify(novaListaComentarios));
    }

    setComentarioJogo(...novaListaComentarios);
  };
  
  
  
  
  
  const handleSubmit = (values, { setSubmitting }) => {
    const comentariosStorage = localStorage.getItem(KEY_LOCALSTORAGE);

    const comentario = {
      id: Math.random().toString(16).slice(2),
      likes: 0,
      ...values,
    };

    const comentariosAtual = comentarioJogo?.comentarios ? [...comentarioJogo?.comentarios] : [];
    const novaListaComentarios = [{ id: idGame, comentarios: [...comentariosAtual, comentario] }];

    if (comentariosStorage) {
      const itemsLocalStorage = JSON.parse(comentariosStorage);
      const listaTodosComentariosSemJogoAtual = itemsLocalStorage.filter((item) => item.id !== idGame);

      localStorage.setItem(
        'COMENTARIOS',
        JSON.stringify([...listaTodosComentariosSemJogoAtual, ...novaListaComentarios])
      );
    } else {
      localStorage.setItem('COMENTARIOS', JSON.stringify(novaListaComentarios));
    }

    setComentarioJogo(...novaListaComentarios);
    setSubmitting(false);
  };

  const schema = Yup.object().shape({
    nome: Yup.string().required('Campo obrigatório'),
    email: Yup.string().required('Campo obrigatório').email('E-mail inválido'),
    comentario: Yup.string().required('Campo obrigatório'),
  });

  const initialValues = {
    nome: '',
    email: '',
    comentario: '',
  };

  return (
    <>
     <Model primary={dark} show={cadastroAberto} >
      <h1>Comment register</h1>

      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema} validateOnMount>
        {({ isSubmitting, resetForm, isValid }) => (
          <Form>
            <Field name="nome" placeholder="Nome" />
            <ErrorMessage name="nome" style={{ color: 'red' }} component="span" />

            <Field name="email" placeholder="E-mail" />
            <ErrorMessage name="email" style={{ color: 'red' }} component="span" />

            <Field name="comentario" placeholder="Comentário" />
            <ErrorMessage name="comentario" style={{ color: 'red' }} component="span" />

            <Botao primary={dark} type="submit" disabled={isSubmitting || !isValid}>
              Send
            </Botao>

            <Botao primary={dark} type="button" disabled={isSubmitting} onClick={resetForm}>
              Clear
            </Botao>
          </Form>
        )}
      </Formik>
      </Model>
      <Botao primary={dark} onClick={()=>cadastroAberto?setCadastroAberto(false):setCadastroAberto(true)}>{cadastroAberto?'Collapse comment register':'Open comment register'}</Botao>
     <ul>
      {comentarioJogo?.comentarios?.map((item) => (
        <Card primary={dark} key={item.id}>
        <CardComentario key={item.id} item={item}/>
        <div>
        <Botao value={item} onClick={()=>handleLikes(item, false)}>Down vote</Botao>
        <Botao value={item} onClick={()=>handleLikes(item, true)}>Up vote</Botao>
        </div>
        </Card>
      ))}
      </ul>
    </>
  );
};