# weather-mcp-server-demo

Build your first MCP Server: Tutorial for Beginners

- https://www.youtube.com/watch?v=egVm_z1nnnQ

- https://github.com/debs-obrien/mcp-weather-server-demo

## api

`geocoding`

- https://open-meteo.com/en/docs/geocoding-api

`weather`

- https://open-meteo.com/en/docs

## typescript sdk

`https://github.com/modelcontextprotocol/typescript-sdk`

## testing and debugging

`https://github.com/modelcontextprotocol/typescript-sdk?tab=readme-ov-file#testing-and-debugging`

### inspector

`https://github.com/modelcontextprotocol/inspector`

To get up and running right away with the UI, just execute the following:

```
npx -y @modelcontextprotocol/inspector npx -y tsx main.ts
```

OR execute

```
npm test
```

_see package.json_

Open the link from the console that contains the `MCP_PROXY_AUTH_TOKEN`

`http://localhost:6274/?MCP_PROXY_AUTH_TOKEN=<your-token>`
