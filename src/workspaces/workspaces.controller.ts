import { Controller, Get, Post } from '@nestjs/common';

@Controller('workspaces')
export class WorkspacesController {
    @Get()
    getMyWorkspaces() {
        
    }

    @Post() 
    createWorkspace() {

    }
}
