import { Controller, Delete, Get, Param, Patch, Post, Put, Body, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {

   @Get()
   getAll(){
      return "This will return all movies"
   }

   @Get("search")
   search(@Query('year') searchingYear: string){
      return `We are searching...${searchingYear}`
   }

   @Get("/:id")
   getOne(@Param('id') movieId: string){
      return `This will return one movie with movieId ${movieId}`
   }

   @Post()
   create(@Body() movieData){
      console.log(movieData)
      return movieData
   }

   @Delete("/:id")
   delete(@Param('id') movieId: string){
      return `This will delete one movie with movieId ${movieId}`

   }

   @Patch("/:id")
   patch(@Param('id') movieId: string, @Body() updateData){
      return {
         updatedMovie: movieId,
         ...updateData
      }
   }
}
