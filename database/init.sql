-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user"
(
  "id" SERIAL PRIMARY KEY,
  "firstName" varchar NOT NULL,
  "lastName" varchar NOT NULL,
  "username" varchar NOT NULL,
  "password" varchar NOT NULL,
  "securityLevel" int,
  "phoneNumber" bigint,
  "email" varchar NOT NULL,
  "role" varchar,
  "isActive" boolean default True
);

CREATE TABLE "clients"
(
  "id" SERIAL PRIMARY KEY,
  "firstName" varchar NOT NULL,
  "lastName" varchar NOT NULL,
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
  "isActive" boolean default True
);

CREATE TABLE "address"
(
  "id" SERIAL PRIMARY KEY,
  "clients_id" int REFERENCES "clients",
  "street" varchar,
  "city" varchar,
  "state" varchar,
  "zip" int,
  "business" boolean,
  "home" boolean,
  "current" boolean default True
);


CREATE TABLE "competitions"
(
  "id" SERIAL PRIMARY KEY,
  "dateOf" varchar,
  "name" varchar,
  "winnerName" varchar,
  "amountGranted" varchar,
  "businessName" varchar,
  "notes" varchar

);

CREATE TABLE "clients_competitions"
(
  "id" SERIAL PRIMARY KEY,
  "clients_id" int REFERENCES "clients",
  "competitions_id" int REFERENCES "competitions",
  "status" varchar,
  "award" varchar,
  "grantAmount" int,
  "notes" varchar
);

CREATE TABLE "competition_status"
(
  "id" SERIAL PRIMARY KEY,
  "step1" varchar,
  "step2" varchar,
  "step3" varchar,
  "step4" varchar,
  "step5" varchar,
  "step6" varchar
);

CREATE TABLE "links"
(
  "id" SERIAL PRIMARY KEY,
  "clients_id" int REFERENCES "clients",
  "url" varchar
);

CREATE TABLE "participants"
(
  "id" varchar,
  "parName" varchar,
  "status" varchar
);

CREATE TABLE "tasks"
(
  "id" SERIAL PRIMARY KEY,
  "users_id" int REFERENCES "user",
  "clients_id" int REFERENCES "clients",
  "task" varchar,
  "complete" boolean default FALSE,
  "assignedOn" timestamp,
  "dueBy" timestamp,
  "completedOn" timestamp
);

CREATE TABLE "notes"
(
  "id" SERIAL PRIMARY KEY,
  "clients_id" int REFERENCES "clients",
  "users_id" int REFERENCES "user",
  "note" varchar,
  "timeStamp" timestamp
);

CREATE TABLE "events"
(
  "id" SERIAL PRIMARY KEY,
  "eventDate" timestamp,
  "endDate" timestamp,
  "eventTitle" varchar,
  "notes" varchar,
  "location" varchar
);

CREATE TABLE "messages"
(
  "id" SERIAL PRIMARY KEY,
  "threadID" int,
  "users_id" int REFERENCES "user",
  "path" varchar,
  "key" varchar,
  "body" varchar
);

CREATE TABLE "messages_clients"
(
  "id" SERIAL PRIMARY KEY,
  "messages_id" int REFERENCES "messages",
  "clients_id" int REFERENCES "clients"
);

CREATE TABLE "survey"
(
  "id" SERIAL PRIMARY KEY,
  "clients_id" int REFERENCES "clients",
  "businessStarted" boolean,
  "revenue" numeric,
  "date" date
);

CREATE TABLE "events_clients"
(
  "id" SERIAL PRIMARY KEY,
  "clients_id" int REFERENCES "clients",
  "events_id" int REFERENCES "events"
);
