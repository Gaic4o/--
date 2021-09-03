import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { JoinRequestDto } from './dto/join.request.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {

    }

    @Get() // get/users 로그인 되어 있는 사용 자정보. 
    getUsers(@Req() req) {
        return req.user; // 내정보 리턴 
    }

    @Post() // post/users 
    postUsers(@Body() data: JoinRequestDto) {
        this.usersService.postUsers(data.email, data.nickname, data.password);
    }

    @Post('login')  // post/users/login
    logIn() {

    }

    @Post('logout') // post/users/logout 
    logOut(@Req() req, @Res() res) {
        req.logOut();
        res.clearCookie('connect.std', { httpOnly: true });
        res.send('ok'); 
    }
}
