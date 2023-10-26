import express from "express"
import homeController from "../controllers/home-controller.js"

const router = express.Router()

router.get('/', homeController.index)
router.get('/show', homeController.show)

export default router