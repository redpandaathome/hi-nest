import { Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';

@Controller('movies')
export class MoviesController {

   @Get()
   getAll(){
      return "This will return all movies"
   }

   @Get("/:id")
   getOne(@Param('id') movieId: string){
      return `This will return one movie with movieId ${movieId}`
   }

   @Post()
   create(){
      return 'This will create a movie'
   }

   @Delete("/:id")
   delete(@Param('id') movieId: string){
      return `This will delete one movie with movieId ${movieId}`

   }

   @Patch("/:id")
   patch(@Param('id') movieId: string){
      return `This will patch one movie with movieId ${movieId}`
   }
}
