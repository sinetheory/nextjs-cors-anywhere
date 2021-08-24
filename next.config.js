module.exports = {
  async headers() {
    return [
      {
        source: "/api",
        headers: [
          {
            key: "cache-control",
            value: "s-maxage=600",
          },
          {
            key: "access-control-allow-origin",
            value: "*",
          },
        ],
      },
    ];
  },
};
