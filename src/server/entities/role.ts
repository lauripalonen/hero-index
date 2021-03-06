import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, JoinColumn, OneToOne } from 'typeorm';
import { ObjectType, ID, Field } from 'type-graphql';
import { Lazy } from '../helpers';
import { Hero } from '../entities/hero';

@Entity()
@ObjectType()
export class Role {
  @Field((type) => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  title: string;

  @ManyToMany((type) => Hero, { lazy: true })
  heroes: Lazy<Hero[]>;
}