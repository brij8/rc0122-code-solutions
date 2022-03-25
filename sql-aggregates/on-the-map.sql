select "c"."name" as "country",
       count("cities".*) as "totalCities"
  from "countries" as "c"
  join "cities" using ("countryId")
 group by "c"."countryId";
