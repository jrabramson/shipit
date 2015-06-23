json.array!(@advocates) do |advocate|
  json.extract! advocate, :id, :name, :company, :email, :ref_email, :note
  json.url advocate_url(advocate, format: :json)
end
