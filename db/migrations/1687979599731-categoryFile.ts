import { CommentEntity } from 'src/modules/comments/entities/comment.entity';
import { MigrationInterface, QueryRunner, Repository } from 'typeorm';

export class CategoryFile1687979599731 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const commentRepository: Repository<CommentEntity> =
      queryRunner.connection.getRepository(CommentEntity);

    if (
      await commentRepository.findOne({ where: { message: 'message firs comment' } })
    ) {
      return;
    }
    const comment_entity: CommentEntity = commentRepository.create({
      message: 'test nessage',
      userId: 1,
      postId: 1,
    });

    await commentRepository.save(comment_entity);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const commentRepository: Repository<CommentEntity> =
      queryRunner.connection.getRepository(CommentEntity);
    const comment_entity: CommentEntity = await commentRepository.findOne({
      where: { message: 'message firs comment' },
    });

    if (!comment_entity) {
      return;
    }

    await commentRepository.remove(comment_entity);
  }
}
