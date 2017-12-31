# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :vuegraphqlphx,
  ecto_repos: [Vuegraphqlphx.Repo]

# Configures the endpoint
config :vuegraphqlphx, VuegraphqlphxWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "FNwojMCPGTPOjgw7Oc/9xWsM2Wiuuh65clE6eDo2fxt3h19V6IrEHYodKx+wNohF",
  render_errors: [view: VuegraphqlphxWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Vuegraphqlphx.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
