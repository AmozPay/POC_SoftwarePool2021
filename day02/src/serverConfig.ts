const env = require('env-var');

const PORT: number = env.get('SERVER_PORT').required().asIntPositive();
const HELLO: string = env.get('HELLO_MESSAGE').default('No Message defined').asString();

export { PORT, HELLO };