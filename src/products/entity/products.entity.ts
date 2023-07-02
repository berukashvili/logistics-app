import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Product {
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
    enum: [
      'default',
      'purchased',
      'sold',
      'corrected',
      'returned',
      'cancelled',
    ],
    default: 'default',
  })
  status: string;

  @Column('decimal')
  public price: number;
}
