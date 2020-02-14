import express from 'express';
import bodyParser from 'body-parser';
import sessionMiddleware from './modules/session-middleware';
import passport from './strategies/user.strategy';
import userRouter from './routes/loginRouters/user.router';
import changePassword from './routes/loginRouters/changePassword.router';
import allClients from './routes/allClients.router';
import profile from './routes/profile.router';
import editProfile from './routes/editProfile.router';
import bossFormRouter from './routes/bossform.router';
import tasksGet from './routes/tasksRouters/tasksGet.router';
import tasks from './routes/tasksRouters/tasks.router';

require('dotenv').config();

const app: any = express();

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/clients', bossFormRouter);
app.use('/api/user/change', changePassword);
app.use('/api/clients/all', allClients);
app.use('/api/tasksGet', tasksGet);
app.use('/api/tasks', tasks);
app.use('/api/competitions', competitions);
app.use('/api/user', userRouter);
app.use('/api/user/change', changePassword);
app.use('/api/clients/all', allClients);
app.use('/api/profile', profile);
app.use('/api/profile', editProfile);
app.use('/api/clients', bossFormRouter);
app.use('/api/tasksGet', tasksGet);
app.use('/api/tasks', tasks);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT: number | string = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, (): void => {
  console.log(`So awesome. Much wow. Listening on port: ${PORT}`);
});

export default app;
