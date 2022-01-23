import FakeDespesaRepository from '@modules/despesas_unidades/domain/repositories/fake/FakeDespesaRepository';

describe('List despesa por unidade', () => {
  it('Should be able to return list > 0', async () => {
    const fakeDespesaRepository = new FakeDespesaRepository();

    const despesa = await fakeDespesaRepository.find();

    expect(despesa).toHaveLength(0);
  });
});
