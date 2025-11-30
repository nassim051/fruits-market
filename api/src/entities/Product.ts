import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";
import { Season } from "../enums/Season";
import { Unit } from "../enums/Unit";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  name!: string;

  @Column("decimal", { precision: 10, scale: 2 })
  price!: number;

  @Column({
    type: "enum",
    enum: Season
  })
  season!: Season;

  @Column("text")
  description!: string;

  @Column("int")
  stock!: number;

  @Column({
    type: "enum",
    enum: Unit
  })
  unit!: Unit;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedDate!: Date;
}
