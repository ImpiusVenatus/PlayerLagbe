import express from 'express'
import { 
    createTour, 
    deleteTour, 
    getAllTour, 
    getFeaturedTour, 
    getSingleTour, 
    getTourBySearch, 
    getTourCount, 
    updateTour 
} from '../controllers/tourController.js'
import { verifyAdmin } from '../utils/verifyToken.js'

const router = express.Router()

//Create New Tour
router.post('/', verifyAdmin, createTour)

//Update New Tour
router.put('/:id', verifyAdmin, updateTour)

//Delete New Tour
router.delete('/:id', verifyAdmin, deleteTour)

//Get Single Tour
router.get('/:id', getSingleTour)

//Get all tours
router.get('/', getAllTour)

//Get tour by search
router.get("/search/getTourBySearch", getTourBySearch)
router.get("/search/getFeaturedTours", getFeaturedTour)
router.get("/search/getTourCount", getTourCount)

export default router;