import {
  http,
  HttpResponse,
  PathParams,
  type RequestHandler,
  type WebSocketHandler,
} from "msw";
import { faker } from "@faker-js/faker";
type TUser = {
  userId: number;
  username: string;
  password: string;
  profileImg: string;
};

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const users: TUser[] = [
  {
    userId: 1,
    username: "Elon Musk",
    password: "1234",
    profileImg: faker.image.personPortrait(),
  },
  {
    userId: 2,
    password: "1234",
    username: "akari asagiri",
    profileImg: faker.image.personPortrait(),
  },
  {
    userId: 3,
    password: "1234",
    username: "nanahara akari",
    profileImg: faker.image.personPortrait(),
  },
];

export const handlers: Array<RequestHandler | WebSocketHandler> = [
  http.post<PathParams, { username: string; password: string }, TUser | null>(
    `${baseUrl}/api/login`,
    async ({ request }) => {
      const data = await request.json();
      const { username, password } = data;
      const userIdx = users.find(
        (elem) => elem.username === username && elem.password === password
      );
      if (userIdx) {
        return new HttpResponse(userIdx, {
          status: 200,
          headers: { "Set Cookie": "connect-sid=msw;HttpOnly;Path=/" },
        });
      } else {
        return new HttpResponse(null, {
          status: 400,
          headers: { "Set Cookie": "connect-sid=;HttpOnly;Path=/" },
        });
      }
    }
  ),
];
