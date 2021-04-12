const getLandingPage = (req, res) => {
    res.render("landing_page")
}

const getQuizPage = (req, res) => {
    res.render("quiz_page")
}

module.exports = {
    getLandingPage,
    getQuizPage
}