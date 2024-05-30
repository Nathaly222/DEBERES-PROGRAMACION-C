import {Controller, Get, HttpCode, Param, Body, Post, Put,ParamData, Delete} from '@nestjs/common';
import { CreateCatDto, UpdateCatDto, ListAllEntities } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
    @Post ()

    creates (): string{
        return 'This action return cats';
           
    }  
    @Get()
    @HttpCode (418) 
    findAll(): string {
        return 'This action returns all cats'
    }

    @Get(':id')
    findOne (@Param() params): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
    }
    @Post()
    async create (@Body() CreateCatDto: CreateCatDto) {
    return 'This action adds a new cat';
    }
    
    @Put(':id')
    update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
    }
    @Delete(':id')
    remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
    }
}



