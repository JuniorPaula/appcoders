import FakeUnidadeRepository from '@modules/unidades/domain/repositories/FakeUnidadeRepository';
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

  it('Should be able find unidade by identify', async () => {
    const fakeUnidadeRepository = new FakeUnidadeRepository();
    const createUnidade = new CreateUnidadesService(fakeUnidadeRepository);

    await createUnidade.execute({
      identificacao: 'Condominio Albert',
      proprietario: 'Pedro Sousa',
      condominio: 20,
      endereco: 'Rua A',
    });

    const unidade = await fakeUnidadeRepository.findByIdentify(
      'Condominio Albert'
    );

    expect(unidade?.identificacao).toBe('Condominio Albert');
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
