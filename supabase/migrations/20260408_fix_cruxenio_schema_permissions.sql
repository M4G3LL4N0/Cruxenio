grant usage on schema cruxenio to anon, authenticated, service_role;
grant create on schema cruxenio to service_role;

grant all on all tables in schema cruxenio to service_role;
grant all on all sequences in schema cruxenio to service_role;
grant all on all functions in schema cruxenio to service_role;

grant select, insert, update, delete on all tables in schema cruxenio to authenticated;
grant usage, select on all sequences in schema cruxenio to authenticated;
grant execute on all functions in schema cruxenio to authenticated;

grant select on all tables in schema cruxenio to anon;
grant usage, select on all sequences in schema cruxenio to anon;
grant execute on all functions in schema cruxenio to anon;

alter default privileges in schema cruxenio
grant all on tables to service_role;

alter default privileges in schema cruxenio
grant all on sequences to service_role;

alter default privileges in schema cruxenio
grant all on functions to service_role;

alter default privileges in schema cruxenio
grant select, insert, update, delete on tables to authenticated;

alter default privileges in schema cruxenio
grant usage, select on sequences to authenticated;

alter default privileges in schema cruxenio
grant execute on functions to authenticated;

alter default privileges in schema cruxenio
grant select on tables to anon;

alter default privileges in schema cruxenio
grant usage, select on sequences to anon;

alter default privileges in schema cruxenio
grant execute on functions to anon;
