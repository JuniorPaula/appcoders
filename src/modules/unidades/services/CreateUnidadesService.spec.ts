import FakeUnidadeRepository from '@modules/unidades/domain/repositories/fake/FakeUnidadeRepository';
import AppError from '@shared/errors/AppError';
import CreateUnidadesService from './CreateUnidadesService';

describe('List Inquilino', () => {
  it('Should be able create an unidade', async () => {
    const fakeUnidadeRepository = new FakeUnidadeRepository();
    const createUnidade = new CreateUnidadesService(fakeUnidadeRepository);

    const unidade = await createUnidade.execute({
      identificacao: 'Condominio Albert',
      proprietario: 'Pedro Sousa',
      condominio: 20,
      endereco: 'Rua A',
    });

    expect(unidade).toHaveProperty('id');
  });

  it('Should not be able an exists two unit the same identify', async () => {
    const fakeUnidadeRepository = new FakeUnidadeRepository();
    const createUnidade = new CreateUnidadesService(fakeUnidadeRepository);

    await createUnidade.execute({
      identificacao: 'Condominio Albert',
      proprietario: 'Pedro Sousa',
      condominio: 20,
      endereco: 'Rua A',
    });

    expect(
      createUnidade.execute({
        identificacao: 'Condominio Albert',
        proprietario: 'Pedro Sousa',
        condominio: 20,
        endereco: 'Rua A',
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it('Should be able find an unidade by id', async () => {
    const fakeUnidadeRepository = new FakeUnidadeRepository();
    const createUnidade = new CreateUnidadesService(fakeUnidadeRepository);

    const unidade = await createUnidade.execute({
      identificacao: 'Condominio Albert',
      proprietario: 'Pedro Sousa',
      condominio: 20,
      endereco: 'Rua A',
    });

    const unidadeId = await fakeUnidadeRepository.findById(unidade.id);

    expect(unidadeId).toBeTruthy();
  });
});
