import { ApiPropertyOptional } from '@nestjs/swagger';

export class HelloDto {
    @ApiPropertyOptional({
        type: 'string',
        description: 'some property',
        example: 'pm_1DkAUlB70neqlGn3zQESm7pl',
    })
    someProperty?: string;

    @ApiPropertyOptional({
        type: 'string',
        description: 'some other property',
        example: 'pm_1DkAUlB70neqlGn3zQESm7pl',
    })
    someOtherProperty?: string;
}