module.exports = {
  mount: {
    public: { url: "/", static: true },
    src: { url: "/dist" },
  },
  routes: [
    { match: 'all', src: '/api/.*', dest: (req, res) => proxy.web(req, res) },
    { match: 'routes', src: '.*', dest: '/index.html' },
  ],
  plugins: [
    "@snowpack/plugin-dotenv",
    "@snowpack/plugin-sass",
    "@snowpack/plugin-react-refresh",
    "@snowpack/plugin-typescript"
  ],
};