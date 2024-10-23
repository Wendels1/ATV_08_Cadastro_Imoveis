'use client';


import Pagina from '@/app/components/Pagina';
import { Formik } from 'formik';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { FaCheck, FaTrash } from 'react-icons/fa';
import {ReactInputMask} from 'react-input-mask'
import * as Yup from 'yup';

export default function CadastroPage() {
 
  function cadastrar(imovel) {
    console.log(imovel);
    const imoveis = JSON.parse(localStorage.getItem('imoveis')) || [];
    imoveis.push(imovel);
    localStorage.setItem('imoveis', JSON.stringify(imoveis));
    alert('Imóvel cadastrado com sucesso!');
  }


  const initialValues = {
    nomeProprietario: '',
    cpf: '',
    telefone: '',
    endereco: {
      cep: '',
      logradouro: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      uf: ''
    },
    tipoImovel: '',
    valor: '',
    foto: ''
  };


  const validationSchema = Yup.object().shape({
    nomeProprietario: Yup.string().required('Campo obrigatório'),
    cpf: Yup.string().required('Campo obrigatório').min(11, 'CPF inválido'),
    telefone: Yup.string().required('Campo obrigatório'),
    endereco: Yup.object().shape({
      cep: Yup.string().required('Campo obrigatório'),
      logradouro: Yup.string().required('Campo obrigatório'),
      numero: Yup.string().required('Campo obrigatório'),
      complemento: Yup.string(),
      bairro: Yup.string().required('Campo obrigatório'),
      cidade: Yup.string().required('Campo obrigatório'),
      uf: Yup.string().required('Campo obrigatório'),
    }),
    tipoImovel: Yup.string().required('Campo obrigatório'),
    valor: Yup.number().required('Campo obrigatório'),
    foto: Yup.string().url('URL inválida')
  });

  return (
    <Pagina titulo="Cadastro de Imóvel">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={cadastrar}
      >
        {({ values, errors, touched, handleBlur, handleSubmit, handleReset, handleChange }) => (
          <Form onSubmit={handleSubmit}>
            {/* Dados do proprietário */}
            <div className='text-center'>
              <h3>Dados do Proprietário</h3>
              <hr />
            </div>

            <Row className='mb-2'>
              <Form.Group as={Col}>
                <Form.Label>Nome do Proprietário:</Form.Label>
                <Form.Control
                  name='nomeProprietario'
                  type='text'
                  value={values.nomeProprietario}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.nomeProprietario && !errors.nomeProprietario}
                  isInvalid={touched.nomeProprietario && !!errors.nomeProprietario}
                />
                <Form.Control.Feedback type='invalid'>{errors.nomeProprietario}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>CPF:</Form.Label>
                <Form.Control as={ReactInputMask}
                  mask="999.999.999-99"
                  placeholder="999.999.999-99"
                  name='cpf'
                  value={values.cpf}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.cpf && !errors.cpf}
                  isInvalid={touched.cpf && !!errors.cpf}
                />
                <Form.Control.Feedback type='invalid'>{errors.cpf}</Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className='mb-2'>
              <Form.Group as={Col}>
                <Form.Label>Telefone:</Form.Label>
                <Form.Control as={ReactInputMask}
                  mask="(99)99999-9999"
                  placeholder="(99)99999-9999"
                  name='telefone'
                  value={values.telefone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.telefone && !errors.telefone}
                  isInvalid={touched.telefone && !!errors.telefone}
                />
                <Form.Control.Feedback type='invalid'>{errors.telefone}</Form.Control.Feedback>
              </Form.Group>
            </Row>

            {/* Endereço */}
            <div className='text-center'>
              <h3>Endereço</h3>
              <hr />
            </div>

            <Row className='mb-2'>
              <Form.Group as={Col} md={3}>
                <Form.Label>CEP:</Form.Label>
                <Form.Control as={ReactInputMask}
                  mask="99999-999"
                  placeholder="99999-999"
                  name='endereco.cep'
                  value={values.endereco.cep}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.endereco?.cep && !errors.endereco?.cep}
                  isInvalid={touched.endereco?.cep && !!errors.endereco?.cep}
                />
                <Form.Control.Feedback type='invalid'>{errors.endereco?.cep}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Logradouro:</Form.Label>
                <Form.Control
                  name='endereco.logradouro'
                  type='text'
                  value={values.endereco.logradouro}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.endereco?.logradouro && !errors.endereco?.logradouro}
                  isInvalid={touched.endereco?.logradouro && !!errors.endereco?.logradouro}
                />
                <Form.Control.Feedback type='invalid'>{errors.endereco?.logradouro}</Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className='mb-2'>
              <Form.Group as={Col}>
                <Form.Label>Número:</Form.Label>
                <Form.Control
                  name='endereco.numero'
                  type='text'
                  value={values.endereco.numero}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.endereco?.numero && !errors.endereco?.numero}
                  isInvalid={touched.endereco?.numero && !!errors.endereco?.numero}
                />
                <Form.Control.Feedback type='invalid'>{errors.endereco?.numero}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Complemento:</Form.Label>
                <Form.Control
                  name='endereco.complemento'
                  type='text'
                  value={values.endereco.complemento}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.endereco?.complemento && !errors.endereco?.complemento}
                  isInvalid={touched.endereco?.complemento && !!errors.endereco?.complemento}
                />
                <Form.Control.Feedback type='invalid'>{errors.endereco?.complemento}</Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className='mb-2'>
              <Form.Group as={Col}>
                <Form.Label>Bairro:</Form.Label>
                <Form.Control
                  name='endereco.bairro'
                  type='text'
                  value={values.endereco.bairro}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.endereco?.bairro && !errors.endereco?.bairro}
                  isInvalid={touched.endereco?.bairro && !!errors.endereco?.bairro}
                />
                <Form.Control.Feedback type='invalid'>{errors.endereco?.bairro}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Cidade:</Form.Label>
                <Form.Control
                  name='endereco.cidade'
                  type='text'
                  value={values.endereco.cidade}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.endereco?.cidade && !errors.endereco?.cidade}
                  isInvalid={touched.endereco?.cidade && !!errors.endereco?.cidade}
                />
                <Form.Control.Feedback type='invalid'>{errors.endereco?.cidade}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>UF:</Form.Label>
                <Form.Control
                  name='endereco.uf'
                  type='text'
                  value={values.endereco.uf}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.endereco?.uf && !errors.endereco?.uf}
                  isInvalid={touched.endereco?.uf && !!errors.endereco?.uf}
                />
                <Form.Control.Feedback type='invalid'>{errors.endereco?.uf}</Form.Control.Feedback>
              </Form.Group>
            </Row>

            {/* Dados do imóvel */}
            <div className='text-center'>
              <h3>Dados do Imóvel</h3>
              <hr />
            </div>

            <Row className='mb-2'>
              <Form.Group as={Col}>
                <Form.Label>Tipo de Imóvel:</Form.Label>
                <Form.Select
                  name='tipoImovel'
                  value={values.tipoImovel}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.tipoImovel && !errors.tipoImovel}
                  isInvalid={touched.tipoImovel && !!errors.tipoImovel}
                >
                  <option value="">Selecione</option>
                  <option value="Apartamento">Apartamento</option>
                  <option value="Casa">Casa</option>
                  <option value="Terreno">Terreno</option>
                </Form.Select>
                <Form.Control.Feedback type='invalid'>{errors.tipoImovel}</Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className='mb-2'>
              <Form.Group as={Col}>
                <Form.Label>Valor do Imóvel:</Form.Label>
                <Form.Control
                  name='valor'
                  type='number'
                  value={values.valor}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.valor && !errors.valor}
                  isInvalid={touched.valor && !!errors.valor}
                />
                <Form.Control.Feedback type='invalid'>{errors.valor}</Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className='mb-2'>
              <Form.Group as={Col}>
                <Form.Label>Foto do Imóvel (URL):</Form.Label>
                <Form.Control
                  name='foto'
                  type='url'
                  value={values.foto}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.foto && !errors.foto}
                  isInvalid={touched.foto && !!errors.foto}
                />
                <Form.Control.Feedback type='invalid'>{errors.foto}</Form.Control.Feedback>
              </Form.Group>
            </Row>

            {/* Botões de Ação */}
            <div className="d-flex justify-content-end mt-4">
              <Button type="reset" variant="secondary" onClick={handleReset}>
                <FaTrash className="me-2" />
                Limpar
              </Button>
              <Button type="submit" variant="success" className="ms-2">
                <FaCheck className="me-2" />
                Enviar
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </Pagina>
  );
}
