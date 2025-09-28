# weather-mcp-server-demo

Build your first MCP Server: Tutorial for Beginners

- https://www.youtube.com/watch?v=egVm_z1nnnQ

## credits

Big thanks to Debbie O'Brien for providing this tutorial

- https://github.com/debs-obrien

- https://www.youtube.com/@DebbieOBrien

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

## local mcp weather server

`.vscode/mcp.json`

```json
{
  "servers": {
    "my-mcp-weather-server": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "tsx", "main.ts"]
    }
  },
  "inputs": []
}
```

## chat prompt

![Chat](my-mcp-weather-server.png?raw=true "Prompt Example")
