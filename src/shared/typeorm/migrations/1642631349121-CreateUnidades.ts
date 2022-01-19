import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUnidades1642631349121 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'unidades',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'identificacao',
            type: 'varchar',
          },
          {
            name: 'proprietario',
            type: 'varchar',
          },
          {
            name: 'condominio',
            type: 'int',
          },
          {
            name: 'endereco',
            type: 'varchar',
          },
          {
            name: 'created_At',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_At',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('unidades');
  }
}
