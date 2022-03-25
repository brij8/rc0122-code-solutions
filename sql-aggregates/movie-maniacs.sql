select "customers"."firstName" as "first name",
       "customers"."lastName" as "last name",
        sum("payments"."amount") as "totalPaid"
  from "payments"
  join "customers" using ("customerId")
  group by "customerId"
  order by "totalPaid" desc;
