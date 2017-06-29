require "sinatra"
require "sinatra/json"
require "json"
require "pry"

set :bind, '0.0.0.0'

set :public_folder, File.join(File.dirname(__FILE__), "public")
set :views, File.dirname(__FILE__) + "/app/views"

Dir[File.join(File.dirname(__FILE__), 'app', '**', '*.rb')].each do |file|
  require file
  also_reload file
end

# HOW TO READ OUR FILE:
def read_princesses
  JSON.parse(File.read("princesses.json"))
end

# API ENDPOINTS

get "/api/v1/princesses" do
  princesses = read_princesses #this is whats directing it to the correct json file

  content_type :json
  json princesses
end

post "/api/v1/princesses" do
  current_princesses = read_princesses

  princess = JSON.parse(request.body.read)
  princess["id"] = current_princesses["princesses"].last["id"] + 1

  current_princesses["princesses"] << princess
  File.write("princesses.json", JSON.pretty_generate(current_princesses))

  content_type :json
  status 201
  json princess
end

get "*" do
  erb :home
end
