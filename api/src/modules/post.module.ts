import { PostController } from "src/controllers/post.controller";
import { Module } from "@nestjs/common";
import { PostService } from "src/services/post.service";

@Module({
    controllers: [PostController],
    providers: [PostService],
})
export class PostModule {}