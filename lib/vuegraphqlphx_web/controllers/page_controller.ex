defmodule VuegraphqlphxWeb.PageController do
  use VuegraphqlphxWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
