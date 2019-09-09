import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateFood1568041163330 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "food" ADD "desc" character varying(1000) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "food" ADD "price" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "food" DROP COLUMN "img_url"`);
        await queryRunner.query(`ALTER TABLE "food" ADD "img_url" character varying(1000) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "food" DROP COLUMN "img_url"`);
        await queryRunner.query(`ALTER TABLE "food" ADD "img_url" character varying(250) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "food" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "food" DROP COLUMN "desc"`);
    }

}
