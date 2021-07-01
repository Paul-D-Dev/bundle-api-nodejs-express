import expressLoader from './express';
import {Application} from "express";

export default async (app: Application) => {
    await expressLoader(app);
    console.log('Express initialized');
}
