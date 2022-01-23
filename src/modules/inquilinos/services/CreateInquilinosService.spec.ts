import AppError from '@shared/errors/AppError';
import CreateInquilinosService from './CreateInquilinosService';
import FakeInquilinoRepository from '../domain/repositories/fake/FakeCreateInquilino';

describe('Create Inquilino', () => {
  it('Should be able create a new inquilino', async () => {
    const fakeInquilinoRepository = new FakeInquilinoRepository();

    const createInquilino = new CreateInquilinosService(
      fakeInquilinoRepository
    );

    const inquilino = await createInquilino.execute({
      nome: 'Alan Bat',
      idade: 25,
      sexo: 'Masculino',
      telefone: '4798758-5202',
      email: 'Alan@teste.com',
    });

    expect(inquilino).toHaveProperty('id');
  });

  it('Should not be able create an inquilino with the same email', async () => {
    const fakeInquilinoRepository = new FakeInquilinoRepository();

    const createInquilino = new CreateInquilinosService(
      fakeInquilinoRepository
    );

    await createInquilino.execute({
      nome: 'Alan Bat',
      idade: 25,
      sexo: 'Masculino',
      telefone: '4798758-5202',
      email: 'Alan@teste.com',
    });

    expect(
      createInquilino.execute({
        nome: 'Alan Bat',
        idade: 25,
        sexo: 'Masculino',
        telefone: '4798758-5202',
        email: 'Alan@teste.com',
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
