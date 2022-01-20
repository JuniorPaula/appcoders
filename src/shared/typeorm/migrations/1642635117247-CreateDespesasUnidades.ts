import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateDespesasUnidades1642635117247 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'despesas_unidades',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'descricao',
            type: 'varchar',
          },
          {
            name: 'tipo_despesa',
            type: 'varchar',
          },
          {
            name: 'valor',
            type: 'decimal',
            precision: 10,
            scale: 2,
          },
          {
            name: 'vencimento_fatura',
            type: 'timestamp',
          },
          {
            name: 'status_pagamento',
            type: 'boolean',
            default: 'false',
          },
          {
            name: 'unidade_id',
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
        foreignKeys: [
          {
            name: 'fk_despesas_unidades',
            columnNames: ['unidade_id'],
            referencedTableName: 'unidades',
            referencedColumnNames: ['id'],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('despesas_unidades');
  }
}
