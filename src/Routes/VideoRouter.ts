import { Router } from "express";

const r = Router();

r.get('/home') 
r.get('/search') 
r.get('/trending') 
r.get('/history') 
r.get('/watchLater') 
r.get('/liked') 
r.get('/subscriptions')  
r.get('/home') 
r.get('/:videoId') 
 

export default r;
