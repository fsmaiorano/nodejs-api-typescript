import * as http from "http";
import server from "./server";

const port = process.env.port || 4000;
const _server = http.createServer(server);

_server.listen(port, () => console.log(`Server [ONLINE] at port ${port}`));
