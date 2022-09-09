export interface Brewery {
  id: string;
  name: string;
  brewery_type: string;
  street: string;
  address_2?: any;
  address_3?: any;
  city: string;
  state: string;
  county_province?: any;
  postal_code: string;
  country: string;
  longitude: string;
  latitude: string;
  phone: string;
  website_url: string;
  updated_at: Date;
  created_at: Date;
}
