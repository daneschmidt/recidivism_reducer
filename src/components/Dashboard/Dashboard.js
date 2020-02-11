import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const Dashboard = () => (
    <div>
        <div>
            <p>
                DASHBOARD!
                ITS THE DASH BOARRRRD
                Love, exciting and new
Come aboard, were expecting you
Love, lifes sweetest reward
Let it flow, it floats back to you
Love Boat soon will be making another run
The Love Boat promises something for everyone
Set a course for adventure
Your mind on a new romance
Love wont hurt anymore
Its an open smile on a friendly shore
Yes love...
Its love...

            </p>
        </div>
    </div>
);

export default Dashboard;