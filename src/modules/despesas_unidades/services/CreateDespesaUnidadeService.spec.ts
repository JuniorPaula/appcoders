import FakeDespesaRepository from '@modules/despesas_unidades/domain/repositories/fake/FakeDespesaRepository';

describe('Create Despesas Unidades', () => {
  it('Should be able create a despesa unidade', async () => {
    const fakeDespesaRepository = new FakeDespesaRepository();

    const despesa = await fakeDespesaRepository.create({
      descricao: 'Contratar Pintor',
      tipo_despesa: 'Manutenção',
      valor: 2000,
      vencimento_fatura: new Date('03/05/2022'),
      status_pagamento: false,
      unidade_id: 'de87adf3-b958-4f8f-99af-3e38ae1330b',
    });

    expect(despesa).toHaveProperty('id');
  });
});
