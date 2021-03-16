defmodule PhotoBlogWeb.PageController do
  use PhotoBlogWeb, :controller

  alias PhotoBlog.Photos

  def index(conn, _params) do
    posts = PhotoBlog.Posts.list_posts()
    |> PhotoBlog.Posts.load_votes()
    render(conn, "index.html", posts: posts)
  end


  def photo(conn, %{"hash" => hash}) do
    {:ok, _name, data} = Photos.load_photo(hash)
    conn
    |> put_resp_content_type("image/jpeg")
    |> send_resp(200, data)
  end
end
