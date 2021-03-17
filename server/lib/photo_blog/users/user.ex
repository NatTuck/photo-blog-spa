defmodule PhotoBlog.Users.User do
  use Ecto.Schema
  import Ecto.Changeset

  schema "users" do
    field :name, :string
    field :password_hash, :string

    has_many :posts, PhotoBlog.Posts.Post
    has_many :comments, PhotoBlog.Comments.Comment
    has_many :votes, PhotoBlog.Votes.Vote

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:name])
    |> add_password_hash(attrs["password"])
    |> validate_required([:name, :password_hash])
  end

  def add_password_hash(cset, nil) do
    cset
  end

  def add_password_hash(cset, password) do
    change(cset, Argon2.add_hash(password))
  end
end
