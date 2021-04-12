const { Router } = require("express");
const routes = Router()
const homeController = require("../controller/homeController")

routes.get("/", homeController.getLandingPage )
routes.get("/quiz", homeController.getQuizPage )

module.exports = routes