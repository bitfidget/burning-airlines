json.array!(@flights) do |flight|
  json.extract! flight, :id, :flight_no, :plane_id, :origin, :destination, :departure
  json.url flight_url(flight, format: :json)
end
