import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToMany,
  JoinColumn,
  RelationCount
} from "typeorm";
import User from "./User";
import Like from "./Like";
import Comment from "./Comment";

@Entity()
class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "int" })
  category: number;

  @Column({ type: "text" })
  title: string;

  @Column({ type: "text" })
  source: string;

  @Column({ type: "text" })
  body: string;

  @Column({ nullable: true })
  userId: number;

  @ManyToOne(type => User, user => user.posts)
  user: User;

  @OneToMany(type => Like, like => like.post, { nullable: true })
  @JoinColumn()
  likes: Like[];

  @RelationCount((post: Post) => post.likes)
  likesCount: number;

  @OneToMany(type => Comment, comment => comment.post, {
    nullable: true
  })
  @JoinColumn()
  comments: Comment[];

  @Column({ type: "int", default: 0 })
  view: number;

  @Column("simple-array", { nullable: true })
  tags: string[];

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}

export default Post;
