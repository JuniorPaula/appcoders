import FakeInquilinoRepository from '../domain/repositories/fake/FakeCreateInquilino';

describe('List Inquilino', () => {
  it('Should be able lenght > 0', async () => {
    const fakeInquilinoRepository = new FakeInquilinoRepository();

    const inquilino = await fakeInquilinoRepository.find();

    expect(inquilino).toHaveLength(0);
  });
});
