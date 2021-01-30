import db from '../../db';

export default function dbHandler(request, response) {
  response.json(db);
}
