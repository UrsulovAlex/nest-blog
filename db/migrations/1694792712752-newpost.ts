import { PostEntity } from 'src/modules/post/model/post.entity';
import { MigrationInterface, QueryRunner, Repository } from 'typeorm';

export class Newpost1694792712752 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const postRepository: Repository<PostEntity> =
      queryRunner.connection.getRepository(PostEntity);

    if (await postRepository.findOne({ where: { id: 22 } })) {
      return;
    }

    const post_entity: PostEntity = postRepository.create({
      title: 'new Post 33',
      text: 'new Test post migraation',
      authorPostsId: 7,
      categoryId: 2,
      commentsId: 22,
    });

    await postRepository.insert(post_entity);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const postRepository: Repository<PostEntity> =
      queryRunner.connection.getRepository(PostEntity);

    const post_entity: PostEntity = await postRepository.findOne({
      where: { id: 22 },
    });

    if (!post_entity) {
      return;
    }

    await postRepository.remove(post_entity);
  }
}
