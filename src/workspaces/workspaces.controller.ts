import { Controller, Delete, Get, Post } from '@nestjs/common';

@Controller('workspaces')
export class WorkspacesController {
    @Get()
    getMyWorkspaces() {
        
    }

    @Post() 
    createWorkspace() {

    }

    @Get(':url/members') 
    getAllMembersFromWorkspace() { // 변수명 길게 짓는 게 엉청 좋은 습관. 

    }

    @Post(':url/members') 
    inviteMembersToWorkspace() {

    }

    @Delete(':url/members/:id') 
    kickMemberFormWorkspace() {

    }

    @Get(':url/members/:id') 
    getAllMemberInfoWorkspace() { // 변수명 길게 짓는 게 엉청 좋은 습관. 

    }
} 
