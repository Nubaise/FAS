import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateDepartments1788634487327 implements MigrationInterface {
    name = 'CreateDepartments1788634487327'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "departments" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "name" character varying NOT NULL, "code" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_8681da666ad9699d568b3e91064" UNIQUE ("name"), CONSTRAINT "UQ_91fddbe23e927e1e525c152baa3" UNIQUE ("code"), CONSTRAINT "PK_839517a681a86bb84cbcc6a1e9d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "departments"`);
    }

}
