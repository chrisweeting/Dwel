@search_record.each do |search_record|
  json.set! search_record.id do
    json.partial! "api/search_records/saved", search_record: search_record
  end
end