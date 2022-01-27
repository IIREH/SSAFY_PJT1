import Joi from 'joi';
import User from '../../models/user';

/*
  POST /api/auth/register
  {
    username: 'velopert',
    password: 'mypass123'
  }
*/
export const register = async (ctx) => {
  // Request Body 검증하기
  const schema = Joi.object().keys({
    email: Joi.string()
      .email()
      .required(),
    username: Joi.string()
      .alphanum()
      .min(3)
      .max(20)
      .required(),
    nickname: Joi.string()
      .alphanum()
      .min(3)
      .max(20)
      .required(),
    password: Joi.string()
      .min(6)
      .max(20)
      .required(),
  });

  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  const { email, username, nickname, password } = ctx.request.body;
  try {
    // username  이 이미 존재하는지 확인
    const exists = await User.findByUsername(username);
    if (exists) {
      ctx.status = 409; // Conflict
      return;
    }

    const user = new User({
      email,
      username,
      nickname,
    });

    await user.setPassword(password); // 비밀번호 설정
    await user.save(); // 데이터베이스에 저장

    ctx.body = user.serialize();

    const token = user.generateToken();
    ctx.cookies.set('access_token', token, {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7일
      httpOnly: true,
    });
  } catch (e) {
    ctx.throw(500, e);
  }
};

/*
  POST /api/auth/login
  {
    username: 'velopert',
    password: 'mypass123'
  }
*/
export const login = async (ctx) => {
  const { email, password } = ctx.request.body;

  // username, password 가 없으면 에러 처리
  if (!email || !password) {
    ctx.status = 401; // Unauthorized
    return;
  }

  try {
    const user = await User.findByEmail(email);
    if (!user) {
      ctx.status = 401;
      return;
    }
    const valid = await user.checkPassword(password);
    // 잘못된 비밀번호
    if (!valid) {
      ctx.status = 401;
      return;
    }
    ctx.body = user.serialize();
    const token = user.generateToken();
    ctx.cookies.set('access_token', token, {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7일
      httpOnly: true,
    });
  } catch (e) {
    ctx.throw(500, e);
  }
};

/*
  GET /api/auth/check
*/
export const check = async (ctx) => {
  const { user } = ctx.state;
  if (!user) {
    // 로그인중 아님
    ctx.status = 401; // Unauthorized
    return;
  }
  ctx.body = user;
};

/*
  POST /api/auth/logout
*/
export const logout = async (ctx) => {
  ctx.cookies.set('access_token');
  ctx.status = 204; // No Content
};

// 회원 탈퇴
// DELETE /api/auth/remove/:id
export const remove = async ctx => {
  const { id } = ctx.params;
  try {
    ctx.cookies.set('access_token');
    await User.findByIdAndRemove(id);
    ctx.status = 204;
  } catch (e) {
    ctx.throw(500, e);
  }
};

// 회원 정보 수정
// PATCH /api/auth/update/:id
export const update = async (ctx) => {
  const { id } = ctx.params;
  const { nickname, password } = ctx.request.body;

  if (!password) {
    delete ctx.request.body['password'];
  }
  if (!nickname) {
    delete ctx.request.body['nickname'];
  }

  const schema = Joi.object().keys({
    nickname: Joi.string()
      .alphanum()
      .min(3)
      .max(20),
    password: Joi.string()
      .min(6)
      .max(20),
  });

  // 검증 후, 검증 실패시 에러처리
  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400; // Bad Request
    ctx.body = result.error;
    return;
  }

  try {
    const user = await User.findByIdAndUpdate(id, ctx.request.body, {
      new: true, // 이 값을 설정하면 업데이트된 데이터를 반환합니다.
      // false 일 때에는 업데이트 되기 전의 데이터를 반환합니다.
    }).exec();
    if (!user) {
      ctx.status = 404;
      return;
    }
    ctx.body = user;
  } catch (e) {
    ctx.throw(500, e);
  }
};