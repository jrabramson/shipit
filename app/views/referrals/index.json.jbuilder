json.array!(@referrals) do |referral|
  json.extract! referral, :id, :name
  json.url referral_url(referral, format: :json)
end
