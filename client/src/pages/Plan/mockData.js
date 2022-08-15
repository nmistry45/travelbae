const data = {
  plan_id: 1,
  plan_name: "My Paris Plan",
  userID: "b@gmail.com",
  city: "Paris",
  country: "France",
  start_date: "2022-07-12T14:31:37.621+00:00",
  end_date: "2022-10-24T18:33:00.000+00:00",
  travel_partner: "solo",
  is_completed: false,
  accommodation: [
    {
      hotel_id: "001",
      hotel_name: "Atlantic Hotel Halifax",
      address: "2060 Quingate Place",
      price: 80,
    },
  ],
  activity: [
    {
      activity_id: "001",
      activity_name: "Africville Museum",
      activity_address: "Halifax, NS",
      price: 80,
    },
  ],
  transportation: [
    {
      source: "Halifax",
      dest_name: "India",
      flight_company: "Air Canada",
      start_date: "2022-07-12T14:31:37.621+00:00",
      return_date: "2022-10-24T18:33:00.000+00:00",
      trip_type: "Round Trip",
      price: 1500,
      trip_duration: "15 hours",
      flight_company_logo: "A",
    },
  ],
};

export default data;
