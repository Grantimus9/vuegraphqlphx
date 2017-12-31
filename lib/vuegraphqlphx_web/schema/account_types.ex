defmodule VuegraphqlphxWeb.Schema.AccountTypes do
  use Absinthe.Schema.Notation

  # alias VuegraphqlphxWeb.Resolvers

  @desc "A user"
  object :user do
    field :id, :id
    field :name, :string
  end

end