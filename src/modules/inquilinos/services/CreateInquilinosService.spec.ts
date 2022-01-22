import AppError from '@shared/errors/AppError';
import FakeInquilinoRepository from '../tests/FakeCreateInquilino';

let fakeInquilinoRepository: FakeInquilinoRepository;

describe('Create Inquilino', () => {
  beforeEach(() => {
    fakeInquilinoRepository = new FakeInquilinoRepository();
  });

  it('Should be create a new inquilino', async () => {
    const inquilino = await fakeInquilinoRepository.create({
      nome: 'Pedro',
      idade: 25,
      sexo: 'Masculino',
      telefone: '4798758-5202',
      email: 'Pedro@teste.com',
    });

    expect(inquilino).toHaveProperty('id');
  });

  it('Should be not able to create two inquilino with the same email.', async () => {
    await fakeInquilinoRepository.create({
      nome: 'Pedro',
      idade: 25,
      sexo: 'Masculino',
      telefone: '4798758-5202',
      email: 'Pedro@teste.com',
    });

    await expect(
      fakeInquilinoRepository.create({
        nome: 'Pedro',
        idade: 25,
        sexo: 'Masculino',
        telefone: '4798758-5202',
        email: 'Pedro@teste.com',
      })
    ).rejects.toEqual(new AppError('Email address already used.'));
  });
});
