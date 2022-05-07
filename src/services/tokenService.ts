import jwt from 'jsonwebtoken';

export const tokenSecretAuth = 'tokenSecretAuth_need_set_to_env';

export class TokenService {
  static generateToken() {
    const token = jwt.sign({ admin: 'admin' }, tokenSecretAuth);
    return token;
  }

  static jwtVerify(token: string) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, tokenSecretAuth, async (err, data) => {
        if (err) {
          return reject(err);
        }
        return resolve(data);
      });
    });
  }
}
