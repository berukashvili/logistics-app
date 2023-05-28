import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}
