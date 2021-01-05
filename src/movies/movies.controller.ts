import { Controller, Delete, Get, Param, Patch, Post, Put, Body, Query } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {

   constructor(private readonly movieService: MoviesService) {

   }

   @Get()
   getAll(): Movie[]{
      return this.movieService.getAll();
   }

   @Get("search")
   search(@Query('year') searchingYear: string){
      return `We are searching...${searchingYear}`
   }

   @Get("/:id")
   getOne(@Param('id') movieId: string): Movie {
      return this.movieService.getOne(movieId);
   }

   @Post()
   create(@Body() movieData){
      console.log(movieData)
      return this.movieService.create(movieData)
   }

   @Delete("/:id")
   delete(@Param('id') movieId: string){
      return this.movieService.deleteOne(movieId)
   }

   @Patch("/:id")
   patch(@Param('id') movieId: string, @Body() updateData){
      return {
         updatedMovie: movieId,
         ...updateData
      }
   }
}
