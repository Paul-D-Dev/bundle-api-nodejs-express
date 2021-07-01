import { Application } from 'express';


export default async (app : Application) => {
    app.get('/status', (req, res) => { res.status(200).end(); });
    app.head('/status', (req, res) => { res.status(200).end(); });

    return app;
};
