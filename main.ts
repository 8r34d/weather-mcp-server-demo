import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const server = new McpServer({
  name: "weather-mcp-server",
  version: "1.0.0",
});

server.tool(
  "get-weather",
  "Tool to get the weather for a city'",
  {
    city: z.string().describe("The name of the city to get the weather for"),
  },
  async ({ city }) => {
    return {
      content: [
        {
          type: "text",
          text: `The current weather in ${city} is sunny with a high of 25°C.`,
        },
      ],
    };
  }
);

const transport = new StdioServerTransport();
server.connect(transport);
