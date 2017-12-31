defmodule VuegraphqlphxWeb.Router do
  use VuegraphqlphxWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", VuegraphqlphxWeb do
    pipe_through :browser # Use the default browser stack
    get "/", PageController, :index
  end
  
  forward "/graphql",
    Absinthe.Plug,
    schema: VuegraphqlphxWeb.Schema
  
  forward "/graphiql",
    Absinthe.Plug.GraphiQL,
    schema: VuegraphqlphxWeb.Schema,
    interface: :simple


end
