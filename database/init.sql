-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
  "id" SERIAL PRIMARY KEY,
  "firstName" varchar (20) NOT NULL,
  "lastName" varchar (20) NOT NULL,
  "password" varchar (20) NOT NULL,
  "securityLevel" int,
  "phoneNumber" bigint,
  "email" varchar (40) NOT NULL,
  "role" varchar,
  "isActive" boolean
);

CREATE TABLE "clients" (
  "id" SERIAL PRIMARY KEY,
  "firstName" varchar (40) NOT NULL,
  "lastName" varchar (40) NOT NULL,
  "gender" varchar,
  "phoneNumber" bigint,
  "email" varchar,
  "criminalRecord" boolean,
  "misdemOrFel" varchar,
  "incarceratedYorN" boolean,
  "incarcerationLength" varchar,
  "releaseDate" date,
  "docNumber" varchar,
  "stateIncarcerated" varchar,
  "paroleOnRelease" boolean,
  "agentName" varchar,
  "agentPhone" bigint,
  "connections" boolean,
  "ifYesConnections" varchar,
  "business" varchar,
  "businessStage" varchar,
  "whyAtBeTheBoss" varchar,
  "whatHopeToGain" varchar,
  "profilePic" varchar,
  "timeStamp" timestamp,
  "isActive" boolean
);

CREATE TABLE "address" (
  "id" SERIAL PRIMARY KEY,
  "clients_id" int REFERENCES "clients",
  "street" varchar,
  "city" varchar,
  "state" varchar,
  "zip" int,
  "business" boolean,
  "home" boolean,
  "current" boolean
);


CREATE TABLE "competitions" (
  "id" SERIAL PRIMARY KEY,
  "dateOf" timestamp,
  "name" varchar
);

CREATE TABLE "clients_competitions" (
  "id" SERIAL PRIMARY KEY,
  "clients_id" int REFERENCES "clients",
  "competitions_id" int REFERENCES "competitions",
  "statusNum" int,
  "award" varchar,
  "notes" varchar
);

CREATE TABLE "links" (
  "id" SERIAL PRIMARY KEY,
  "clients_id" int REFERENCES "clients",
  "url" varchar
);

CREATE TABLE "tasks" (
  "id" SERIAL PRIMARY KEY,
  "users_id" int REFERENCES "user",
  "clients_id" int REFERENCES "clients",
  "task" varchar,
  "complete" boolean,
  "assignedOn" timestamp,
  "dueBy" timestamp
);

CREATE TABLE "notes" (
  "id" SERIAL PRIMARY KEY,
  "clients_id" int REFERENCES "clients",
  "users_id" int REFERENCES "user",
  "note" varchar,
  "timeStamp" timestamp
);

CREATE TABLE "events" (
  "id" SERIAL PRIMARY KEY,
  "eventDate" date,
  "startTime" timestamp,
  "endTime" time,
  "endEventDate" timestamp,
  "eventTitle" varchar,
  "notes" varchar,
  "location" varchar
);

CREATE TABLE "messages" (
  "id" SERIAL PRIMARY KEY,
  "threadID" int,
  "users_id" int REFERENCES "user",
  "path" varchar,
  "key" varchar,
  "body" varchar
);

CREATE TABLE "messages_clients" (
  "id" SERIAL PRIMARY KEY,
  "messages_id" int REFERENCES "messages",
  "clients_id" int REFERENCES "clients"
);

CREATE TABLE "survey" (
  "id" SERIAL PRIMARY KEY,
  "clients_id" int REFERENCES "clients",
  "businessStarted" boolean,
  "revenue" numeric,
  "date" date
);

CREATE TABLE "events_clients" (
  "id" SERIAL PRIMARY KEY,
  "clients_id" int REFERENCES "clients",
  "events_id" int REFERENCES "events"
);
