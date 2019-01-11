import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import Post from "./Post";
import User from "./User";

@Entity()
class Like extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  senderId: number;

  @ManyToOne(type => User, user => user.likesAsSender)
  sender: User;

  @Column({ nullable: true })
  receiverId: number;

  @ManyToOne(type => User, user => user.likesAsReceiver)
  receiver: User;

  @Column({ nullable: true })
  postId: number;

  @ManyToOne(type => Post, post => post.likes, { nullable: true })
  post: Post;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}

export default Like;
