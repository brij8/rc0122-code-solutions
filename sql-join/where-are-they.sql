select "line1",
       "district",
       "cities"."name" as "city name",
       "countries"."name" as "country name"
  from "addresses"
  join "cities" using ("cityId")
  join "countries" using ("countryId");
