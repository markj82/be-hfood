import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateFood1567593743226 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "food" ("id" SERIAL NOT NULL, "name" character varying(60) NOT NULL, "type" character varying(60) NOT NULL, "img_url" character varying(250) NOT NULL, "qty" integer NOT NULL, CONSTRAINT "PK_26d12de4b6576ff08d30c281837" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "food"`);
    }

}
