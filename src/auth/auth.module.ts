import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schema/user.schema';
import { PassportModule } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

@Module({

  imports:[

    PassportModule.register({
      defaultStrategy: 'jwt',
    }),

    

    MongooseModule.forFeature([{name:'User' , schema:UserSchema}])

  ],

  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
