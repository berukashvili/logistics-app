import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum Conditions {
  DEFAULT = 'default',
  SALE = 'sale',
  RETURNED = 'returned',
  CANCELLED = 'cancelled',
  CORRECTED = 'corrected',
}

@Entity('product')
export class ProductsEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column('decimal')
  public barcode: number;

  @Column('varchar', { length: 255, nullable: false })
  public name: string;

  @Column('decimal')
  public weight: number;

  @Column('varchar', { length: 255, nullable: false })
  public type: string;

  @Column({
    type: 'enum',
    enum: Conditions,
    default: Conditions.DEFAULT,
  })
  condition: Conditions;

  @Column('decimal')
  public price: number;
}
