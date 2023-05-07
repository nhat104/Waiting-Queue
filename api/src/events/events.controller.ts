import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseIntPipe,
  Req,
} from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { EventDto } from './dto/event.dto';
import { FilterOperator } from 'src/common/filters.vm';
import { RoleEnum } from 'src/common/enum';
import { PaginateDto } from 'src/common/paginate.dto';

/**
 * Events controller class for events endpoints (create, update, delete, etc.)
 */
@ApiTags('events')
@Controller('/api/events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  /**
   * Create event endpoint (POST /events)
   * @param createEventDto Create event DTO object from request body
   * @returns Created event DTO object
   */
  @Post()
  @ApiCreatedResponse({ type: EventDto })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  createEvent(@Body() createEventDto: CreateEventDto) {
    return this.eventsService.create(createEventDto);
  }

  /**
   * Find all events endpoint (GET /events) with search query
   * @param search Search query from request query
   * @returns Array of event DTO objects
   */
  @Get()
  @ApiQuery({
    name: 'search',
    required: false,
    type: FilterOperator,
    description: 'Search query',
  })
  @ApiOkResponse({ type: [EventDto] })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  findAllEvent(@Query() search: any): Promise<PaginateDto<EventDto>> {
    return this.eventsService.findAll(search);
  }

  /**
   * Find all events endpoint (GET /events) with search query
   * @param search Search query from request query
   * @returns Array of event DTO objects
   */
  @Get('/my-events')
  @ApiQuery({
    name: 'search',
    required: false,
    type: String,
    description: 'Search query name with operator LIKE',
  })
  @ApiQuery({
    name: 'page',
    required: true,
    type: Number,
    example: 1,
  })
  @ApiQuery({
    name: 'size',
    required: true,
    type: Number,
    example: 10,
  })
  @ApiOkResponse({ type: [EventDto] })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  findAllEventUserCanSee(
    @Req() req: any,
    @Query('search') search?: string,
    @Query('page') page?: number,
    @Query('size') size?: number,
  ): Promise<PaginateDto<EventDto>> {
    return this.eventsService.findAllEventUserCanSee(
      search,
      req.user.id,
      page,
      size,
    );
  }

  // TODO: api upload image place

  /**
   * Find one event endpoint (GET /events/:id) with id param
   * @param id Event id from request param (id)
   * @returns Event DTO object with id
   * @returns Bad request message (invalid id)
   * @returns Not found message (event not found) with id
   */
  @Get(':id')
  @ApiOkResponse({ type: EventDto })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiNotFoundResponse({ description: 'Not Found' })
  findOneEvent(@Param('id', ParseIntPipe) id: number) {
    return this.eventsService.findOne(+id);
  }

  /**
   * Update event endpoint (PATCH /events/:id) with id param and update event DTO object from request body
   * @param id Event id from request param (id)
   * @param updateEventDto Update event DTO object from request body
   * @returns Updated event DTO object with id
   * @returns Bad request message (invalid id)
   * @returns Not found message (event not found) with id
   */
  @Patch(':id')
  @ApiOkResponse({ type: EventDto })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiNotFoundResponse({ description: 'Not Found' })
  updateEvent(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateEventDto: UpdateEventDto,
  ) {
    return this.eventsService.update(+id, updateEventDto);
  }

  /**
   * Remove event endpoint (DELETE /events/:id) with id param
   * @param id Event id from request param (id)
   * @returns OK message
   * @returns Bad request message
   */
  @Delete(':id')
  @ApiOkResponse({ description: 'OK' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiNotFoundResponse({ description: 'Not Found' })
  removeEvent(@Param('id', ParseIntPipe) id: number) {
    return this.eventsService.remove(+id);
  }
}
