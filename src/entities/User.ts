import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  uuid: string;

  @Column({ nullable: false })
  name: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ default: false })
  isAdm: boolean;

  @Column({ nullable: false })
  createdOn: Date;

  @Column({ nullable: false })
  updatedOn: Date;
}