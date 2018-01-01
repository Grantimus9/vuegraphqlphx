# Vuegraphqlphx

## A starter for GraphQL, Vue.js, and Elixir/Phoenix Projects

Key Components:

  * Vue.js, supporting single-file .vue components.
  * Webpack
  * Apollo
  * GraphQL, using Absinthe
  * Phoenix/Elixir backend

Key Omissions:
  * Haven't tested deployment yet.
  * No subscription support for websockets yet.

### About

This stubs out Phoenix 1.3, Apollo 2.X, GraphQL via Absinthe.

### Installation

1. Clone this repo.
2. Install dependencies with `mix deps.get`
3. Install Node dependencies with `cd assets && npm install && cd ..`
4. Create and migrate your database with `mix ecto.create && mix ecto.migrate`
5. Start Phoenix endpoint and an interactive Elixir session with `iex -S mix phx.server`. Webpack will watch the assets folder. Visit [`localhost:4000`](http://localhost:4000) from your browser.

Test Installation:


To start your Phoenix server:

  * Install dependencies with `mix deps.get`
  * Create and migrate your database with `mix ecto.create && mix ecto.migrate`
  * Start Phoenix endpoint with `mix phx.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.

Ready to run in production? Please [check our deployment guides](http://www.phoenixframework.org/docs/deployment).
