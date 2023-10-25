import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schema/user.schema';
import { PassportModule } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';

@Module({

  imports:[

    PassportModule.register({
      defaultStrategy: 'jwt',
    }),

    JwtModule.registerAsync({
      inject: [ConfigService],
      
    })

    ,MongooseModule.forFeature([{name:'User' , schema:UserSchema}])

  ],

  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
